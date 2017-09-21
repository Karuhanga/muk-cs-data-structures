from flask import Blueprint

main = Blueprint('main', __name__)

"""these imports are put at the bottom to prevent infinite circular imports
    since flask doesnt really have an explicit way of managing loose coupling
    at laeast no way that i know of
"""
from . import views