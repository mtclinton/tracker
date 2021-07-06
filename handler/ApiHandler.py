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
    def get(self):

        data = util.query_db("select * from hn_item order by front_rank asc limit 15")
        return {
            'resultStatus': 'SUCCESS',
            'message': data
        }