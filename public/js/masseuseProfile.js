$(document).ready(function() {
  $.get("/api/masseuse").then(function(data) {
    console.log(data);
    $(".member-name").text(data.email);
  });
});
