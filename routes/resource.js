var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var planet_controller = require('../controllers/planet');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// COSTUME ROUTES ///
// POST request for creating a Costume.
router.post('/planet', planet_controller.planet_create_post);
// DELETE request to delete Costume.
router.delete('/planet/:id', planet_controller.planet_delete);
// PUT request to update Costume.
router.put('/planet/:id', planet_controller.planet_update_put);
// GET request for one Costume.
router.get('/planet/:id', planet_controller.planet_detail);
// GET request for list of all Costume items.
router.get('/planet', planet_controller.planet_list);
module.exports = router;

