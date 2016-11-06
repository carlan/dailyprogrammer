#!/usr/bin/env ruby
# encoding: UTF-8
# coding: UTF-8
# -*- coding: UTF-8 -*-

# app.rb: challenge #4

# Author::    Carlan Calazans  (mailto:carlancalazans at gmail dot com)
# Copyright:: Copyright (c) 2016
# License::   MIT

require_relative 'config'

class PasswordGenerator
    def initialize(amount=1)
        @amount = amount
    end

    def generate()
        passwords = []

        Config.LEGEND[:w].each do |word|
			word_index = Config.LEGEND[:w].index(word)

            word.each_char do |letter|
                letter_index = word.index(letter)
                word[letter_index] = [letter.upcase, letter ].sample
            end

            Config.LEGEND[:w][word_index] = word
        end

        Config.LEGEND[:l].each_char do |letter|
             letter_index = Config.LEGEND[:l].index(letter)
             Config.LEGEND[:l][letter_index] = [letter.upcase, letter ].sample
        end

        @amount.times do |generate|
            password = ''
            Config.TEMPLATE.each_char do |letter|
                sorteable =Config.LEGEND[letter.to_sym]
                picked = sorteable[(Random.new.rand * sorteable.length).floor]
                password << picked
            end
            passwords << password
        end

        return passwords
    end
end

password_generator = PasswordGenerator.new(10)
passwords = password_generator.generate()
passwords.each{|p| puts p}