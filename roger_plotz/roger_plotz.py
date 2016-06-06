#!/usr/bin/env python
# -*- coding: utf-8 -*-

"""
Module: roger_plotz.py
Author: zlamberty
Created: 2016-06-06

Description:
    primary implementation of the roger_plotz app

Usage:
    import only

"""

import eri.logging as logging

from flask import Flask


# ----------------------------- #
#   app and app-dependents      #
# ----------------------------- #

app = Flask(__name__)
app.config.from_object('config')

from .views import *


# ----------------------------- #
#   Module Constants            #
# ----------------------------- #

logger = logging.getLogger(__name__)
logging.configure()
