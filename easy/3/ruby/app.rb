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
                    #puts "symbol=#{symbol}, symbol_number=#{symbol.ord}, symbol_number-97=#{symbol.ord - 97}, shift 1=#{shifted.chr}"
                elsif symbol.match(/^[[:upper:]]$/)
                    shifted = (symbol.ord - 65 + key) % 26 + 65
					result += shifted.chr
                    #puts "symbol=#{symbol}, symbol_number=#{symbol.ord}, symbol_number-65=#{symbol.ord - 65}, shift 1=#{shifted.chr}"
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
                    #puts "symbol=#{symbol}, symbol_number=#{symbol.ord}, symbol_number-97=#{symbol.ord - 97}, shift 1=#{shifted.chr}"
                elsif symbol.match(/^[[:upper:]]$/)
                    shifted = (symbol.ord - 65 - key) % 26 + 65
					result += shifted.chr
                    #puts "symbol=#{symbol}, symbol_number=#{symbol.ord}, symbol_number-65=#{symbol.ord - 65}, shift 1=#{shifted.chr}"
                end
            else
                result += symbol
            end
        end
        result
    end
end

caesar = CaesarCipher.new

enc_lowercase = caesar.encrypt(1,'The first step is you have to say that you can.')
enc_uppercase = caesar.encrypt(1, 'THE FIRST STEP IS YOU HAVE TO SAY THAT YOU CAN.')

puts enc_lowercase
puts enc_uppercase

puts caesar.decrypt(1, enc_lowercase)
puts caesar.decrypt(1, enc_uppercase)