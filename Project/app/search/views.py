from flask import render_template, url_for, redirect
from . import search

@search.route('/a_star_search')
def a_star_search():
    return render_template('search/a_star_search.html')

@search.route('/breadth_first_search')
def breadth_first_search():
    return render_template('search/breadth_first_search.html')

@search.route('/depth_first_search')
def depth_first_search():
    return render_template('search/depth_first_search.html')

@search.route('/uniform_cost_search')
def uniform_cost_search():
    return render_template('search/uniform_cost_search.html')

