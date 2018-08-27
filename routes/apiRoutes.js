var db = require("../models");

module.exports = function(app) {
  //GET  store infomation data
  app.get("/api/register", function(req, res) {
    db.storeInfo.findAll({}).then(function(database) {
      res.json(database);
    });
  });
  // Create a new owner's information
  app.post("/api/register", function(req, res) {
    console.log(req.body);
    db.storeInfo.create(req.body).then(function(database) {
      res.json(database);
    });
  });
};
