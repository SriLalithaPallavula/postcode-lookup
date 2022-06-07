const fetch = require('node-fetch');

const apiUrl = "http://v0.postcodeapi.com.au/";

const getAllSuburbsByPostcode = async (params) => {
    const { code: postcode } = params;
    const response = await fetch(`${apiUrl}suburbs.json?postcode=${postcode}`);
    const data =  await response.json();
    return data;
}

const getAllSuburbsInRange = async (params) => {
    const { latitude, longitude, distance } = params;
    const response = await fetch(`${apiUrl}radius.json?latitude=${latitude}&longitude=${longitude}&distance=${distance}`);
    const data =  await response.json();
    return data;
}

module.exports = {
    getAllSuburbsByPostcode,
    getAllSuburbsInRange
}

