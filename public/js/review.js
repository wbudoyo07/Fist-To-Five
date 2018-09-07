//load questions
//display fists
//take input
//send to database
// translate values of massage type through if statements to return text

// alert("review js connected");
// $(document).ready(function () {
//   console.log("connected");
//   $("submit-review").click(function (event) {
//     event.preventDefault();
//     var fname = $("#fname-text").val().trim();
//     var lname = $("#lname-text").val().trim();
//     var routeName = fname + lname;
//     routeName = routeName.replace(/\s+/g, "").toLowerCase();

//     var customerReviews = {
//       routeName: routeName,
//       fName: $("#fName-text").val().trim(),
//       lName: $("#lName-text").val().trim(),
//       massageType: $("#massage-type").val(),
//       scoreValues: $("#user-scores").val(),
//       textReview: $("#review-text").val(),
//       // QRcode: $("#qrCode-text").val().trim(),
//     };
//     console.log(customerReviews);
//     $.post("/api/customers", customerReviews).then(function (data) {
//       console.log(data);
//       window.location.replace(data);
//     });
//   });
// });








// alert("review js connected");
// console.log("connected");

// $(document).ready(function() {
//   var openFist = "<label><input type='radio' name='rating' value=";

//   var fistArray = [
//     "'0'><img src='../bootstrap/images/fists0.png>",
//     "'1'><img src='../bootstrap/images/fists1.png>",
//     "'2'><img src='../bootstrap/images/fists2.png>",
//     "'3'><img src='../bootstrap/images/fists3.png>",
//     "'4'><img src='../bootstrap/images/fists4.png>",
//     "'5'><img src='../bootstrap/images/fists5.png>"
//   ];

//   var closeFist = "</label>";

//   var displayFist = function(){
//     fistArray.forEach(function(fistArray) {
//       console.log(openFist + fistArray + closeFist);
//     });

//     $("#fistRate").html(displayFist);
//   };

// });

$(document).ready(function() {
  $("#submit-review").click(function(event) {
    event.preventDefault();
    
    // accumulate total rating 
    var rating1= parseInt($("input[name =rating1]:checked").val());
    var rating2 = parseInt($("input[name =rating2]:checked").val());
    var rating3 = parseInt($("input[name =rating3]:checked").val());
    var rating4 = parseInt($("input[name =rating4]:checked").val());
    var totalRating = (rating1+rating2+rating3+rating4)/4;

    var customerReviews = {
      fname: $("#fName-text").val().trim(),
      lname: $("#lName-text").val().trim(),
      textReview: $("#review-text").val(),
      scoreValues: totalRating
    };
    console.log(customerReviews);
    
    $.post("/api/customers", customerReviews).then(function(data) {
      console.log(data);
      // window data will be change to data.foreign key
      window.location.replace("/");
    });
  });
});







