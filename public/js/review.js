// alert("review js connected");
console.log("connected");
$("#submit").click(function() {
  console.log($("#fName-text").val());
//   var routeName = $("#storeName-text").val().trim();
//   routeName = routeName.replace(/\s+/g, "").toLowerCase();

//   var customerReviews = {
//     routeName: routeName,
//     fName: $("#fName-text").val().trim(),
//     lName: $("#lName-text").val().trim(),
//     description: $("#description-text").val().trim(),
//     scoreValues: $("#user-scores").val().trim(),
//     textReview: $("#review-text").val().trim(),
//     QRcode: $("#qrCode-text").val().trim(),
//   };
//   console.log(customerReviews);
//   $.ajax({
//     headers: {
//       "Content-Type": "application/json"
//     },
//     type: "POST",
//     url: "api/reviews",
//     data: JSON.stringify(customerReviews)
//   });
});
