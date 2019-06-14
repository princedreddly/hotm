const express = require( 'express' );
const router = express.Router();
const surveyMonkey = require( "../api/surveymonkey" )


router.get( '/', ( req, res ) => {
    res.render( 'admin' );
} );



router.get( '/surveys/:id', ( req, res ) => {
    var SurveyID = req.params.id


    res.render( 'surveyLayout', {title:SurveyID} )
} );

router.get( '/', ( req, res ) => {
    res.render( 'surveyLayout' )
} );

module.exports = router;