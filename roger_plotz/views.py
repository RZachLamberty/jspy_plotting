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

import eri.logging as logging

from flask import render_template

from roger_plotz import app
from roger_plotz import data


# ----------------------------- #
#   Module Constants            #
# ----------------------------- #

logger = logging.getLogger(__name__)
logging.configure()


JS_LIBS = [
    {
        'name': 'd3.js',
        'link': 'https://d3js.org/',
        'route': 'd3js',
    },
    {
        'name': 'Highcharts',
        'link': 'http://www.highcharts.com/',
        'route': 'highcharts',
    },
    {
        'name': 'plotly',
        'link': 'https://plot.ly/javascript/',
    },
    {
        'name': 'bokeh',
        'link': 'http://bokeh.pydata.org/en/latest/',
    },
    {
        'name': 'google charts',
        'link': 'https://developers.google.com/chart/',
    },
    {
        'name': 'mpld3',
        'link': 'http://mpld3.github.io/',
    },
    {
        'name': 'chartkick',
        'link': 'https://github.com/mher/chartkick.py',
    },
    {
        'name': 'flot',
        'link': 'http://www.flotcharts.org/',
    },
    {
        'name': 'chartjs',
        'link': 'http://www.chartjs.org/',
    },
    {
        'name': 'chartist.js',
        'link': 'http://gionkunz.github.io/chartist-js/',
    },
    {
        'name': 'n3-charts',
        'link': 'http://n3-charts.github.io/line-chart/#/',
    },
    {
        'name': 'ember charts',
        'link': 'http://addepar.github.io/#/ember-charts/overview',
    },
    {
        'name': 'fusioncharts',
        'link': 'http://www.fusioncharts.com/',
    },
    {
        'name': 'dygraphs',
        'link': 'http://dygraphs.com/',
    },
    {
        'name': 'nvd3',
        'link': 'http://nvd3.org/',
    },
    {
        'name': 'sigma.js',
        'link': 'http://sigmajs.org/',
    },
    {
        'name': 'jQuery sparklines',
        'link': 'http://omnipotent.net/jquery.sparkline/#s-about',
    },
    {
        'name': 'morris.js',
        'link': 'http://morrisjs.github.io/morris.js/',
    },
    {
        'name': 'cytoscape.js',
        'link': 'http://js.cytoscape.org/',
    },
    {
        'name': 'c3.js',
        'link': 'http://c3js.org/',
    },
    {
        'name': 'rickshaw',
        'link': 'https://github.com/shutterstock/rickshaw',
    },
    {
        'name': 'cubism.js',
        'link': 'https://square.github.io/cubism/',
    },
    {
        'name': 'plottable.js',
        'link': 'http://plottablejs.org/',
    },
    {
        'name': 'canvas.js',
        'link': 'http://canvasjs.com/',
    },
    {
        'name': 'vega',
        'link': 'https://vega.github.io/vega/',
    },
    {
        'name': 'folium',
        'link': 'https://folium.readthedocs.io/en/latest/',
    },
    {
        'name': 'networkx',
        'link': 'https://networkx.github.io/',
    },
]


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
        linejson=data.LINE_DF.to_json(orient='records'),
        barjson=data.BAR_DF.to_json(orient='records'),
        statejson=data.STATE_DF.to_json(orient='records')
    )


@app.route('/highcharts')
def highcharts():
    # get data to plot
    # do make plots
    return render_template(
        'highcharts.html',
        title='highcharts',
        linejson=data.LINE_DF.to_json(orient='records'),
        barjson=data.BAR_DF.to_json(orient='records'),
        statejson=data.STATE_DF.to_json(orient='records')
    )
