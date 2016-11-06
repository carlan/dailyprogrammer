#!/usr/bin/env ruby
# encoding: UTF-8
# coding: UTF-8
# -*- coding: UTF-8 -*-

# config.rb: challenge #4

# Author::    Carlan Calazans  (mailto:carlancalazans at gmail dot com)
# Copyright:: Copyright (c) 2016
# License::   MIT

class Config
    @@TEMPLATE = 'sldlswswswsldls'

	@@LEGEND = {
		:s => '!@$%^&*-_+=:|~?/.;',
		:d => '0123456789',
		:w => 'sister offense temporary sock finish experience issue mouth position deck seminar begin live blonde impound foot ambiguity smile breed lung'.split,
		:l => 'abcdefghijklmnoprstuvwxyz'
	}

    def self.TEMPLATE
        @@TEMPLATE
    end

    def self.TEMPLATE=(template)
        @@TEMPLATE = template
    end

    def self.LEGEND
        @@LEGEND
    end

    def self.LEGEND=(legend)
        @@LEGEND = legend
    end
end