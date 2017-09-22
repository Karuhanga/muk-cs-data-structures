from flask import render_template, url_for, redirect
from . import sort

@sort.route('/bubble_sort')
def bubble_sort():
    return render_template('sort/bubble_sort.html')

@sort.route('/insertion_sort')
def insertion_sort():
    return render_template('sort/insertion_sort.html')

@sort.route('/merge_sort')
def merge_sort():
    return render_template('sort/merge_sort.html')

