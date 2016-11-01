#!/usr/bin/env node
'use strict';

// app.js: challenge #3

// Author: Carlan Calazans  (mailto:carlancalazans at gmail dot com)
// Copyright: Copyright (c) 2016
// License: MIT

class CaesarCipher {
    encrypt(key, text) {
        let result = '';
        text.split('').forEach(function(symbol){
            if ( symbol.match(/^[0-9a-zA-Z]+$/) ) {
                if ( symbol.match(/^[a-z]+$/) ) {
                    let shifted = (symbol.charCodeAt(0) - 97 + key) % 26 + 97
                    result += String.fromCharCode(shifted);
                    //console.log(`symbol=${symbol}, symbol_number=${symbol.charCodeAt(0)}, symbol_number-97=${symbol.charCodeAt(0) - 97}, shift 1=${String.fromCharCode(shifted)}`);
                } else if ( symbol.match(/^[A-Z]+$/) ) {
                    let shifted = (symbol.charCodeAt(0) - 65 + key) % 26 + 65
                    result += String.fromCharCode(shifted);
                    //console.log(`symbol=${symbol}, symbol_number=${symbol.charCodeAt(0)}, symbol_number-97=${symbol.charCodeAt(0) - 97}, shift 1=${String.fromCharCode(shifted)}`);
                }
            } else {
                console.log(symbol);
                result += symbol;
            }
        });
        return result;
    }

    decrypt(key, text) {
        let result = '';
        text.split('').forEach(function(symbol){
            if ( symbol.match(/^[0-9a-zA-Z]+$/) ) {
                if ( symbol.match(/^[a-z]+$/) ) {
                    let shifted = (symbol.charCodeAt(0) - 97 - key) % 26 + 97
                    result += String.fromCharCode(shifted);
                    //console.log(`symbol=${symbol}, symbol_number=${symbol.charCodeAt(0)}, symbol_number-97=${symbol.charCodeAt(0) - 97}, shift 1=${String.fromCharCode(shifted)}`);
                } else if ( symbol.match(/^[A-Z]+$/) ) {
                    let shifted = (symbol.charCodeAt(0) - 65 - key) % 26 + 65
                    result += String.fromCharCode(shifted);
                    //console.log(`symbol=${symbol}, symbol_number=${symbol.charCodeAt(0)}, symbol_number-97=${symbol.charCodeAt(0) - 97}, shift 1=${String.fromCharCode(shifted)}`);
                }
            } else {
                console.log(symbol);
                result += symbol;
            }
        });
        return result;
    }
}

const caesar = new CaesarCipher();
let aaa = caesar.encrypt(1,'abcd efgh');
console.log( aaa );
console.log( caesar.decrypt(1,aaa) );