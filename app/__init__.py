from flask import Flask
from config import config


def create_app(config_name):
    app = Flask(__name__)
    app.config.from_object(config['development'])
    config['development'].init_app(app)

    from .main import main as main_blueprint
    app.register_blueprint(main_blueprint)

    return app