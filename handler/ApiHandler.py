import math

from flask_restful import Api, Resource, reqparse
from handler import util
from hnscraper import Item

import sqlite3 as sql




class HomeHandler(Resource):
    def get(self, page, topic_name):

        data = util.query_db("select * from work order by date desc limit 15")
        return {
            'resultStatus': 'SUCCESS',
            'message': data
        }

class HnfrontHandler(Resource):
    def get(self, page=1):
        if page < 1:
            raise Exception('page error')
        off = (page-1)*20
        data = util.query_db("select * from hn_item WHERE front_rank IS NOT NULL order by front_rank asc limit 20 offset :page;", {'page' : off})
        # print(data[0][0])   # error if none
        return {
            'resultStatus': 'SUCCESS',
            'message': data
        }

class HnbestHandler(Resource):
    def get(self, page=1):
        if page < 1:
            raise Exception('page error')
        off = (page-1)*20

        data = util.query_db("select * from hn_item WHERE best_rank IS NOT NULL order by best_rank asc limit 20 offset :page", {'page' : off})
        return {
            'resultStatus': 'SUCCESS',
            'message': data
        }


class HnnewHandler(Resource):
    def get(self, page=1):
        if page < 1:
            raise Exception('page error')
        off = (page-1)*20
        data = util.query_db("select * from hn_item WHERE new_rank IS NOT NULL order by new_rank asc limit 20 offset :page", {'page' : off})
        return {
            'resultStatus': 'SUCCESS',
            'message': data
        }


class HnaskHandler(Resource):
    def get(self, page=1):
        if page < 1:
            raise Exception('page error')
        off = (page-1)*20
        data = util.query_db("select * from hn_item WHERE ask_rank IS NOT NULL order by ask_rank asc limit 20 offset :page", {'page' : off})
        return {
            'resultStatus': 'SUCCESS',
            'message': data
        }


class HnshowHandler(Resource):
    def get(self, page=1):
        if page < 1:
            raise Exception('page error')
        off = (page-1)*20

        data = util.query_db("select * from hn_item WHERE show_rank IS NOT NULL order by show_rank asc limit 20 offset :page", {'page' : off})
        return {
            'resultStatus': 'SUCCESS',
            'message': data
        }


class HnjobHandler(Resource):
    def get(self, page=1):
        if page < 1:
            raise Exception('page error')
        off = (page-1)*20
        data = util.query_db("select * from hn_item WHERE job_rank IS NOT NULL order by job_rank asc limit 20 offset :page", {'page' : off})
        return {
            'resultStatus': 'SUCCESS',
            'message': data
        }


class HnPageHandler(Resource):
    def get(self, type):
        if type == 'front_rank':
            data = util.query_db("select count(*) from hn_item WHERE front_rank IS NOT NULL;")
        elif type == 'new_rank':
            data = util.query_db("select count(*) from hn_item WHERE new_rank IS NOT NULL;")
        elif type == 'best_rank':
            data = util.query_db("select count(*) from hn_item WHERE best_rank IS NOT NULL;")
        elif type == 'ask_rank':
            data = util.query_db("select count(*) from hn_item WHERE ask_rank IS NOT NULL;")
        elif type == 'job_rank':
            data = util.query_db("select count(*) from hn_item WHERE job_rank IS NOT NULL;")
        elif type == 'show_rank':
            data = util.query_db("select count(*) from hn_item WHERE show_rank IS NOT NULL;")
        else:
            return {
                'resultStatus': 'FAILURE',
                'message': 0
            }
        data = math.ceil(data[0][0]/20)
        print(data)
        return {
            'resultStatus': 'SUCCESS',
            'message': data
        }

class HnUnstarHandler(Resource):
    def get(self, id):
        con = sql.connect("database.db")
        cur = con.cursor()

        cur.execute("UPDATE hn_item SET starred = 0 WHERE id = :id;", {'id' : id})

        cur.execute("delete from starred WHERE id = :id;", {'id' : id})
        con.commit()
        con.close()
        print("deleted")
        return {
            'resultStatus': 'SUCCESS',
            'message': 1
        }

class HnStarHandler(Resource):
    def get(self, id):
        con = sql.connect("database.db")
        cur = con.cursor()

        cur.execute("UPDATE hn_item SET starred = 1 WHERE id = :id;", {'id' : id})

        data = cur.execute("select * from hn_item WHERE id = :id;", {'id' : id})
        data = data.fetchall()
        stor =data[0]
        cur.execute("INSERT INTO starred (id, deleted,type,author,time, text,dead,parent,poll,kids,url,score,title,parts,descendants) "
                            "VALUES(?, ?, ?, ?,?, ?, ?, ?,?, ?, ?, ?,?, ?, ?)",
                            (
                            stor[0], stor[1], stor[2], stor[3], stor[4], stor[5], stor[6], stor[7],
                            stor[8], stor[9], stor[10], stor[11], stor[12], stor[13], stor[14]))
        con.commit()
        con.close()
        return {
            'resultStatus': 'SUCCESS',
            'message': 1
        }

class HnStarredHandler(Resource):
    def get(self, page=1):
        if page < 1:
            raise Exception('page error')
        off = (page-1)*20
        data = util.query_db("select * from starred order by id asc limit 20 offset :page", {'page' : off})
        print(data)
        return {
            'resultStatus': 'SUCCESS',
            'message': data
        }

class HnStarPageHandler(Resource):
    def get(self):


        data = util.query_db("select count(*) from starred;")
        data = math.ceil(data[0][0]/20)
        #print(data[0][0])
        return {
            'resultStatus': 'SUCCESS',
            'message': data
        }

class HnDeleteHandler(Resource):
    def get(self, id):
        con = sql.connect("database.db")
        cur = con.cursor()

        data = cur.execute("select * from hn_item WHERE id = :id;", {'id' : id})
        data = data.fetchall()
        stor =data[0]
        cur.execute("delete from hn_item WHERE id = :id;", {'id' : id})

        cur.execute("INSERT INTO hn_delete (id, deleted,type,author,time, text,dead,parent,poll,kids,url,score,title,parts,descendants) "
                            "VALUES(?, ?, ?, ?,?, ?, ?, ?,?, ?, ?, ?,?, ?, ?)",
                            (
                            stor[0], stor[1], stor[2], stor[3], stor[4], stor[5], stor[6], stor[7],
                            stor[8], stor[9], stor[10], stor[11], stor[12], stor[13], stor[14]))
        con.commit()
        con.close()
        return {
            'resultStatus': 'SUCCESS',
            'message': 1
        }

class HnDeletedHandler(Resource):
    def get(self, page=1):
        if page < 1:
            raise Exception('page error')
        off = (page-1)*20
        data = util.query_db("select * from hn_delete order by id asc limit 20 offset :page", {'page' : off})
        print(data)
        return {
            'resultStatus': 'SUCCESS',
            'message': data
        }

class HnDeletePageHandler(Resource):
    def get(self):


        data = util.query_db("select count(*) from hn_delete;")
        data = math.ceil(data[0][0]/20)
        #print(data[0][0])
        return {
            'resultStatus': 'SUCCESS',
            'message': data
        }