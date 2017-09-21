import os

class Config:
    SECRET_KEY = "gcysdh7ew63q98ytbcxybgv_hygfd653267"
    SQLALCHEMY_COMMIT_ON_TEARDOWN = True
    SQLALCHEMY_TRACK_MODIFICATIONS = False

    @staticmethod
    def init_app(app):
        pass


class DevelopmentConfig(Config):
    DEBUG = True
    """if you are using mysql as your database, your URI can look similar to mine
        However its important to note that sqlaclchemy uses mysqlite as the default database
        which may or may not require a custom URI
        its also imortant to look at the sqlaclchemy documents and get a better understanding
    """
    SQLALCHEMY_DATABASE_URI = "mysql://root:7910@localhost/DSA"

class TestingConfig(Config):
    TESTING = True
    SQLALCHEMY_DATABASE_URI = "database uri for testing"

class ProductionConfig(Config):
    SQLALCHEMY_DATABASE_URI = "database uri for production"



config = {
    'development': DevelopmentConfig,
    'testing': TestingConfig,
    'production': ProductionConfig,

    'default': DevelopmentConfig
}
