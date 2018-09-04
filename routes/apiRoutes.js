var db = require("../models");
var QRcode = require("qrcode");
var multer = require("multer");
var fs = require("fs");
var path = require("path");



module.exports = function(app) {
  
  var base64Data;
  var convertIDtoString;

  var storage = multer.diskStorage({
    destination: "./public/images/profileImages",
    filename: function(req, file, callback) {
      callback(null,file.fieldname + convertIDtoString + path.extname(file.originalname));
    }
  });

  var upload = multer({
    storage: storage
  }).single("profileImg");
  
  //GET  store infomation data from registration
  app.get("/api/register", function(req, res) {
    db.storeInfo.findAll({}).then(function(database) {
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
   
    db.storeInfo.create(req.body).then(function(database) {
      res.json(database);
      var storeID = database.id;
      convertIDtoString = storeID.toString();
      upload(req, res, function(err){
        if(err) {
          console.log(err);
        } else {
          console.log("this is the file",req.file);
        }
      });
    }).then(function() {
   
      
      createQR("https://localhost:8080/review/"+convertIDtoString);
    
    });
  });

  // Create a new owner's information
  app.post("/api/customers", function(req, res) {
    console.log(req.body);
    db.customerReviews.create(req.body).then(function(database) {
      res.json(database);
    });
  });

  function createQR(siteToGenerate) {
   
    QRcode.toDataURL(siteToGenerate, function(err, pic) {
      var imgData = pic;
      base64Data = imgData.replace(/^data:image\/png;base64,/,"");
     
      db.storeInfo.update({
        
        QRcode: imgData
      }, {
        where: {
          id: parseInt(convertIDtoString)
        }
      }).then(function() {
        writeQRtoFile();
      });
      
    });
  }
  
  function writeQRtoFile() {
  
    
    
    var saveLocation = "./public/images/qrCodeImages/QRcodeID"+convertIDtoString+".png";

    fs.writeFile(saveLocation, base64Data, "base64", function(err) {
      if(err) {
        console.log("Error writing file:",err);
      } else {
        console.log("wrote the file!");
      }
    });
  }

};
