var db = require("../models");
var path = require ("path");
module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.render("home", {
      titlePage: "Home"
    });
  });

  // register page
  app.get("/register", function(req, res) {
    db.storeInfo.findAll({}).then(function(dbStoreInfo) {
      res.render("register", {
        titlePage: "Register Form"
      });
    });
  });
  app.get("/results", function(req, res) {
    db.storeInfo.findAll({}).then(function(dbStoreInfo) {
      res.render("results", {
        titlePage: "Results",
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
