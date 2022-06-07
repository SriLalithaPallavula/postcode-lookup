const fetch = require('node-fetch');

const apiUrl = "http://v0.postcodeapi.com.au/";
const suburbsRequestUrl = `${apiUrl}suburbs.json`;

async function getAllSuburbsByPostcode(params) {
    const { postcode } = params;
    const response = await fetch(`${suburbsRequestUrl}?postcode="${postcode}"`);    
    const data =  await response.json();
    return data;
}

async function getAllSuburbsInRange(params) {
    const { latitude, longitude, distance } = params;
    const response = await fetch(`${apiUrl}radius.json?latitude="${latitude}"&longitude="${longitude}&distance="${distance}`);
    const data =  await response.json();
    return data;
}

module.exports = {
    getAllSuburbsByPostcode,
    getAllSuburbsInRange
}
