module.exports = function(sequelize, DataTypes) {
  var customerReviews = sequelize.define("customerReviews", {

    textReview: {
      type: DataTypes.STRING,
      // allowNull: false,
      // validate: {
      //   len: [1]
      // }
    }
  });

  customerReviews.associate = function(models) {
    // We're saying that a customerReviews should belong to an storeInfo
    // customerReviews can't be created without storeInfo due to the foreign key constraint
    customerReviews.belongsTo(models.storeInfo, {
      foreignKey: {
        allowNull: true
      }
    });
  };
  return customerReviews;
};
