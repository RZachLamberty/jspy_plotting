#!/usr/bin/env python
# -*- coding: utf-8 -*-

"""
Module: __init__.py
Author: zlamberty
Created: 2016-05-25

Description:
    flask app which integrates python data analysis with javascript
    visualization libraries. Should server as an example of how to integrate
    the two worlds, at least using flask.

Usage:
    <usage>

"""

import eri.logging as logging

from .roger_plotz import app


# ----------------------------- #
#   Module Constants            #
# ----------------------------- #

__all__ = [app]

logger = logging.getLogger(__name__)
logging.configure()
