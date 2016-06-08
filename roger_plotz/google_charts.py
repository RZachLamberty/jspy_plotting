#!/usr/bin/env python
# -*- coding: utf-8 -*-

"""
Module: google_charts.py
Author: zlamberty
Created: 2016-06-08

Description:
    util functions for google charts integration

Usage:
    <usage>

"""

import json

import eri.logging as logging


# ----------------------------- #
#   Module Constants            #
# ----------------------------- #

logger = logging.getLogger(__name__)
logging.configure()


# ----------------------------- #
#   utility functions           #
# ----------------------------- #

def df2jsarray(df, columns=None):
    """ convert a dataframe to the javascript array format expected by GC

    args:
        df: pandas data frame to cast to a javascript array
        columns: None or list. If None, the dataframe df's columns will be used.
            list items can be either column names (as strings) or dictionaries
            in the google charts column format (that is,
            {label: <str>, id: <str>[, type: <gc type option>]})

    returns:
        json array which can be used directly in
        google.visualization.arrayToDataTable

    """
    if columns is None:
        columns = df.columns.tolist()
    return json.dumps([columns] + df[columns].values.tolist())
