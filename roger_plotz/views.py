#!/usr/bin/env python
# -*- coding: utf-8 -*-

"""
Module: views.py
Author: zlamberty
Created: 2016-05-25

Description:
    routes for our flask python+js plotting app

Usage:
    <usage>

"""

import json

import eri.logging as logging

from flask import render_template

from .constants import JS_LIBS
from .data import LINE_DF, BAR_DF, STATE_DF
from .roger_plotz import app


# ----------------------------- #
#   Module Constants            #
# ----------------------------- #

logger = logging.getLogger(__name__)


@app.route('/')
@app.route('/index')
def index():
    return render_template('index.html', title='Home', jsLibs=JS_LIBS)


@app.route('/d3js')
def d3js():
    # get data to plot
    # do make plots
    return render_template(
        'd3js.html',
        title='d3.js',
        linejson=LINE_DF.to_json(orient='records'),
        barjson=BAR_DF.to_json(orient='records')
    )


@app.route('/highcharts')
def highcharts():
    # get data to plot
    # do make plots
    return render_template(
        'highcharts.html',
        title='highcharts',
        linejson=LINE_DF.to_json(orient='values'),
        barjson=BAR_DF.to_json(orient='index'),
        statejson=STATE_DF.to_json(orient='index')
    )
