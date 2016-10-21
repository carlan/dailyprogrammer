#!/usr/bin/env python
# -*- coding: utf-8 -*-

"""app.py: challenge #1"""
__author__ = "Carlan Calazans"
__copyright__ = "Copyright 2016, Carlan Calazans"
__credits__ = ["Carlan Calazans"]
__license__ = "MIT"
__version__ = "1.0.0"
__maintainer__ = "Carlan Calazans"
__email__ = "carlancalazans at gmail dot com"
__status__ = "Development"

name = input('What\'s your name? ')
age = input('What\'s your age? ')
username = input('What\'s your reddit username? ')

output = "your name is {}, you are {} years old, and your username is {}".format(name, age, username)

print ( output )

with open('output.txt', mode='w',encoding='utf-8') as file:
	file.write( output + '\n' )
