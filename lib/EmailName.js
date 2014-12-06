/**
 * Extract perfectly formated names from emails
 *
 * @constructor
 * @param {String} email A valid email.
 */
function EmailName(email) {
    'use strict';

    function removeSpecials(str) {
        var lower = str.toLowerCase();
        var upper = str.toUpperCase();

        var res = "";
        for (var i = 0; i < lower.length; ++i) {
            if (lower[i] != upper[i] || lower[i].trim() === '') {
                res += str[i];
            } else {
                res += ' ';
            }
        }
        return res;
    }

    function capitaliseFirstLetter(string) {
        var array = string.split(' ');

        var resu = '';
        for (var i = 0; i < array.length; i++) {
            if (array[i] != ' ') {
                resu += array[i].charAt(0).toUpperCase() + array[i].slice(1).toLowerCase() + ' ';
            }

        };

        var res = array.join(' ');
        return resu.trim().replace(/ +(?= )/g, '');
    }


    var index = email.indexOf('@');
    var name = email.substring(0, index);

    name = removeSpecials(name);
    name = capitaliseFirstLetter(name);
    return name;

}