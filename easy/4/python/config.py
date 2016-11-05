#!/usr/bin/env python
# -*- coding: utf-8 -*-

"""config.py: challenge #4"""
__author__ = "Carlan Calazans"
__copyright__ = "Copyright 2016, Carlan Calazans"
__credits__ = ["Carlan Calazans"]
__license__ = "MIT"
__version__ = "1.0.0"
__maintainer__ = "Carlan Calazans"
__email__ = "carlancalazans at gmail dot com"
__status__ = "Development"

class Config(object):
	TEMPLATE = 'sldlswswswsldls'

	LEGEND = {
		"s": '!@$%^&*-_+=:|~?/.;',
		"d": '0123456789',
		"w": 'sister offense temporary sock finish experience issue mouth position deck seminar begin live blonde impound foot ambiguity smile breed lung'.split(),
		"l": 'abcdefghijklmnoprstuvwxyz'
	}