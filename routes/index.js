var express = require( 'express' );
var router = express.Router();


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


module.exports = router;