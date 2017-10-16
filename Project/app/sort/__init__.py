from flask import Blueprint
sort = Blueprint('sort', __name__)

from . import views
