from flask import render_template, url_for
from . import main

@main.route('/')
def home():
    return render_template('base.html')

@main.route('/index')
def index():
    return render_template('index.html')