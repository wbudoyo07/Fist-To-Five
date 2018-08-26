var db = require("../models");
var path = require ("path");
module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbExamples
      });
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
        titlePage: "results page",
        dataInfo: dbStoreInfo
      });
    });
  });

  // app.get("/results", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/html/results.html"));
  // });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
