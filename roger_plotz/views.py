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


# ----------------------------- #
#   routes                      #
# ----------------------------- #

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
        barjson=BAR_DF.to_json(orient='records'),
        statejson=STATE_DF.to_json(orient='records')
    )


@app.route('/plotly')
def plotly():
    # get data to plot
    # do make plots
    return render_template(
        'plotly.html',
        title='plotly',
        linejson=LINE_DF.to_json(orient='records'),
        barjson=BAR_DF.to_json(orient='records'),
        statejson=STATE_DF.to_json(orient='records')
    )


from .bokeh_plots import *


@app.route('/bokeh')
def bokeh():
    # for bokeh, we have to actually generate the plots by hand -- LAME, RIGHT?
    linescr, linediv = bokeh_line(LINE_DF)
    barscr, bardiv = bokeh_bar(BAR_DF)
    mapscr, mapdiv = bokeh_choropleth(STATE_DF)
    linkscr, linkdiv = bokeh_linked()
    brushscr, brushdiv = bokeh_brushed()
    return render_template(
        'bokeh.html',
        title='bokeh',
        linescr=linescr, linediv=linediv,
        barscr=barscr, bardiv=bardiv,
        mapscr=mapscr, mapdiv=mapdiv,
        linkscr=linkscr, linkdiv=linkdiv,
        brushscr=brushscr, brushdiv=brushdiv
    )


from .google_charts import *


@app.route('/google_charts')
def google_charts():
    return render_template(
        'google_charts.html',
        title='google_charts',
        linejson=df2jsarray(LINE_DF),
        barjson=df2jsarray(BAR_DF),
        statejson=df2jsarray(STATE_DF, columns=['state', 'corn'])
    )


from .mpld3_plots import *


@app.route('/mpld3')
def mpld3():
    return render_template(
        'mpld3.html',
        title='mpld3',
        linehtml=mpld3_line(LINE_DF),
        barhtml=mpld3_bar(BAR_DF),
    )


from .chartkick_plots import *

@app.route('/chartkick')
def chartkick():
    return render_template(
        'chartkick.html',
        title='chartkick',
        linedata=LINE_DF.to_json(orient='values'),
        bardata=BAR_DF.to_json(orient='values')
    )


@app.route('/flot')
def flot():
    return render_template(
        'flot.html',
        title='flot',
        linejson=LINE_DF.to_json(orient='values'),
        barjson=BAR_DF.to_json(orient='values')
    )
