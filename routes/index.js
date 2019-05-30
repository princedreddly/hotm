var express = require( 'express' );
var router = express.Router();
var GetMarkers = require("./../models/GetMapMarkers.js")

const MongoClient = require( 'mongodb' ).MongoClient;
const uri = "mongodb+srv://admin:root@cluster0-clvxs.gcp.mongodb.net"; ///test?retryWrites=true";
const client = new MongoClient( uri, {
  useNewUrlParser: true
} );




/* GET home page. */
router.get( '/', function ( req, res, next ) {
  res.render( 'index', {
    title: 'Home'
  } );
} );

async function hola(){
  var markers =  await GetMarkers();
  console.log(markers)

} 



/* GET map */
router.get( '/map', function ( req, res, next ) {
  res.render( 'map', {
    title: 'Map',markers
  } );


} );


module.exports = router;