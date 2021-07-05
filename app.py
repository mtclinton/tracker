from flask import Flask, render_template, request, g
import sqlite3 as sql
from flask_restful import Api, Resource, reqparse
from flask_cors import CORS #comment this on deployment
from flask_apscheduler import APScheduler

from scheduler import scrape_hackernews
from handler.ApiHandler import HomeHandler, HnfrontHandler

def scrape():
    scrape_hackernews()

app = Flask(__name__)
app.config.from_pyfile('config.py')
CORS(app) #comment this on deployment

api = Api(app)



api.add_resource(HomeHandler, "/")

api.add_resource(HnfrontHandler, "/hn/front")

scheduler = APScheduler()
scheduler.init_app(app)


scheduler.start()

if __name__ == '__main__':
    app.run(debug=True)