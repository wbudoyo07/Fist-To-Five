$(document).ready(function() {
  console.log("Connected to Home page");
  //Trigger event when press enter
  $("#inputSearchBar").on("keypress", function(event) {
    var userInput = $("#inputSearchBar").val().trim().replace(/\s+/g, "").toLowerCase();
    if (event.keyCode === 13) {
      console.log(userInput);
      getStoreInfo(userInput);
      $("#inputSearchBar").val("");
    }
  });
  // This function compare the user input with data on api.
  function getStoreInfo(userInput) {
    $.get("/api/register", function(data) {
      for (var i = 0; i < data.length; i++) {
        if (userInput === data[i].routeName) {
          window.location.href = "/results/" + userInput;
        } else {
          // alert("cannot find");
        }
      }
    });
  }
});

