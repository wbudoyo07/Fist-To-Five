var db = require("../models");
var QRcode = require("qrcode");
var fs = require("fs");
var passport = require("../config/passport");
var multer = require("multer");
var path = require("path");


module.exports = function (app) {

  var storeID;
  var storeRoute;
  var base64Data;

  var storage = multer.diskStorage({
    destination: "./public/images/profileImgs",
    filename: function(req, file, next) {
      next(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
    }
  });

  var upload = multer({
    storage: storage
  }).single("storeImg");
  // GET the information data from login user
  app.get("/api/login", function (req, res) {
    res.json(req.user);
  });
  //GET  store infomation data from registration
  app.get("/api/register", function (req, res) {
    db.storeInfo.findAll({}).then(function (database) {
      res.json(database);
    });
  });

  //GET  store infomation data from customer
  app.get("/api/customers", function (req, res) {
    db.customerReviews.findAll({}).then(function (database) {
      res.json(database);
    });
  });

  // post the json  data masseuseProfile to /api/login route
  app.post("/api/login", passport.authenticate("local"), function (req, res) {
    res.json("/masseuseProfile");
  });

  // Create a new owner's information
  app.post("/api/register",upload, function (req, res) {
    res.send("connected");
    //these work
    console.log("fname:",req.body.fname);
    console.log("price:",req.body.priceNumber);
    //need to pass to sequalize
    storeRoute = req.body.routeName;
    
    db.storeInfo.create(req.body).then(function (database) {
      // res.json(database);
      
      console.log("routeName:",storeRoute);
      res.redirect(307,"/api/login");
    //  console.log("store the new id:",database.id);
    }).then(function() {
    //  console.log("store the new id:",database.id);
      createQR("https://localhost:8080/review/"+storeRoute);

      // console.log("would have excuted the createQR function");
    });

  });

  // Create a new owner's information
  app.post("/api/customers", function (req, res) {
    console.log(req.body);
    db.customerReviews.create(req.body).then(function (database) {
      res.json(database);
    });
  });

  function createQR(siteToGenerate) {

    QRcode.toDataURL(siteToGenerate, function (err, pic) {
      var imgData = pic;
      base64Data = imgData.replace(/^data:image\/png;base64,/, "");
      db.storeInfo.update({
        QRcode: imgData
      }, {
        where: {
          id: storeID
        }
      }).then(function() {
        writeQRtoFile();
      });
    });
  }

  function writeQRtoFile() {
    var saveLocation = "./public/images/qrCodeImages/QRcodeID" + storeRoute + ".png";
    
    fs.writeFile(saveLocation, base64Data, "base64", function (err) {
      if (err) {
        console.log("Error writing file:", err);
      } else {
        console.log("wrote the file!");
      }
    });
  }

};