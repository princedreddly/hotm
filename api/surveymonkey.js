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

let surveys = [ {
    "href": "https://api.surveymonkey.net/v3/surveys/124889031",
    "nickname": "",
    "id": "124889031",
    "title": "MIGRANT RESOURCES MAPPING"
}, {
    "href": "https://api.surveymonkey.net/v3/surveys/125972896",
    "nickname": "",
    "id": "125972896",
    "title": "CURRENT STUDIES AND PROJECTS MAPPING"
}, {
    "href": "https://api.surveymonkey.net/v3/surveys/125972979",
    "nickname": "",
    "id": "125972979",
    "title": "APP/E-TOOLS MAPPING"
}, {
    "href": "https://api.surveymonkey.net/v3/surveys/125970006",
    "nickname": "",
    "id": "125970006",
    "title": "STAKEHOLDERS MAPPING"
} ]


module.exports = function getSurvey(id){

    id = "125970006"

  
        return (api.getSurveyDetails({"id":`${id}`},function (error, data) {
            console.log(id)
            if (error)
            console.log(error);
            else
            response = JSON.stringify(data)
            console.log(response); // Do something with your data!
            return response
        }))


}

