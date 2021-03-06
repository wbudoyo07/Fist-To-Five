// Requiring bcrypt for password hashing. Using the bcrypt-nodejs version as the regular bcrypt module
// sometimes causes errors on Windows machines
var bcrypt = require("bcrypt-nodejs");

module.exports = function(sequelize, DataTypes) {
  var storeInfo = sequelize.define("storeInfo", {
    routeName: {
      type: DataTypes.STRING,
    /*
      allowNull: false,
      validate: {
        len: [1]
      }
    */},
    fname: {
      type: DataTypes.STRING,
      /*
      allowNull: false,
      validate: {
        len: [1]
      }*/
    },
    lname: {
      type: DataTypes.STRING,
      /*
      allowNull: false,
      validate: {
        len: [1]
      }*/
    },
    email: {
      type: DataTypes.STRING,
      /*
      allowNull:false,
      unique: true,
      validate: {
        isEmail: true
      }*/
    },
    password: {
      type: DataTypes.STRING,
      
      //allowNull: false
    },
    address: {
      type: DataTypes.STRING,
      /*
      allowNull: false,
      validate: {
        len: [1]
      }*/
    },
    storeName: {
      type: DataTypes.STRING,
      /*
      allowNull: false,
      validate: {
        len: [1]
      }*/
    },
    description: {
      type: DataTypes.STRING,
      /*
      allowNull: false,
      validate: {
        len: [1]
      }*/
    },
    price: {
      type: DataTypes.STRING,
      /*
      allowNull: false,
      validate: {
        len: [1]
      }*/
    },
    img: {
      type: DataTypes.STRING,
      allowNull: true
    },
    QRcode: {
      type: DataTypes.TEXT,
      allowNull: true,
      validate: {
        len: [1]
      }
    }
  });
  // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
  storeInfo.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };
  // Hooks are automatic methods that run during various phases of the User Model lifecycle
  // In this case, before a User is created, we will automatically hash their password
  storeInfo.hook("beforeCreate", function(user) {
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
  });
  storeInfo.associate = function(models) {
    // Associating storeInfo with customerReviews
    // When an storeInfo is deleted, also delete any associated customerReviews
    storeInfo.hasMany(models.customerReviews, {
      onDelete: "cascade"
    });
  };
  return storeInfo;
};
