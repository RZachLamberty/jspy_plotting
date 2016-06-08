#!/usr/bin/env python
# -*- coding: utf-8 -*-

"""
Module: mpld3_plots.py
Author: zlamberty
Created: 2016-06-08

Description:
    utility functions used to create mpld3 plots

Usage:
    <usage>

"""

import matplotlib.pyplot as plt
import seaborn as sns

import mpld3

import eri.logging as logging

from functools import wraps


# ----------------------------- #
#   Module Constants            #
# ----------------------------- #

logger = logging.getLogger(__name__)
logging.configure()


# ----------------------------- #
#   Main routines               #
# ----------------------------- #

def to_html(f):
    @wraps(f)
    def wrapper(*args, **kwargs):
        return mpld3.fig_to_html(f(*args, **kwargs).get_figure())
    return wrapper


@to_html
def mpld3_line(df):
    return df.plot.scatter('x', 'y')


@to_html
def mpld3_bar(df):
    #a = df.plot.bar('animal', 'number')
    #a.set_xticks(list(a.get_xticks()))
    f = plt.figure()
    a = f.add_subplot(111)
    a.bar(left=df.index.tolist(), height=df.number.tolist())
    a.set_xlabel('animal')
    a.set_ylabel('number')
    a.set_title('aminals!')
    return a


#@to_html
def mpld3_choropleth(df):
    return None


#@to_html
def mpld3_3d_scatter(df):
    return None
