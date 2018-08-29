var db = require("../models");

module.exports = function(app) {
  //GET  store infomation data from registration
  app.get("/api/register", function(req, res) {
    db.storeInfo.findAll({
      include:[db.customerReviews]
    }).then(function(database) {
      res.json(database);
    });
  });
  //GET  store infomation data from customer
  app.get("/api/customers", function(req, res) {
    db.customerReviews.findAll({}).then(function(database) {
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

  // Create a new owner's information
  app.post("/api/customers", function(req, res) {
    console.log(req.body);
    db.customerReviews.create(req.body).then(function(database) {
      res.json(database);
    });
  });
};
