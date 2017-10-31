from flask import render_template, redirect, url_for
from . import ds

@ds.route('/stacks')
def stacks():
    return render_template('ds/stacks.html')

@ds.route('/trees')
def trees():
    return render_template('ds/trees.html')

@ds.route('/graphs')
def graphs():
    return render_template('ds/graphs.html')

@ds.route('/queues')
def queues():
    return render_template('ds/queues.html')

@ds.route('/linked_lists')
def linked_lists():
    return render_template('ds/linked_lists.html')