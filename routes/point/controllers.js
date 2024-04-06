const {Point} = require('../../database/models');

const controllers = {};

controllers.getPoint = async(req,res)=>{
    const point = await Point.findAll();
    res.send({
        data: point,
    });
};

module.exports = controllers;