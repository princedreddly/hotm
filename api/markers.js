const express = require( 'express' );
const router = express.Router();
const MongoClient = require( 'mongodb' ).MongoClient;

//SECTION Database Config
const uri = "mongodb+srv://admin:root@cluster0-clvxs.gcp.mongodb.net"; ///test?retryWrites=true";
const client = new MongoClient( uri, {
    useNewUrlParser: true
} );
// query only verified centers
var query = {};
// marker data necessary for map
var fields = {
    "_id": 0,
    "lat": 1,
    "lng": 1,
    "pais": 1,
};


var GetMapMarkers = function () {


    var collection = client.connect(async function (err) {
      collection = client.db("healthOnTheMove").collection("centros_sanitarios");
  
     collection.find(query, {
        projection: fields
      }).toArray(function (err, result) {
        if (err) throw err;
        console.log( result );
        var markers = result;
        //console.log( markers );
        client.close(); //NOTE Crashes Server
  
  
        return markers;
    });
    
});

console.log(collection)

router.get('/', (req, res) => {
    res.send('rsm');
});



}
  




//!SECTION

let lastUpdated = 'never';


/* GET listing. */
router.get( '/update', function ( req, res, next ) {
    updateTimestamp();
    res.send( 'database updated at: ' + lastUpdated);
} );

function updateTimestamp() {
    timestamp = new Date(Date.now());
    lastUpdated = timestamp.toUTCString();
    console.log( 'Server updated at: ' + lastUpdated );
}


module.exports = router;