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
// Handle a show one view with id specified by query
exports.planet_view_one_Page = async function (req, res) {
    console.log("view for id " + req.query.id)
    try {
        result = await planet.findById(req.query.id)
        res.render('planetdetail',
            { title: 'Planet Detail', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for creating a costume.
// No body, no in path parameter, no query.
// Does not need to be async
exports.planet_create_Page = function (req, res) {
    console.log("create view")
    try {
        res.render('planetcreate', { title: 'Planet Create' });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};
// Handle building the view for updating a costume.
// query provides the id
exports.planet_update_Page = async function (req, res) {
    console.log("update view for item " + req.query.id)
    try {
        let result = await planet.findById(req.query.id)
        res.render('planetupdate', { title: 'Planet Update', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};
// Handle a delete one view with id from query
exports.planet_delete_Page = async function (req, res) {
    console.log("Delete view for id " + req.query.id)
    try {
        result = await planet.findById(req.query.id)
        res.render('planetdelete', {
            title: 'planet Delete', toShow:
                result
        });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};
// for a specific Costume.
exports.planet_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await planet.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
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
// Handle planet delete on DELETE.
exports.planet_delete = async function(req, res) {
console.log("delete " + req.params.id)
try {
result = await planet.findByIdAndDelete( req.params.id)
console.log("Removed " + result)
res.send(result)
} catch (err) {
res.status(500)
res.send(`{"error": Error deleting ${err}}`);
}
};

// Handle Costume update form on PUT.
//Handle Costume update form on PUT.
exports.planet_update_put = async function(req, res) {
console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
try {
let toUpdate = await planet.findById( req.params.id)
// Do updates of properties
if(req.body.name)
toUpdate.name = req.body.name;
if(req.body.speed) toUpdate.speed = req.body.speed;
if(req.body.size) toUpdate.size = req.body.size;
let result = await toUpdate.save();
console.log("Sucess " + result)
res.send(result)
} catch (err) {
res.status(500)
res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
}
};

// VIEWS
// Handle a show all view
exports.planet_view_all_Page = async function(req, res) {
    try{
        theplanet = await planet.find();
        res.render('planet', { title: 'planet Search Results', results: theplanet });
        }
        catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
        }
       };