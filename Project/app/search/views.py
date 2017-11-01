from flask import render_template, url_for, redirect
from . import search

@search.route('/linear_search')
def linear_search():
    return render_template('search/linear_search.html')

@search.route('/binary_search')
def binary_search():
    return render_template('search/binary_search.html')