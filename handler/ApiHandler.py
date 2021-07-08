from flask_restful import Api, Resource, reqparse
from handler import util






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
        off = (page-1)*15

        data = util.query_db("select * from hn_item WHERE front_rank IS NOT NULL order by front_rank asc limit 20 offset :page;", {'page' : off})
        return {
            'resultStatus': 'SUCCESS',
            'message': data
        }

class HnbestHandler(Resource):
    def get(self, page=1):
        if page < 1:
            raise Exception('page error')
        off = (page-1)*15

        data = util.query_db("select * from hn_item order by best_rank asc limit 20 offset :page", {'page' : off})
        return {
            'resultStatus': 'SUCCESS',
            'message': data
        }


class HnnewHandler(Resource):
    def get(self, page=1):
        if page < 1:
            raise Exception('page error')
        off = (page-1)*15
        data = util.query_db("select * from hn_item order by new_rank asc limit 20 offset :page", {'page' : off})
        return {
            'resultStatus': 'SUCCESS',
            'message': data
        }


class HnaskHandler(Resource):
    def get(self, page=1):
        if page < 1:
            raise Exception('page error')
        off = (page-1)*15
        data = util.query_db("select * from hn_item order by ask_rank asc limit 20 offset :page", {'page' : off})
        return {
            'resultStatus': 'SUCCESS',
            'message': data
        }


class HnshowHandler(Resource):
    def get(self, page=1):
        if page < 1:
            raise Exception('page error')
        off = (page-1)*15

        data = util.query_db("select * from hn_item order by show_rank asc limit 20 offset :page", {'page' : off})
        return {
            'resultStatus': 'SUCCESS',
            'message': data
        }


class HnjobHandler(Resource):
    def get(self, page=1):
        if page < 1:
            raise Exception('page error')
        off = (page-1)*15
        data = util.query_db("select * from hn_item order by job_rank asc limit 20 offset :page", {'page' : off})
        return {
            'resultStatus': 'SUCCESS',
            'message': data
        }