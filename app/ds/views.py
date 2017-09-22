from flask import render_template, redirect, url_for
form . import ds

@ds.route('/stacks')
def stacks():
    return render_template('ds/stacks.html')

@ds.route('/arrays')
def arrays():
    return render_template('ds/arrays.html')

@ds.route('/queues')
def queues():
    return render_template('ds/queues.html')

@ds.route('/lists')
def lists():
    return render_template('ds/lists.html')