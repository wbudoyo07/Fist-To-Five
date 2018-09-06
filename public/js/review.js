$(document).ready(function() {
  console.log("connected");
  $("#submit-review").click(function(event) {
    event.preventDefault();
    // var fname = $("#fname-text").val().trim();
    // var lname = $("#lname-text").val().trim();
    // var routeName = fname+lname;
    // routeName = routeName.replace(/\s+/g, "").toLowerCase();
    //load results page
    var segmentStr = window.location.pathname; // return segment1/segment2/segment3/segment4
    var segmentArray = segmentStr.split( "/" );
    var lastSegment = segmentArray[segmentArray.length - 1];
    console.log(lastSegment);
    var customerReviews = {
      fname: "william",
      lname: "budoyo",
      textReview: $("#reviewTextarea").val(),
      scoreValues: 5,
      storeInfoId: lastSegment
    };
    console.log(customerReviews);
    $.post("/api/customers",customerReviews ).then(function(data) {
      console.log(data);
      window.location.replace("/");
    });
  });


});