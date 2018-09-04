var db = require("../models");
module.exports = function(app) {
  // Load home page
  app.get("/", function(req, res) {
    res.render("home", {
      titlePage: "Home",
      javascript: "home.js",
      css: "home.css"
    });
  });
  
  app.get("/login", function(req, res) {
    res.render("login", {
      titlePage: "Login",
      javascript: "login.js",
      css: "login.css"
    });
  });
  // load owner information page
  app.get("/masseuseProfile", function(req, res) {
    // res.json(req.user);

    // db.storeInfo
    //   .findOne({ where: { routeName: req.params.routeName } })
    //   .then(function(dbStoreInfo) {

    res.render("masseuseProfile", {
      titlePage: "My Profile",
      javascript: "masseuseProfile.js",
      css: "masseuseProfile.css",
      dataInfo: req.user
    });
    //   });
  });
  // load register page
  app.get("/register/", function(req, res) {
    db.storeInfo.findAll({}).then(function() {
      res.render("register", {
        titlePage: "Register Form",
        javascript: "register.js",
        css: "register.css"
      });
    });
  });
  // load register page
  app.get("/review/", function(req, res) {
    db.storeInfo.findAll({}).then(function() {
      res.render("review", {
        titlePage: "Review",
        javascript: "review.js",
        css: "review.css"
      });
    });
  });
  //load results page
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

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });

};
