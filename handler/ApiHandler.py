from flask_restful import Api, Resource, reqparse
from handler import util


class ApiHandler(Resource):
    def get(self, page, topic_name):
        data = util.query_db("select * from food order by date desc limit 15")
        return {
            'resultStatus': 'SUCCESS',
            'message': data
        }