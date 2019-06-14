var express = require( 'express' );
var router = express.Router();
var GetMarkers = require( "./../models/GetMapMarkers.js" )

const MongoClient = require( 'mongodb' ).MongoClient;
const uri = "mongodb+srv://admin:root@cluster0-clvxs.gcp.mongodb.net"; ///test?retryWrites=true";
const client = new MongoClient( uri, {
  useNewUrlParser: true
} );
////////////////

//SECTION 

var SurveyMonkeyAPI = require( 'surveymonkey' ).SurveyMonkeyAPI;

var accessToken = '.FCw9grlOkbYAYhHmWaQ5aFFowvHTwzNWWgCfoTlNGa7WVzkSRF2MvewJchrzAF5bfe9hNCV4sIa2QkGlFKHk6zK.BBJpbk36j.5M1e5cmhin1toFLK.7BiNCCM9bCKn';

try {
  var api = new SurveyMonkeyAPI( accessToken, {
    version: 'v3',
    secure: false
  } );
} catch ( error ) {
  console.log( error.message );
}

var a = api.getSurveyList( {}, function ( error, data ) {
  if ( error )
    console.log( error.message );
  else
    //console.log(JSON.stringify(data)); // Do something with your data!
    return ( JSON.stringify( data ) ); // Do something with your data!
} );


//!SECTION 


router.get( '/playground', ( req, res ) => {
  res.render( 'playground' );
  res.a( a )
} );


/* GET home page. */
router.get( '/', function ( req, res, next ) {
  res.render( 'index', {
    title: 'Home'
  } );
} );

async function hola() {
  var markers = await GetMarkers();
  console.log( markers )

}

/* GET map */
router.get( '/map', function ( req, res, next ) {
  res.render( 'map', {
    title: 'Map'
  } );
} );

router.get( '/contact', function ( req, res, next ) {
  res.render( 'contact', {
    title: 'Contact'
  } );
} );

router.get( '/tutorial', function ( req, res, next ) {
  res.render( 'tutorial', {
    title: 'Tutorial'
  } );
} );
module.exports = router;