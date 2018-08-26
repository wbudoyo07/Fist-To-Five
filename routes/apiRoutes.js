var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/examples", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });
  // store infomation data
  app.get("/api/register", function(req, res) {
    db.storeInfo.findAll({}).then(function(database) {
      res.json(database);
    });
  });
  // Create a new example
  app.post("/api/register", function(req, res) {
    console.log(req.body);
    db.storeInfo.create(req.body).then(function(database) {
      res.json(database);
    });
  });
  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.json(dbExample);
    });
  });
};
