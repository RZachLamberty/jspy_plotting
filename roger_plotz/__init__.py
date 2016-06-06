#!/usr/bin/env python
# -*- coding: utf-8 -*-

"""
Module: __init__.py
Author: zlamberty
Created: 2016-05-25

Description:
    flask app which integrates python data analysis with javascript
    visualization libraries. Should server as an example of how to integrate
    the two worlds, at least using flask.

Usage:
    <usage>

"""

import os

import eri.logging as logging


from flask import Flask

# ----------------------------- #
#   app and app-dependents      #
# ----------------------------- #

app = Flask(__name__)
app.config.from_object('config')

from roger_plotz import views


# ----------------------------- #
#   Module Constants            #
# ----------------------------- #

logger = logging.getLogger(__name__)
logging.configure()
