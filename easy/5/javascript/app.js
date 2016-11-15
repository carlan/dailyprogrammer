#!/usr/bin/env node
'use strict';

// app.js: challenge #4

// Author: Carlan Calazans  (mailto:carlancalazans at gmail dot com)
// Copyright: Copyright (c) 2016
// License: MIT

const fs = require('fs');
const readline = require('readline');


class Protected {
    constructor() {
        this.auth_info = new Map();
		this.logged_in = false;
        
    }

    loadLoginAndPasswordFromFile() {
        const fileContents = fs.readFileSync('secret.txt', 'utf-8');
        const lines = fileContents.split('\r\n');

        for(let line of lines) {
            line = line.split(':');
            this.auth_info.set(line[0], line[1]);
        }
    }

    login(username, password) {
        this.loadLoginAndPasswordFromFile();

        if(this.auth_info.has(username)) {
			this.logged_in = (this.auth_info.get(username) == password);
		} else {
			this.logged_in = false;
        }

        this.authorize();
    }

    authorize() {
        if(this.logged_in) {
			console.log('Logged in');
		} else {
			console.log('Not allowed to login');
        }
    }
}

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
rl.question('What\'s your username? ', (username) => {
    rl.question('What\'s your password? ', (password) => {
        const pro = new Protected();
        pro.login(username, password);

        rl.close();
        process.stdin.destroy();
    });
});