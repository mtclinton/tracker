from flask import Flask, render_template, request, g
import sqlite3 as sql
from flask_restful import Api, Resource, reqparse
from flask_cors import CORS #comment this on deployment


from handler import ApiHandler

app = Flask(__name__)
app.config.from_pyfile('config.py')
CORS(app) #comment this on deployment

api = Api(app)

api.add_resource(ApiHandler.HomeHandler, "/")

if __name__ == '__main__':
    app.run(debug=True)