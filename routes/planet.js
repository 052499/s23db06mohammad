var express = require('express');
const planet_controlers= require('../controllers/planet');
var router = express.Router();


/* GET detail plants page */
router.get('/detail', planet_controlers.planet_view_one_Page);

module.exports = router;