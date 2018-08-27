var db = require("../models");
var path = require("path");
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
  app.get("/register/:id", function(req, res) {
    db.storeInfo.findAll({}).then(function(dbStoreInfo) {
      res.render("register", {
        titlePage: "Register Form",
        javascript: "register.js",
        css: "register.css"
      });
    });
  });
  app.get("/results/:storeName", function(req, res) {
    db.storeInfo
      .findOne({ where: { storeName: req.params.storeName } })
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
