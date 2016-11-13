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

class Protected(object):
	def __init__(self):
		self.auth_info = {}
		self.logged_in = False

	def load_login_and_password_from_file(self):
		with open('secret.txt', 'r') as file:
			for line in file:
				user, passwd = line.rstrip("\n").split(':')
				self.auth_info[user] = passwd
	
	def get_user_input(self):
		self.load_login_and_password_from_file()
		username = input('What\'s your username? ')
		password = input('What\'s your password? ')
		self.login(username, password)
		self.authorize()

	def login(self, username, password):
		if username in self.auth_info.keys():
			self.logged_in = (self.auth_info[username] == password)
		else:
			self.logged_in = False
	
	def authorize(self):
		if(self.logged_in):
			print('Logged in')
		else:
			print('Not allowed to login')

protected = Protected()
protected.get_user_input()