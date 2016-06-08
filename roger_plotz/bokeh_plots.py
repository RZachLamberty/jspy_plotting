#!/usr/bin/env python
# -*- coding: utf-8 -*-

"""
Module: bokeh_plots.py
Author: zlamberty
Created: 2016-06-08

Description:
    bokeh took up enough room I thought it deserved its own place

Usage:
    <usage>

"""

import numpy as np
import pandas as pd

import bokeh.charts as bkc
import bokeh.embed as bke
import bokeh.models as bkm
import bokeh.palettes as bkpal
import bokeh.plotting as bkp
import bokeh.sampledata.us_states as bksu


BOKEH_TOOLS = ",".join([
    "box_select", "box_zoom", "crosshair", "hover", "lasso_select", "pan",
    "reset", "resize", "save", "wheel_zoom"
])


def bokeh_line(df):
    """stolen more or less directly from
    http://bokeh.pydata.org/en/latest/docs/user_guide/quickstart.html

    """
    p = bkp.figure(
        tools=BOKEH_TOOLS,
        title="simple line chart",
        x_axis_label="x",
        y_axis_label="sin(x)"
    )

    p.line(df.x, df.y, legend='mydata')
    p.circle(df.x, df.y, fill_color='white', size=8)

    return bke.components(p)


def bokeh_bar(df):
    """stolen more or less directly from
    http://bokeh.pydata.org/en/0.11.1/docs/user_guide/charts.html

    """
    p = bkc.Bar(
        df, 'animal', values='number', title='aminals <3', tools=BOKEH_TOOLS
    )
    hover = p.select({'type': bkm.HoverTool})
    hover.tooltips = """<div>Aminal: @x</div><div>nubmer: @height</div>"""
    return bke.components(p)


def bokeh_choropleth(df):
    """stolen more or less directly from
    http://bokeh.pydata.org/en/0.11.1/docs/gallery/choropleth.html

    """
    states = bksu.data

    # map looks sooooo bad with these included
    for stkey in ['HI', 'AK', 'DC']:
        try:
            del states[stkey]
        except KeyError:
            pass

    state_xs = [d['lons'] for (code, d) in states.items()]
    state_ys = [d['lats'] for (code, d) in states.items()]
    colors = bkpal.Greens9
    colors.reverse()

    state_colors = []
    normcron = (df.corn - df.corn.min()) / df.corn.max()
    stateind = pd.qcut(df.corn, 6).cat.codes
    state_colors = [
        colors[stateind[df.code == statecode].iloc[0]]
        for (statecode, d) in states.items()
    ]
    p = bkp.figure(title='cron', toolbar_location='left', tools=BOKEH_TOOLS)
    p.patches(
        state_xs, state_ys, fill_color=state_colors, fill_alpha=0.7,
        line_color="#884444", line_width=2, line_alpha=0.3
    )

    return bke.components(p)


def bokeh_linked():
    """these are taken EXACTLY from
    http://bokeh.pydata.org/en/latest/docs/user_guide/quickstart.html

    """
    # prepare some data
    N = 100
    x = np.linspace(0, 4*np.pi, N)
    y0 = np.sin(x)
    y1 = np.cos(x)
    y2 = np.sin(x) + np.cos(x)

    # create a new plot
    s1 = bkp.figure(width=250, plot_height=250, title=None)
    s1.circle(x, y0, size=10, color="navy", alpha=0.5)

    # NEW: create a new plot and share both ranges
    s2 = bkp.figure(
        x_range=s1.x_range, y_range=s1.y_range, width=250, plot_height=250,
        title=None
    )
    s2.triangle(x, y1, size=10, color="firebrick", alpha=0.5)

    # NEW: create a new plot and share only one range
    s3 = bkp.figure(x_range=s1.x_range, width=250, plot_height=250, title=None)
    s3.square(x, y2, size=10, color="olive", alpha=0.5)

    # NEW: put the subplots in a gridplot
    p = bkp.gridplot([[s1, s2, s3]], toolbar_location=None)

    return bke.components(p)


def bokeh_brushed():
    """these are taken EXACTLY from
    http://bokeh.pydata.org/en/latest/docs/user_guide/quickstart.html

    """
    # prepare some date
    N = 300
    x = np.linspace(0, 4*np.pi, N)
    y0 = np.sin(x)
    y1 = np.cos(x)

    # NEW: create a column data source for the plots to share
    source = bkm.ColumnDataSource(data=dict(x=x, y0=y0, y1=y1))

    # create a new plot and add a renderer
    left = bkp.figure(tools=BOKEH_TOOLS, width=350, height=350, title=None)
    left.circle('x', 'y0', source=source)

    # create another new plot and add a renderer
    right = bkp.figure(tools=BOKEH_TOOLS, width=350, height=350, title=None)
    right.circle('x', 'y1', source=source)

    # put the subplots in a gridplot
    p = bkp.gridplot([[left, right]])

    return bke.components(p)
