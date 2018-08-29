$("#submit-review").click(function() {
  var review = {
    textReview: $("#review-text").val().trim(),
  };
  console.log(review);
  $.ajax({
    headers: {
      "Content-Type": "application/json"
    },
    type: "POST",
    url: "api/customers",
    data: JSON.stringify(review)
  });
});