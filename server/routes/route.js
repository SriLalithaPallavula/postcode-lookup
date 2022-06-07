    const api = require('../api/api');
    const express = require('express');
    const router = express.Router();

    /**
     * Handles the routing for the request to search suburbs matching a postcode
     */
    router.get('/suburbs/:code' , (request,response)=>{        
        api.getAllSuburbsByPostcode(request.params).then(
            result =>{
                response.status(201).send(result);
                return response;
            },
            error => {
                response.status(500).json({
                    error
                }
            )});       
    });

    /**
     * Handles the routing for the request to search suburbs in a specific distance from the given suburb
     */
    router.get('/suburbs/:latitude/:longitude/:distance' , (request,response)=>{
        api.getAllSuburbsInRange(request.params).then(
            result => {
                response.status(201).send(result)
                return response;
            },error => {
                response.status(500).json({
                    error
                })
            });

    });    

    module.exports = router;