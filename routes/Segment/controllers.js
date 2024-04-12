const {Segment} = require('../../database/models');

const controllers = {};

controllers.getSegment = async(req,res) => {
    const segment = await Segment.finfall();
    res.send({
        data: segment,
    });
};

module.exports = controllers;