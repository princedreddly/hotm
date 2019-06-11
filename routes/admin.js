const express = require( 'express' );
const router = express.Router();
const surveyMonkey = require( "../api/surveymonkey" )


router.get( '/', ( req, res ) => {
    res.render( 'admin' );
} );


router.get( '/surveys', ( req, res ) => {
    res.render( 'surveyLayout' )
} );

router.post( '/surveys/:id', ( req, res ) => {
    a = req.params.id
    
        res.send( surveyMonkey(a) )
} );



module.exports = router;