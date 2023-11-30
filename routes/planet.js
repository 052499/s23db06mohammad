var express = require('express');
const planet_controlers= require('../controllers/planet');
var router = express.Router();
// A little function to check if we have an authorized user and continue on
// or
// redirect to login.
const secured = (req, res, next) => {
if (req.user){
return next();
}
res.redirect("/login");
}
router.get('/', planet_controlers.planet_view_all_Page );


/* GET detail planet page */
router.get('/detail', secured, planet_controlers.planet_view_one_Page);

/* GET create planet page */
router.get('/create', planet_controlers.planet_create_Page);

/* GET create update page */
/* GET update planet page */
router.get('/update', secured,planet_controlers.planet_update_Page);

/* GET delete costume page */
router.get('/delete', secured, planet_controlers.planet_delete_Page);

module.exports = router;