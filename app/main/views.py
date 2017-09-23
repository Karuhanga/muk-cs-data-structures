from flask import render_template, url_for
from . import main

@main.route('/')
def home():
    return render_template('index.html')

@main.route('/the_project')
def index():
    return render_template('the_project.html')