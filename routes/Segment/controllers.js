const {Segment} = require('../../database/models');
const controllers = {};

controllers.getSegmentStatus = async (req, res) => {
    const segment = await Segment.findAll();
    res.send({
        data: segment,
    });
};

module.exports = controllers;