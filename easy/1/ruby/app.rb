#!/usr/bin/env ruby
# encoding: UTF-8
# coding: UTF-8
# -*- coding: UTF-8 -*-

# app.rb: challenge #1"""

# Author::    Carlan Calazans  (mailto:carlancalazans at gmail dot com)
# Copyright:: Copyright (c) 2016
# License::   MIT

puts 'What\'s your name?'
name = gets.chomp
puts 'What\'s your age?'
age = gets.chomp
puts 'What\'s your reddit username?'
username = gets.chomp

output = "your name is #{name}, you are #{age} years old, and your username is #{username}"

File.open('output.txt', 'w') do |file|
    file.puts output
end
