/**
 * Extract formated names from any email.
 *
 * @constructor
 * @param {String} email Any string is excepted, but only strings containting a @ will be evaluated.
 * @return {String} Returns the extracted name, if no can be extracted an empty string is returned.
 */
function EmailName(str) {
    'use strict';

    function getNamePart(str) {
        var index = str.indexOf('@');
        return str.substring(0, index);
    }

    function removeSpecials(str) {
        var lower = str.toLowerCase();
        var upper = str.toUpperCase();

        var res = '';
        for (var i = 0; i < lower.length; ++i) {
            if (lower[i] != upper[i] || lower[i].trim() === '') {
                res += str[i];
            } else {
                res += ' ';
            }
        }
        return res;
    }

    function capitaliseFirstLetter(str) {
        var arr = str.split(' ');
        var res = '';
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] != ' ') {
                res += arr[i].charAt(0).toUpperCase() + arr[i].slice(1).toLowerCase() + ' ';
            }

        };
        return res.trim();
    }

    function removeDoubleSpaces(str) {
        return res.replace(/ +(?= )/g, '');
    }

    var name = str;
    name = getNamePart(name);
    name = removeSpecials(name);
    name = removeDoubleSpaces(name);
    name = capitaliseFirstLetter(name);
    return name;

}
