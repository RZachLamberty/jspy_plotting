#!/usr/bin/env python
# -*- coding: utf-8 -*-

"""
Module: chartkick_plots.py
Author: zlamberty
Created: 2016-06-09

Description:
    isolating configuration nonsense for chartkicks

Usage:
    <usage>

"""

import chartkick
import eri.logging as logging

from flask import Blueprint
from .roger_plotz import app


# ----------------------------- #
#   Module Constants            #
# ----------------------------- #

logger = logging.getLogger(__name__)
logging.configure()


# ----------------------------- #
#   Main routine                #
# ----------------------------- #

# chartkick requires some additional configuration (registering the location
# of the chartkick javascript folder, as well as importing and extension)
ck = Blueprint(
    'ck_page', __name__, static_folder=chartkick.js(), static_url_path='/static'
)
app.register_blueprint(ck, url_prefix='/ck')
app.jinja_env.add_extension("chartkick.ext.charts")
