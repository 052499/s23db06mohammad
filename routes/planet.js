var express = require('express');
const planet_controlers= require('../controllers/planet');
var router = express.Router();

router.get('/', planet_controlers.planet_view_all_Page );


/* GET detail planet page */
router.get('/detail', planet_controlers.planet_view_one_Page);

/* GET create planet page */
router.get('/create', planet_controlers.planet_create_Page);

/* GET create update page */
router.get('/update', planet_controlers.planet_update_Page);

/* GET delete costume page */
router.get('/delete', planet_controlers.planet_delete_Page);

module.exports = router;