#!/usr/bin/env python
# -*- coding: utf-8 -*-

"""
Module: constants.py
Author: zlamberty
Created: 2016-06-06

Description:
    shared constants

Usage:
    import only

"""


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
        'route': 'plotly',
    },
    {
        'name': 'bokeh',
        'link': 'http://bokeh.pydata.org/en/latest/',
        'route': 'bokeh',
    },
    {
        'name': 'google charts',
        'link': 'https://developers.google.com/chart/',
        'route': 'google_charts',
    },
    {
        'name': 'mpld3',
        'link': 'http://mpld3.github.io/',
        'route': 'mpld3'
    },
    {
        'name': 'chartkick',
        'link': 'https://github.com/mher/chartkick.py',
        'route': 'chartkick'
    },
    {
        'name': 'flot',
        'link': 'http://www.flotcharts.org/',
        'route': 'flot'
    },
    {
        'name': 'chartjs',
        'link': 'http://www.chartjs.org/',
        'route': 'chartjs'
    },
    {
        'name': 'chartist.js',
        'link': 'http://gionkunz.github.io/chartist-js/',
        'route': 'chartist'
    },
    {
        'name': 'dygraphs',
        'link': 'http://dygraphs.com/',
        'route': 'dygraph'
    },
    {
        'name': 'sigma.js',
        'link': 'http://sigmajs.org/',
        'route': 'sigmajs'
    },
    {
        'name': 'jQuery sparklines',
        'link': 'http://omnipotent.net/jquery.sparkline/#s-about',
        'route': 'jqsparklines'
    },
    {
        'name': 'morris.js',
        'link': 'http://morrisjs.github.io/morris.js/',
        'route': 'morris'
    },
    {
        'name': 'c3.js',
        'link': 'http://c3js.org/',
        'route': 'c3js'
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
    {
        'name': 'n3-charts',
        'link': 'http://n3-charts.github.io/line-chart/#/',
        'notes': (
            "This is an angular-focused charting library; I may revisit if and "
            "when I decide to build an angular application. At this point, "
            "though, I don't see enuogh of a benefit to using this library "
            "relative to other good options"
        ),
    },
    {
        'name': 'ember charts',
        'link': 'http://opensource.addepar.com/ember-charts/#/overview',
        'notes': (
            "So, very first impressions are: this is an underwhelming library. "
            "The focus is on implementing an ember.js library which takes care "
            "of most (or all) of the javascript code. The result is slick, but "
            "more than I am looking to implement right now, especially for "
            "(essentially) five types of plain grayscale charts."
        )
    },
    {
        'name': 'fusioncharts',
        'link': 'http://www.fusioncharts.com/',
        'notes': "not for free, not for me"
    },
    {
        'name': 'nvd3',
        'link': 'http://nvd3-community.github.io/nvd3/',
        'notes': (
            "I couldn't even get the examples (of which there are at least "
            "three different collections in different locations at different "
            "code versions) to work. For a thin convenience wrapper around d3, "
            "no thanks."
        )
    },
    {
        'name': 'cytoscape.js',
        'link': 'http://js.cytoscape.org/',
        'notes': (
            "honestly, just too complicated for right now. This library seems "
            "to be entirely focused on full-page interactive graph "
            "visualizations. This means it is cool, but also (currently) "
            "overkill for anything I am ready to display (plus, perhaps I "
            "should consider going down the Neo4j path if that's what I am "
            "looking for)."
        )
    },
]
