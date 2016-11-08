#!/usr/bin/env node
'use strict';

// app.js: challenge #4

// Author: Carlan Calazans  (mailto:carlancalazans at gmail dot com)
// Copyright: Copyright (c) 2016
// License: MIT

const Config = require('./config');

class PasswordGenerator {

    constructor(amount) {
        this.config = new Config();
        this.amount = amount;
    }

    generate() {
        let passwords = [];

        this.config.legend.w.forEach(function(word) {
            let word_index = this.config.legend.w.indexOf(word);

            for(let letter of word) {
                let letter_index = word.indexOf(letter);
                let rand_case = [letter.toUpperCase(), letter][Math.round(Math.random())];
                word = word.substr(0, letter_index) + rand_case + word.substr(letter_index + 1);
            }

            this.config.legend.w[word_index] = word;
        }, this);

        for(let letter of this.config.legend.l) {
            let letter_index = this.config.legend.l.indexOf(letter);
            let rand_case = [letter.toUpperCase(), letter][Math.round(Math.random())];
            this.config.legend.l = this.config.legend.l.substr(0, letter_index) + rand_case + this.config.legend.l.substr(letter_index + 1);
        }

        for (let i = 0; i < this.amount; i++) {
            let password = '';
            for(let letter of this.config.template) {
                let sorteable = this.config.legend[letter];
                let picked = sorteable[Math.round(Math.random() * (sorteable.length - 1))];
                password+=picked;
            }
            passwords.push(password);
        }

        return passwords;
    }
}

const passwordGenerator = new PasswordGenerator(10);
passwordGenerator.generate().forEach(function(password){
    console.log(password);
});
