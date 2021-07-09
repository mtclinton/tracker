import time
from datetime import datetime

from hnscraper import NewsClient
from flask import Flask, render_template, request, g

from dataclasses import dataclass
import sqlite3 as sql

DATABASE = 'database.db'

def get_db():
    db = getattr(g, '_database', None)
    if db is None:
        db = g._database = sql.connect(DATABASE)
    return db


def query_db(query, args=(), one=False):
    cur = get_db().execute(query, args)
    rv = cur.fetchall()
    cur.close()
    return (rv[0] if rv else None) if one else rv

def scrape_hackernews():
    @dataclass
    class Story(object):

        id: int = 0
        front: int = None
        new: int = None
        best: int = None
        show: int = None
        ask: int = None
        jobs: int = None

    items = dict()
    news_client = NewsClient()
    now = datetime.now()

    current_time = now.strftime("%H:%M:%S")
    print("Start Time =", current_time)
    # print('fetching')

    front = news_client.get_top_story_ids()
    new = news_client.get_new_story_ids()
    best = news_client.get_best_story_ids()
    show = news_client.get_show_story_ids()
    ask = news_client.get_ask_story_ids()
    jobs = news_client.get_job_story_ids()
    # print('finished fetching')
    for index, story_id in enumerate(front):
        if story_id in items.keys():
            items[story_id].front = index
        else:
            s = Story(id=story_id, front=index)
            items[story_id] = s

    for index, story_id in enumerate(new):
        if story_id in items.keys():
            items[story_id].new = index
        else:
            s = Story(id=story_id, new=index)
            items[story_id] = s

    for index, story_id in enumerate(best):
        if story_id in items.keys():
            items[story_id].best = index
        else:
            s = Story(id=story_id, best=index)
            items[story_id] = s

    for index, story_id in enumerate(show):
        if story_id in items.keys():
            items[story_id].show = index
        else:
            s = Story(id=story_id, show=index)
            items[story_id] = s

    for index, story_id in enumerate(ask):
        if story_id in items.keys():
            items[story_id].ask = index
        else:
            s = Story(id=story_id, ask=index)
            items[story_id] = s

    for index, story_id in enumerate(jobs):
        if story_id in items.keys():
            items[story_id].jobs = index
        else:
            s = Story(id=story_id, jobs=index)
            items[story_id] = s
    # print('finished sorting')
    con = sql.connect("database.db")
    cur = con.cursor()
    cur.execute("select id from hn_delete order by id desc;")
    data = cur.fetchall()
    # print('data: '+str(data))
    cur.execute("select id from starred order by id desc;")
    starred = cur.fetchall()

    con.close()

    stories = []
    nones=[]
    # remove deleted items
    j=0
    print(len(items))
    for k, v in items.items():
        if j % 50 == 0:
            if j % 300 == 0:
                print(j)
            time.sleep(5)
        if k in data:
            del items[k]

        else:
            story = news_client.get_item_by_id(k)
            if story == None:
                nones.append(k)
                continue
            if v.front != None:
                story.front_rank = v.front
            if v.new != None:
                story.new_rank = v.new
            if v.best != None:
                story.best_rank = v.best
            if v.ask != None:
                story.ask_rank = v.ask
            if v.show != None:
                story.show_rank = v.show
            if v.jobs != None:
                story.jobs_rank = v.jobs

            stories.append(story)
            j += 1

        # print(j)
    aaa=''
    try:

        with sql.connect("database.db") as con:
            cur = con.cursor()
            cur.execute("delete from hn_item")
            con.commit()
            i=0
            for stor in stories:
                if stor.id in starred:
                    stor.starred = 1
                aaa = (
                            stor.id, stor.deleted, stor.type, stor.by, stor.time, stor.dead, stor.parent, stor.poll,
                            stor.kids, stor.url, stor.score, stor.title, stor.parts, stor.descendants, stor.front_rank,
                            stor.new_rank, stor.best_rank, stor.ask_rank, stor.show_rank, stor.jobs_rank, stor.starred)
                # print('story: '+str(i))
                i+=1
                cur.execute("INSERT INTO hn_item (id, deleted,type,author,time,dead,parent,poll,kids,url,score,title,parts,descendants,front_rank  ,new_rank  ,best_rank  ,ask_rank  ,show_rank  ,job_rank  ,starred) "
                            "VALUES(?, ?, ?, ?,?, ?, ?, ?,?, ?, ?, ?,?, ?, ?, ?,?, ?, ?, ?,?)",
                            (
                            stor.id, stor.deleted, stor.type, stor.by, stor.time, stor.dead, stor.parent, stor.poll,
                            str(stor.kids), stor.url, stor.score, stor.title, str(stor.parts), stor.descendants, stor.front_rank,
                            stor.new_rank, stor.best_rank, stor.ask_rank, stor.show_rank, stor.jobs_rank, stor.starred))
                msg = "Records successfully added"
                # print(msg)
            con.commit()
            msg = "Records successfully added"
            # print(msg)
        print(nones)
        print('done updating records')
        now = datetime.now()

        current_time = now.strftime("%H:%M:%S")
        print("End Time =", current_time)

    except Exception as e:
        con.rollback()
        msg = "error in insert operation"
        print(e)
        print(aaa)


#scrape_hackernews()