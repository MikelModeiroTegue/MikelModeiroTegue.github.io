const blog = require("../views/models/Blog");
// blog_index, blog_details, blog_create_get, blog_create_post

const blog_index = (req, res) => {
  blog.find().then((result) => {
    res.render("home", { title: "All Blogs", result });
  });
};

const blog_details = (req, res) => {
  const id = req.params.id;
  blog.findById(id).then((result) => {
    res.render("details", { title: "Blog details", blog: result });
  });
};

const blog_create_get = (request, response) => {
  response.render("create", { title: "Create new blog" });
};

const blog_create_post = (req, res) => {
  const Blog = new blog(req.body);
  Blog.save()
    .then(() => {
      res.redirect("/blogs");
    })
    .catch((err) => {
      console.log(err);
    });
};

const homePage = (request, response) => {
  response.redirect("/blogs");
};

module.exports = {
  blog_index,
  blog_details,
  blog_create_get,
  blog_create_post,
  homePage, 
};