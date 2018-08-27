$(document).ready(function() {
  console.log("Connected to Home page");
  //Trigger event when press enter
  $("#searchBar").keyup(function(event) {
    event.preventDefault();
    console.log("enter is working");
    window.location.href = "/results";
  });
});
