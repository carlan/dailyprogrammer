#!/usr/bin/env python
# -*- coding: utf-8 -*-

"""app.py: challenge #3"""
__author__ = "Carlan Calazans"
__copyright__ = "Copyright 2016, Carlan Calazans"
__credits__ = ["Carlan Calazans"]
__license__ = "MIT"
__version__ = "1.0.0"
__maintainer__ = "Carlan Calazans"
__email__ = "carlancalazans at gmail dot com"
__status__ = "Development"

class CaesarCipher(object):
	def encrypt(self, key, text):
		result = ''
		for symbol in text:
			if symbol.isalpha():
				symbol_number = ord(symbol)
				if symbol.islower():
					shifted = (symbol_number - 97 + key) % 26 + 97
					result += chr(shifted)
					#print("symbol={}, symbol_number={}, symbol_number-97={}, shift 1={}".format(symbol, symbol_number, symbol_number-97, chr(shifted)))
				if symbol.isupper():
					shifted = (symbol_number - 65 + key) % 26 + 65
					result += chr(shifted)
					#print("symbol={}, symbol_number={}, symbol_number-65={}, shift 1={}".format(symbol, symbol_number, symbol_number-65, chr(shifted)))
			else:
				result += symbol
		return result
	
	def decrypt(self, key, text):
		result = ''
		for symbol in text:
			if symbol.isalpha():
				symbol_number = ord(symbol)
				if symbol.islower():
					shifted = (symbol_number - 97 - key) % 26 + 97
					result += chr(shifted)
					#print("symbol={}, symbol_number={}, symbol_number-97={}, shift 1={}".format(symbol, symbol_number, symbol_number-97, chr(shifted)))
				if symbol.isupper():
					shifted = (symbol_number - 65 - key) % 26 + 65
					result += chr(shifted)
					#print("symbol={}, symbol_number={}, symbol_number-65={}, shift 1={}".format(symbol, symbol_number, symbol_number-65, chr(shifted)))
			else:
				result += symbol
		return result

caesar = CaesarCipher()
enc_lowercase = caesar.encrypt(1, 'The first step is you have to say that you can.')
enc_uppercase = caesar.encrypt(1, 'THE FIRST STEP IS YOU HAVE TO SAY THAT YOU CAN.')

print(enc_lowercase)
print(enc_uppercase)

print(caesar.decrypt(1, enc_lowercase))
print(caesar.decrypt(1, enc_uppercase))