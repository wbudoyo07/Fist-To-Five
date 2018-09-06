$(document).ready(function() {
  console.log("Connected to Home page");
  //Trigger event when press enter
  $("#searchBar").on("keypress", function(event) {
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


function runStoreQuery() {
  var currentURL = window.location.origin;

  // The AJAX function uses the URL of our API to GET the data associated with it (initially set to localhost)
  $.ajax({ url: currentURL + "/api/register", method: "GET" })
    .then(function(storeData) {

      for (var i = 0; i < 3; i++) {

        var storeSection = $("<div>");
        storeSection.addClass("well");
        storeSection.attr("id", "storeWell-" + i + 1);
        $("#storeSection").append(storeSection);
        $("#storeWell-" + i + 1).append("<div class='col-sm-4 pull-left'><div class='card'><img src='" + storeData[i].img + "'style='width:100%'><div class='card-body'><h3>" + storeData[i].fname + " " + storeData[i].lname +"</h3><h3 class='w3-opacity'> $" + storeData[i].price + "</h3><h3>" + storeData[i].storeName + "</h3><h4>" + storeData[i].address + "</h4><button id='search-button' class='btn btn-secondary btn-md btn-block'><a href=" + "results/" + storeData[i].routeName + ">Read Reviews</a></button></div></div></div>");            
      }
    });
}
runStoreQuery();
