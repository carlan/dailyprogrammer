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
                } else if ( symbol.match(/^[A-Z]+$/) ) {
                    let shifted = (symbol.charCodeAt(0) - 65 + key) % 26 + 65
                    result += String.fromCharCode(shifted);
                }
            } else {
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
                } else if ( symbol.match(/^[A-Z]+$/) ) {
                    let shifted = (symbol.charCodeAt(0) - 65 - key) % 26 + 65
                    result += String.fromCharCode(shifted);
                }
            } else {
                result += symbol;
            }
        });
        return result;
    }
}

const caesar = new CaesarCipher();
let quote_lowercase = 'The first step is you have to say that you can.';
let quote_uppercase = quote_lowercase.toUpperCase();

let enc_lowercase = caesar.encrypt(1, quote_lowercase);
let enc_uppercase = caesar.encrypt(1, quote_uppercase);
let dec_lowercase = caesar.decrypt(1, enc_lowercase);
let dec_uppercase = caesar.decrypt(1, enc_uppercase);

console.log( `Quote (lowercase): ${quote_lowercase}` );
console.log( `Quote (uppercase): ${quote_uppercase}` );
console.log( `Encrypted (lowercase): ${enc_lowercase}` );
console.log( `Encrypted (uppercase): ${enc_uppercase}` );
console.log( `Decrypted (lowercase): ${dec_lowercase}` );
console.log( `Decrypted (uppercase): ${dec_uppercase}` );