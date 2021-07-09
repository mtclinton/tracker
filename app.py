import os

from flask import Flask, render_template, request, g
import sqlite3 as sql
from flask_restful import Api, Resource, reqparse
from flask_cors import CORS #comment this on deployment
from flask_apscheduler import APScheduler

from scheduler import scrape_hackernews
from handler.ApiHandler import HomeHandler, HnfrontHandler, HnnewHandler, \
    HnbestHandler, HnaskHandler, HnjobHandler, HnshowHandler, HnPageHandler, \
    HnStarHandler, HnUnstarHandler,HnStarredHandler,HnStarPageHandler
from apscheduler.schedulers.background import BackgroundScheduler

def scrape():
    scrape_hackernews()

app = Flask(__name__)
app.config.from_pyfile('config.py')
CORS(app) #comment this on deployment

api = Api(app)



api.add_resource(HomeHandler, "/")

api.add_resource(HnfrontHandler, "/hn/front/<int:page>")
api.add_resource(HnnewHandler, "/hn/new/<int:page>")
api.add_resource(HnbestHandler, "/hn/best/<int:page>")
api.add_resource(HnaskHandler, "/hn/ask/<int:page>")
api.add_resource(HnjobHandler, "/hn/job/<int:page>")
api.add_resource(HnshowHandler, "/hn/show/<int:page>")
api.add_resource(HnPageHandler, "/hn/pages/<type>")

api.add_resource(HnUnstarHandler, "/hn/unstar/<int:id>")
api.add_resource(HnStarHandler, "/hn/star/<int:id>")

api.add_resource(HnStarredHandler, "/hn/starred/<int:page>")
api.add_resource(HnStarPageHandler, "/hn/starredpages")


# scheduler = APScheduler()
# scheduler.init_app(app)
# scheduler.start()
if not app.debug or os.environ.get('WERKZEUG_RUN_MAIN') == 'true':

    sched = BackgroundScheduler(daemon=True)
    sched.add_job(scrape,'interval',minutes=10)
    sched.start()

if __name__ == '__main__':
    app.run(debug=True)