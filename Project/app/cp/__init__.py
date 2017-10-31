from flask import Blueprint
cp = Blueprint('cp', __name__)

from . import views
