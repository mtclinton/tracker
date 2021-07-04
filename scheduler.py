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
        front: int = -1
        new: int = -1
        best: int = -1
        show: int = -1
        ask: int = -1
        jobs: int = -1

    items = dict()
    news_client = NewsClient()
    front = news_client.get_top_story_ids()
    new = news_client.get_new_story_ids()
    best = news_client.get_best_story_ids()
    show = news_client.get_show_story_ids()
    ask = news_client.get_ask_story_ids()
    jobs = news_client.get_job_story_ids()

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

    data = query_db("select id from hn_delete order by id desc;")

    stories = []

    # remove deleted items
    for k, v in items:
        if k in data:
            del items[k]

        else:
            story = news_client.get_item_by_id(k)
            story['front_rank'] = 0
            story['new_rank'] = 0
            story['best_rank'] = 0
            story['ask_rank'] = 0
            story['show_rank'] = 0
            story['job_rank'] = 0

            story['starred'] = 0
            stories.append(story)

    try:

        with sql.connect("database.db") as con:
            cur = con.cursor()
            cur.execute("delete from hn_item")
            con.commit()
            for stor in stories:
                cur.execute("INSERT INTO hn_item (id, deleted,type,author,time,dead,parent,poll,kids,url,score,title,parts,descendants,front_rank  ,new_rank  ,best_rank  ,ask_rank  ,show_rank  ,job_rank  ,starred) "
                            "VALUES(?, ?, ?, ?,?, ?, ?, ?,?, ?, ?, ?,?, ?, ?, ?,?, ?, ?, ?,?)",
                            (stor['id'],stor['deleted'],stor['type'],stor['author'],stor['time'],stor['dead'],stor['parent'],stor['poll'],stor['kids'],stor['url'],stor['score'],stor['title'],stor['parts'],stor['descendants'],stor['front_rank  '],stor['new_rank'],stor['best_rank'],stor['ask_rank'],stor['show_rank'],stor['job_rank'],stor['starred'] ))

            con.commit()
            msg = "Record successfully added"
    except:
        con.rollback()
        msg = "error in insert operation"

    con.close()
