#!/usr/bin/env node
'use strict';

// app.js: challenge #2

// Author: Carlan Calazans  (mailto:carlancalazans at gmail dot com)
// Copyright: Copyright (c) 2016
// License: MIT

class Calculator {
    addition(n1, n2) {
        console.log(`Addition n1=${n1} and n2=${n2}`);
        console.log(`result=${n1+n2}`);
        return n1+n2;
    }
    subtraction(n1, n2) {
        console.log(`Subtraction n1=${n1} and n2=${n2}`);
        console.log(`result=${n1-n2}`);
        return n1-n2;
    }
    multiplication(n1, n2) {
        console.log(`Multiplication n1=${n1} and n2=${n2}`);
        console.log(`result=${n1*n2}`);
        return n1*n2;
    }
    division(n1, n2) {
        console.log(`Division n1=${n1} and n2=${n2}`);
        console.log(`result=${n1/n2}`);
        return n1/n2;
    }
}

const calc = new Calculator();
calc.addition(2,2)
calc.subtraction(10,5)
calc.multiplication(3,3)
calc.division(9,3)