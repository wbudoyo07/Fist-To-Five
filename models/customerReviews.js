module.exports = function(sequelize, DataTypes) {
  var customerReviews = sequelize.define("customerReviews", {
    fname: {
      type: DataTypes.STRING,
      // allowNull: false,
      // validate: {
      //   len: [1]
      // }
    },
    lname: {
      type: DataTypes.STRING,
      // allowNull: false,
      // validate: {
      //   len: [1]
      // }
    },
    textReview: {
      type: DataTypes.STRING,
      // allowNull: false,
      // validate: {
      //   len: [1]
      // }
    },
    /*
    QRcode: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    */
    scoreValues: {
      type: DataTypes.INTEGER,
      // allowNull: false,

    },
  });

  customerReviews.associate = function(models) {
    // We're saying that a customerReviews should belong to an storeInfo
    // customerReviews can't be created without storeInfo due to the foreign key constraint
    customerReviews.belongsTo(models.storeInfo, {
      // foreignKey: {
      //   allowNull: true
      // }
    });
  };
  return customerReviews;
};
