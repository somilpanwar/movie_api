const express = require('express')
const getdetails = require('../controller/Getdetails')

const route = express.Router();

route.get('/movie/:movie_name',getdetails);
route.get('/language/:language',getdetails);

module.exports = route;