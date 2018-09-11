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

  var imgPath; 


  var storage = multer.diskStorage({
    destination: "./public/images/profileImgs",
    filename: function(req, file, next) {
      imgPath = file.fieldname + "-" + Date.now() + path.extname(file.originalname);
      next(null, imgPath);
      
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
    db.storeInfo.findAll({ 
      include: [db.customerReviews]
    }).then(function (database) {
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
    
    //these work
    console.log("priceNumber",req.body.priceNumber);
    console.log("price", req.body.price);
    req.body.fname = req.body.fname.trim();
    req.body.lname = req.body.lname.trim();
    storeRoute = req.body.fname + req.body.lname;
    storeRoute =storeRoute.replace(/\s+/g, "").toLowerCase();
    console.log("storeRoute", storeRoute);

    
    db.storeInfo.create(req.body).then(function (database) {
    //    res.json(database);
      storeID = database.id;
      res.redirect("/login");
    }).then(function() {
    
      createQR("https://murmuring-tundra-37469.herokuapp.com/review/"+storeID);
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
      }, 
      {
        where: {
          id: storeID
        }

      }).then(function() {
        db.storeInfo.update({
          routeName: storeRoute
        }, 
        {
          where: {
            id: storeID
          }
        }).then(function (){
          db.storeInfo.update({
            img: "../images/profileImgs/" + imgPath
          }, 
          {
            where: {
              id: storeID
            }
          }).then(function () {
            writeQRtoFile();
          })
        })
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