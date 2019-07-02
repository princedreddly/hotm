const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://admin:root@cluster0-clvxs.gcp.mongodb.net/test?retryWrites=true";
const client = new MongoClient(uri, {
  useNewUrlParser: true
});
// query only verified centers
const query = {}
// marker data necessary for map
const fields = {}

  /*
  "_id": 0,
  "lat": 1,
  "lng": 1,
  "pais": 1,
};
*/
let markers;

var collection = client.connect(async function (err) {
    collection = client.db("healthOnTheMove").collection("centros_sanitarios");

   collection.find(query, {
      projection: fields
    }).toArray(function (err, result) {
      if (err) throw err;
      //console.log( result );
      markers = result;
      //console.log( markers );
      //client.close(); //NOTE Crashes Server
      return markers;
    })})

router.get('/', (req, res) => {
    res.send(markers);
});

module.exports = router;