#!/usr/bin/env python
# -*- coding: utf-8 -*-

"""
Module: manage.py
Author: zlamberty
Created: 2016-06-06

Description:
    standard flask manage.py wrapper script

Usage:
    <usage>

"""

from flask_script import Manager
from roger_plotz import app

manager = Manager(app)


if __name__ == '__main__':
    manager.run()
