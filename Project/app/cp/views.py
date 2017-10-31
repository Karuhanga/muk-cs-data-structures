from flask import render_template, url_for, redirect
from . import cp

@cp.route('/recursion')
def recursion():
    return render_template('cp/recursion.html')

@cp.route('/big-o')
def big_o():
    return render_template('cp/big-o.html')