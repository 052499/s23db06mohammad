var planet = require('../models/planetSchema');
// List of all Costumes
exports.planet_list = async function(req, res) {
    try{
        theplanets = await planet.find();
        res.send(theplanets);
        }
        catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
        } 
};
// for a specific Costume.
exports.planet_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: Costume detail: ' + req.params.id);
};
// Handle Costume create on POST.
exports.planet_create_post = async function(req, res) {
    console.log(req.body)
    let document = new planet();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.name = req.body.name;
    document.size = req.body.size;
    document.speed = req.body.speed;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    } ;
};
// Handle Costume delete form on DELETE.
exports.planet_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: Costume delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.planet_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: Costume update PUT' + req.params.id);
};

// VIEWS
// Handle a show all view
exports.planet_view_all_Page = async function(req, res) {
    try{
    console.log("IN")
    theplanets = await planet.find();
    console.log(theplanets)
    res.render('planets', { title: 'Search Results - planets', results: theplanets });
    }
    catch(err){
    //res.status(500);
    res.send(`{"error": ${err}}`);
    }
}