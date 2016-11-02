#!/usr/bin/env ruby
# encoding: UTF-8
# coding: UTF-8
# -*- coding: UTF-8 -*-

# app.rb: challenge #3

# Author::    Carlan Calazans  (mailto:carlancalazans at gmail dot com)
# Copyright:: Copyright (c) 2016
# License::   MIT

class CaesarCipher
    def encrypt(key, text)
        result = ''
        text.each_char do |symbol|
            if symbol.match(/^[[:alpha:]]$/)
                if symbol.match(/^[[:lower:]]$/)
                    shifted = (symbol.ord - 97 + key) % 26 + 97
					result += shifted.chr
                elsif symbol.match(/^[[:upper:]]$/)
                    shifted = (symbol.ord - 65 + key) % 26 + 65
					result += shifted.chr
                end
            else
                result += symbol
            end
        end
        result
    end

    def decrypt(key, text)
        result = ''
        text.each_char do |symbol|
            if symbol.match(/^[[:alpha:]]$/)
                if symbol.match(/^[[:lower:]]$/)
                    shifted = (symbol.ord - 97 - key) % 26 + 97
					result += shifted.chr
                elsif symbol.match(/^[[:upper:]]$/)
                    shifted = (symbol.ord - 65 - key) % 26 + 65
					result += shifted.chr
                end
            else
                result += symbol
            end
        end
        result
    end
end

caesar = CaesarCipher.new
quote_lowercase = 'The first step is you have to say that you can.'
quote_uppercase = quote_lowercase.upcase

enc_lowercase = caesar.encrypt(1, quote_lowercase)
enc_uppercase = caesar.encrypt(1, quote_uppercase)
dec_lowercase = caesar.decrypt(1, enc_lowercase)
dec_uppercase = caesar.decrypt(1, enc_uppercase)

puts "Quote (lowercase): #{quote_lowercase}"
puts "Quote (uppercase): #{quote_uppercase}"
puts "Encrypted (lowercase): #{enc_lowercase}"
puts "Encrypted (uppercase): #{enc_uppercase}"
puts "Decrypted (lowercase): #{dec_lowercase}"
puts "Decrypted (uppercase): #{dec_uppercase}"