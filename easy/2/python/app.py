#!/usr/bin/env python
# -*- coding: utf-8 -*-

"""app.py: challenge #2"""
__author__ = "Carlan Calazans"
__copyright__ = "Copyright 2016, Carlan Calazans"
__credits__ = ["Carlan Calazans"]
__license__ = "MIT"
__version__ = "1.0.0"
__maintainer__ = "Carlan Calazans"
__email__ = "carlancalazans at gmail dot com"
__status__ = "Development"

class Calculator(object):
	def addition(self, n1, n2):
		print("Addition n1={} and n2={}".format(n1,n2))
		print("result={}".format(eval("n1+n2")))
		return n1+n2
	def subtraction(self, n1, n2):
		print("Subtraction n1={} and n2={}".format(n1,n2))
		print("result={}".format(eval("n1-n2")))
		return n1-n2
	def multiplication(self, n1, n2):
		print("Multiplication n1={} and n2={}".format(n1,n2))
		print("result={}".format(eval("n1*n2")))
		return n1*n2
	def division(self, n1, n2):
		print("Division n1={} and n2={}".format(n1,n2))
		print("result={}".format(eval("n1/n2")))
		return n1/n2

calc = Calculator()
calc.addition(2,2)
calc.subtraction(10,5)
calc.multiplication(3,3)
calc.division(9,3)
