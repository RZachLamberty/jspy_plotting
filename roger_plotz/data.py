#!/usr/bin/env python
# -*- coding: utf-8 -*-

"""
Module: data.py
Author: zlamberty
Created: 2016-05-25

Description:
    commonly used data elements (i.e. what we're plotting)

Usage:
    <usage>

"""

import numpy as np
import pandas as pd

import eri.logging as logging


# ----------------------------- #
#   Module Constants            #
# ----------------------------- #

logger = logging.getLogger(__name__)
logging.configure()

LINE = {
    'x': np.linspace(-2 * np.pi, 2 * np.pi, 500),
}
LINE['y'] = np.sin(LINE['x']) + 0.1 * np.random.randn(len(LINE['x']))
LINE_DF = pd.DataFrame(LINE)

BAR = {
    'animal': ['lizard', 'dog', 'cat', 'bird', 'hamster', 'fish'],
    'number': [25, 250, 1, 50, 45, 75],
}
BAR_DF = pd.DataFrame(BAR)

STATE_DF = pd.read_csv('https://raw.githubusercontent.com/plotly/datasets/master/2011_us_ag_exports.csv')
