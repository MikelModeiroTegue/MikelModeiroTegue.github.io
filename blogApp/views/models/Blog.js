
const mongoose = require('mongoose');
const Schema = mongoose.Schema

// Create a new Schema Object with the required method Schema

const blogSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  Snippet: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
}, { timestamps: true });

//  create a model to interact with the database, by using the mongoose.model() method, taking in two arguments, the Blog/collection name in your remote cluster
//  and in singular, since the model method pluralize it while searching for the collection and the initial letter in uppercase, 
//  as second parameter we have the schema definition we want to base the model on 

const Blog = mongoose.model('Blog', blogSchema)

module.exports = Blog