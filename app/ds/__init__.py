from flask import Blueprint
ds = Blueprint('ds', __name__)

from . import views
