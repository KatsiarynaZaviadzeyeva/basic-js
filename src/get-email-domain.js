const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */

//let email = 'very.unusual.@.unusual.com@usual.com';

function getEmailDomain(email) {
    let arrDomain = email.split('@');
    //console.log(arrDomain[arrDomain.length - 1]);
    return arrDomain[arrDomain.length - 1];
}

//getEmailDomain(email);
module.exports = {
    getEmailDomain
};