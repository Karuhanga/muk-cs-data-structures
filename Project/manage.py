
import os
from app import create_app
from flask_script import Manager, Shell
from flask_migrate import Migrate, MigrateCommand
from config import config

dev = config['development']

app = create_app(dev)
manager = Manager(app)



def make_shell_context():
    return dict(app=app)


manager.add_command("shell", Shell(make_context=make_shell_context))
manager.add_command('data', MigrateCommand)


@manager.command
def test():
    """Run the unit tests."""
    import unittest
    tests = unittest.TestLoader().discover('tests')
    unittest.TextTestRunner(verbosity=2).run(tests)


if __name__ == '__main__':
    manager.run()
