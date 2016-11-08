'use strict';

class Config {
    constructor() {
        this.template = 'sldlswswswsldls';
        this.legend = {
            "s": '!@$%^&*-_+=:|~?/.;',
            "d": '0123456789',
            "w": 'sister offense temporary sock finish experience issue mouth position deck seminar begin live blonde impound foot ambiguity smile breed lung'.split(' '),
            "l": 'abcdefghijklmnoprstuvwxyz'
        };
    }

    get template() {
        return this._template;
    }

    set template(template) {
        if(template) {
            this._template = template;
        }
    }

    get legend() {
        return this._legend;
    }

    set legend(legend) {
        if(legend) {
            this._legend = legend;
        }
    }
}

module.exports = Config;