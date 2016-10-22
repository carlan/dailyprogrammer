#!/usr/bin/env node
'use strict';

// app.js: challenge #1"""

// Author: Carlan Calazans  (mailto:carlancalazans at gmail dot com)
// Copyright: Copyright (c) 2016
// License: MIT

var fs = require('fs');
var readline = require('readline');
var rl = readline.createInterface({
	input:process.stdin,
	output:process.stdout
});

rl.question('What\'s your name? ', function(name) {
	rl.question('What\'s your age? ', function(age) {
		rl.question('What\'s your reddit username? ', function(username) {
			var output = `your name is ${name}, you are ${age} years old, and your username is ${username}\n`;
			console.log(output);

			fs.writeFile('output.txt', output);

			rl.close();
			process.stdin.destroy();
		});
	});
});


