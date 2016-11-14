#!/usr/bin/env ruby
# encoding: UTF-8
# coding: UTF-8
# -*- coding: UTF-8 -*-

# app.rb: challenge #5

# Author::    Carlan Calazans  (mailto:carlancalazans at gmail dot com)
# Copyright:: Copyright (c) 2016
# License::   MIT

class Protected
    def initialize()
        @auth_info = {}
		@logged_in = false
    end

    def load_login_and_password_from_file()
        File.open("secret.txt", "r") do |file|
            file.each_line do |line|
                user, passwd = line.chomp.split(':')
                @auth_info[user] = passwd
            end
        end
    end

    def get_user_input()
        load_login_and_password_from_file()
        puts 'What\'s your username? '
        username = gets.chomp
		puts 'What\'s your password? '
        password = gets.chomp
        login(username, password)
        authorize()
    end

    def login(username, password)
        if @auth_info.has_key? username
            @logged_in = (@auth_info[username] == password)
        else
            @logged_in = false
        end
    end

    def authorize()
        if @logged_in
            puts 'Logged in'
        else
            puts 'Not allowed to login'
        end
    end
end

protected = Protected.new
protected.get_user_input