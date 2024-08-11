const express = require("express"); // this returns a function used to create an express app, which is initialized in the following line
const morgan = require("morgan");
const mongoose = require("mongoose")
const blogRoutes = require('./routes/blogRoutes')

// creating an express app
const app = express();

// database connection 
const dbURI = "mongodb+srv://mikel_237:mikel7@nodetuts.zpexalh.mongodb.net/BlogsDB?retryWrites=true&w=majority&appName=NodeTuts";
mongoose.connect(dbURI)
    .then(() => {
        console.log("connected to db") 
        app.listen(3000, () => {
            console.log("listening on port 3000")
        });
    }).catch((err) => {
        console.log(err)
    })

//  Register the view engine for template creation using the set() method

app.set("view engine", "ejs");

// middlewares
app.use(express.static('public'))
app.use(morgan('dev'));
app.use(express.urlencoded({extended: true}));

//  blog routing
app.use(blogRoutes)

//  About routes 
app.get("/about", (request, response) => {
  response.render("About", { title: "About" });
});

app.get("/about-me", (request, response) => {
  response.redirect("about");
});

// 404 routes 
app.use((request, response) => {
  response.status(404).render("404", { title: "404" });
});
