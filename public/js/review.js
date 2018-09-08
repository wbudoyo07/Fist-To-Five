$(document).ready(function() {
  
  $("#submit-review").click(function(event) {
    event.preventDefault();
    var currentUrl = window.location.pathname; // return segment1/segment2/segment3/segment4
    var urlArray = currentUrl.split( "/" );
    var lastURlPath= urlArray [urlArray .length - 1];

    //accumulate total rating 
    var rating1= parseInt($("input[name =rating1]:checked").val());
    var rating2 = parseInt($("input[name =rating2]:checked").val());
    var rating3 = parseInt($("input[name =rating3]:checked").val());
    var rating4 = parseInt($("input[name =rating4]:checked").val());
    var totalRating = (rating1+rating2+rating3+rating4)/4;

    var customerReviews = {
      fname: $("#fName-text").val().trim(),
      lname: $("#lName-text").val().trim(),
      textReview: $("#review-text").val(),
      scoreValues: totalRating,
      storeInfoId: lastURlPath
    };
    console.log(customerReviews);
    
    $.post("/api/customers", customerReviews).then(function(data) {
      console.log(data);
      // window data will be change to data.foreign key
      window.location.replace("/");
    });
  });
});







