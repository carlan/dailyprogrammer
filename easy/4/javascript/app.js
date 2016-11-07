#!/usr/bin/env node
'use strict';

// app.js: challenge #4

// Author: Carlan Calazans  (mailto:carlancalazans at gmail dot com)
// Copyright: Copyright (c) 2016
// License: MIT

class PasswordGenerator {

    constructor(amount) {
        this.amount = amount;
    }

    generate() {
        let TEMPLATE = 'sldlswswswsldls';

        let LEGEND = {
            "s": '!@$%^&*-_+=:|~?/.;',
            "d": '0123456789',
            "w": 'sister offense temporary sock finish experience issue mouth position deck seminar begin live blonde impound foot ambiguity smile breed lung'.split(' '),
            "l": 'abcdefghijklmnoprstuvwxyz'
        };

        let passwords = [];

        LEGEND.w.forEach(function(word) {
            let word_index = LEGEND.w.indexOf(word);

            for(let letter of word) {
                let letter_index = word.indexOf(letter);
                let rand_case = [letter.toUpperCase(), letter][Math.round(Math.random())];
                word = word.substr(0, letter_index) + rand_case + word.substr(letter_index + 1);
            }

            LEGEND.w[word_index] = word;
        });

        for(let letter of LEGEND.l) {
            let letter_index = LEGEND.l.indexOf(letter);
            let rand_case = [letter.toUpperCase(), letter][Math.round(Math.random())];
            LEGEND.l = LEGEND.l.substr(0, letter_index) + rand_case + LEGEND.l.substr(letter_index + 1);
        }

        for (let i = 0; i < this.amount; i++) {
            let password = '';
            for(let letter of TEMPLATE) {
                let sorteable = LEGEND[letter];
                let picked = sorteable[Math.round(Math.random() * sorteable.length)];
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
