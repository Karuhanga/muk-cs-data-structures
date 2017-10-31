from flask import Flask
from config import config


def create_app(config_name):
    app = Flask(__name__)
    app.config.from_object(config['development'])
    config['development'].init_app(app)

    """ blue print registration """

    from .main import main as main_blueprint
    app.register_blueprint(main_blueprint)

    from .ds import ds as ds_blueprint
    app.register_blueprint(ds_blueprint, url_prefix = '/ds')

    from .cp import cp as cp_blueprint
    app.register_blueprint(cp_blueprint, url_prefix = '/cp')

    from .search import search as search_blueprint
    app.register_blueprint(search_blueprint, url_prefix = '/search')

    from .sort import sort as sort_blueprint
    app.register_blueprint(sort_blueprint, url_prefix = '/sort')



    return app