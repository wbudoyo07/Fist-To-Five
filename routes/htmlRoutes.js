var db = require("../models");
module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.render("home", {
      titlePage: "Home",
      javascript: "home.js",
      css: "home.css"
    });
  });

  // register page
  app.get("/register/", function(req, res) {
    db.storeInfo.findAll({}).then(function() {
      res.render("register", {
        titlePage: "Register Form",
        javascript: "register.js",
        css: "register.css"
      });
    });
  });
  app.get("/results/:routeName", function(req, res) {
    db.storeInfo
      .findOne({ where: { routeName: req.params.routeName } })
      .then(function(dbStoreInfo) {
        res.render("results", {
          titlePage: "Results",
          javascript: "results.js",
          css: "results.css",
          dataInfo: dbStoreInfo
        });
      });
  });

  // app.get("/results", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/html/results.html"));
  // });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
