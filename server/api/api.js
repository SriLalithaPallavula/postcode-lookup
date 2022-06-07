const fetch = require('node-fetch');

const apiUrl = "http://v0.postcodeapi.com.au/";

/**
 * Makes an API request to postcode api to get all suburbs matching a postcode
 * @returns a promise with an array of suburbs
 * @param params params in client url request
 */
const getAllSuburbsByPostcode = async (params) => {
    const { code: postcode } = params;
    const response = await fetch(`${apiUrl}suburbs.json?postcode=${postcode}`);
    return await response.json();    
}

/**
 * Makes an API request to postcode api to get all suburbs within a specific distance from the given suburb
 * @returns a promise with an array of suburbs
 * @param params params in client url request, contains props latitude, longitude and distance
 */
const getAllSuburbsInRange = async (params) => {
    const { latitude, longitude, distance } = params;
    const response = await fetch(`${apiUrl}radius.json?latitude=${latitude}&longitude=${longitude}&distance=${distance}`);
    return await response.json();    
}

module.exports = {
    getAllSuburbsByPostcode,
    getAllSuburbsInRange
}

