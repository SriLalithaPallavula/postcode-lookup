# postcode-lookup

This an Angular app, which uses postcodeapi (https://postcodeapi.com.au/) to help users to search suburbs based on postcodes.
Users can select(click) a suburb from the list of results and view all the suburbs with in a specific distance from the selected suburb. The results view uses a pagination component that shows 10 results per page.

# set up instructions

After cloning the project to your machine,

1. Go to postcode-lookup/server/ and install the node modules (npm install), then run the command "npm start".
   This should run the server on http://localhost:3000 (or any other port), we need this proxy server running for frontend (GUI) to communicate with postcodeapi to avoid any CORS errors.

2. Go to postcode-lookup/gui, install node modules (npm install) then run ng serve (npm start), which should launch the
   Angular app on http://localhost:4200/.
