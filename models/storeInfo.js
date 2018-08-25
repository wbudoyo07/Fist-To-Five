module.exports = function(sequelize, DataTypes) {
  // "storeInfo" is name of the table
  var storeInfo = sequelize.define("storeInfo", {
    storeName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    storeAddress: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1]
    },
    storeQRcode: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [10]
      }
    },
    storeReview: {
      type: DataTypes.STRING,
      allowNull: true,
      len: [1]
    },
    storePhoneNumber: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    imageStore: {
      type: DataTypes.BLOB,
      allowNull: true
    }
  });
  return storeInfo;
};
