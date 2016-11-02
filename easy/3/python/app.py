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
				if symbol.isupper():
					shifted = (symbol_number - 65 + key) % 26 + 65
					result += chr(shifted)
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
				if symbol.isupper():
					shifted = (symbol_number - 65 - key) % 26 + 65
					result += chr(shifted)
			else:
				result += symbol
		return result

caesar = CaesarCipher()
quote_lowercase = 'The first step is you have to say that you can.'
quote_uppercase = quote_lowercase.upper()

enc_lowercase = caesar.encrypt(1, quote_lowercase)
enc_uppercase = caesar.encrypt(1, quote_uppercase)
dec_lowercase = caesar.decrypt(1, enc_lowercase)
dec_uppercase = caesar.decrypt(1, enc_uppercase)

print( "Quote (lowercase): {}".format(quote_lowercase) )
print( "Quote (uppercase): {}".format(quote_uppercase) )
print( "Encrypted (lowercase): {}".format(enc_lowercase) )
print( "Encrypted (uppercase): {}".format(enc_uppercase) )
print( "Decrypted (lowercase): {}".format(dec_lowercase) )
print( "Decrypted (uppercase): {}".format(dec_uppercase) )