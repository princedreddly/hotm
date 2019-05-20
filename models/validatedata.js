const mongoose = require('mongoose');
//para conectar con una sola base de datos, en caso de que fuesen dos tendríamos que poner mongoose.createConnection

mongoose.connect('mongodb+srv://root:toor@cluster0-clvxs.gcp.mongodb.net/hotm?retryWrites=true')
    .then(() => console.log('Now connected to MongoDB!'))
    .catch(err => console.error('Something went wrong', err));


const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
 



const migrantSchema =new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
  userId: { type: String, required: true },
  price: { type: Number, required: true },
});




const stakeholderSchema =new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
  userId: { type: String, required: true },
  price: { type: Number, required: true },
});



const studiesSchema =new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
  userId: { type: String, required: true },
  price: { type: Number, required: true },
});



module.exports = {studiesSchema, stakeholderSchema, migrantSchema};