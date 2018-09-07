module.exports = function(sequelize, DataTypes) {
  var customerReviews = sequelize.define("customerReviews", {
    fname: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    lname: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    textReview: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    scoreValues: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  });
  return customerReviews;
};
