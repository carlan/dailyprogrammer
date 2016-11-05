#!/usr/bin/env python
# -*- coding: utf-8 -*-

"""app.py: challenge #4"""
__author__ = "Carlan Calazans"
__copyright__ = "Copyright 2016, Carlan Calazans"
__credits__ = ["Carlan Calazans"]
__license__ = "MIT"
__version__ = "1.0.0"
__maintainer__ = "Carlan Calazans"
__email__ = "carlancalazans at gmail dot com"
__status__ = "Development"

import math
import random
from config import Config as config

class PasswordGenerator(object):
	def __init__(self, amount=1):
		self.amount = amount

	def generate(self):
		passwords = []

		for word in config.LEGEND['w']:
			word_index = config.LEGEND['w'].index(word)
			word = "".join( random.choice([letter.upper(), letter ]) for letter in word )
			config.LEGEND['w'][word_index] = word

		config.LEGEND['l'] = "".join( random.choice([letter.upper(), letter ]) for letter in config.LEGEND['l'] )

		for number in range(0, self.amount):
			password = ''
			for char in config.TEMPLATE:
				sorteable = config.LEGEND[char]
				picked = sorteable[math.floor(random.random() * len(sorteable))]
				password+=picked
			passwords.append(password)

		return passwords

password_generator = PasswordGenerator(10)
passwords = password_generator.generate()
print ('\n'.join('{}'.format(p) for p in passwords))