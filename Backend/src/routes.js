const express = require('express');
const routes = express.Router();

routes.get('/', (req, res) => {
    return res.json({hello: "works well"});
});

module.exports = routes;
