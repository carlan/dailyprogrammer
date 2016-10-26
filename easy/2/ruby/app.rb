#!/usr/bin/env ruby
# encoding: UTF-8
# coding: UTF-8
# -*- coding: UTF-8 -*-

# app.rb: challenge #2

# Author::    Carlan Calazans  (mailto:carlancalazans at gmail dot com)
# Copyright:: Copyright (c) 2016
# License::   MIT

class Calculator
    def addition(n1, n2)
        puts "Addition n1=#{n1} and n2=#{n2}"
        puts "result=#{n1+n2}"
		return n1+n2
    end
	def subtraction(n1, n2)
        puts "Subtraction n1=#{n1} and n2=#{n2}"
        puts "result=#{n1+n2}"        
		return n1-n2
    end
	def multiplication(n1, n2)
        puts "Multiplication n1=#{n1} and n2=#{n2}"
        puts "result=#{n1+n2}"
		return n1*n2
    end
	def division(n1, n2)
        puts "Division n1=#{n1} and n2=#{n2}"
        puts "result=#{n1+n2}"
		return n1/n2
    end
end

calc = Calculator.new
calc.addition(2,2)
calc.subtraction(10,5)
calc.multiplication(3,3)
calc.division(9,3)