//load questions
//display fists
//take input
//send to database
// translate values of massage type through if statements to return text

alert("review js connected");
$(document).ready(function() {
  console.log("connected");
  $("submit-review").click(function(event) {
    event.preventDefault();
    var fname = $("#fname-text").val().trim();
    var lname = $("#lname-text").val().trim();
    var routeName = fname+lname;
    routeName = routeName.replace(/\s+/g, "").toLowerCase();
    
    var customerReviews = {
      routeName: routeName,
      fName: $("#fName-text").val().trim(),
      lName: $("#lName-text").val().trim(),
      massageType: $("#massage-type").val(),
      scoreValues: $("#user-scores").val(),
      textReview: $("#review-text").val(),
      // QRcode: $("#qrCode-text").val().trim(),
    };
      console.log(customerReviews);
      $.post("/api/customers", customerReviews).then(function(data) {
        console.log(data);
        window.location.replace(data);
      });
    });
  });
  
  
  





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







