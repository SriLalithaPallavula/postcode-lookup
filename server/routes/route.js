    const api = require('../api/api');
    const express = require('express');
    const router = express.Router();

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