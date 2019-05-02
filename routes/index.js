var express = require( 'express' );
var router = express.Router();


const MongoClient = require( 'mongodb' ).MongoClient;
const uri = "mongodb+srv://admin:root@cluster0-clvxs.gcp.mongodb.net"; ///test?retryWrites=true";
const client = new MongoClient( uri, {
  useNewUrlParser: true
} );






























// query only verified centers
var query = {pais: /[^ \[]/i };
// marker data necessary for map
var fields = {
  "_id": 1,
  "lat": 1,
  "lng": 1,
  "pais":1,
};
client.connect( err => {
  collection = client.db( "healthOnTheMove" ).collection( "centros_sanitarios" );
  collection.find( query, {
    projection: fields
  } ).toArray( function ( err, result ) {
    if ( err ) throw err;
    //console.log( result );
    var markers = result;
    //console.log( markers );
    client.close(); //NOTE Crashes Server
    router.get( '/api/markers', function ( req, res, next ) {
      res.send( markers );
    } );
  } );
} );

















/* GET home page. */
router.get( '/', function ( req, res, next ) {
  res.render( 'index', {
    title: 'Home'
  } );
} );

var markers = require( '../models/GetMapMarkers' );
/* GET map page. */
router.get( '/map', function ( req, res, next ) {
  res.render( 'map', {
    title: 'Map',
    markers: markers
  } );
} );
//console.log(JSON.stringify(markers))
router.post( '/', ( req, res ) => {
  console.log( res.body );
} );

// SECTION   Temp


// // router.get('/map/centros/:id', (req, res) => {

// // });



// global.markers;

// /* GET map page. */
// router.get( '/markers', function ( req, res, next ) {


//   res.send( markers )

// } );

// var query = {};
// var fields = {
//   "_id": 0,
//   "lat": 1,
//   "lng": 1
// };
// client.connect( err => {
//   collection = client.db( "healthOnTheMove" ).collection( "centros_sanitarios" );
//   collection.find( query, {
//     projection: fields
//   } ).toArray( function ( err, result ) {
//     if ( err ) throw err;
//     //console.log( result );
//     global.markers = result;
//     console.log( markers );
//     //client.close(); //NOTE Crashes Server
//   } );
// } );
// !SECTION   



module.exports = router;