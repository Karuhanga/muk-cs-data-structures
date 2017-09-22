from flask import render_template, url_for, redirect
from . import ads

@ads.route('/linked_lists')
def linked_lists():
    return render_template('ads/linked_lists.html')

@ads.route('/priority_queues')
def priority_queues():
    return render_template('ads/priority_queues.html')

@ads.route('/heaps')
def heaps():
    return render_template('ads/heaps.html')

@ads.route('/trees')
def trees():
    return render_template('ads/trees.html')

@ads.route('/graphs')
def graphs():
    return render_template('ads/graphs.html')

