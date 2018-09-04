<<<<<<< HEAD
// alert("register js connected");
console.log("connected");
$("#submit-register").click(function() {
  //alert("test");
  var routeName = $("#storeName-text").val().trim();
  routeName = routeName.replace(/\s+/g, "").toLowerCase();

  var storeInfo = {
    routeName: routeName,
    fname: $("#fname-text").val().trim(),
    lname: $("#lname-text").val().trim(),
    address: $("#address-text").val().trim(),
    storeName: $("#storeName-text").val().trim(),
    description: $("#description-text").val().trim(),
    price: $("#price-number").val().trim(),
  //  img: $("store-img").val()
  };
  console.log(storeInfo);
  $.ajax({
    headers: {
      "Content-Type": "application/json"
    },
    type: "POST",
    url: "api/register",
    data: JSON.stringify(storeInfo)
=======
$(document).ready(function() {
  console.log("connected");
  $("#submit-register").click(function(event) {
    event.preventDefault();
    var fname = $("#fname-text").val().trim();
    var lname = $("#lname-text").val().trim();
    var routeName = fname+lname;
    routeName = routeName.replace(/\s+/g, "").toLowerCase();
  
    var storeInfo = {
      routeName: routeName,
      fname: $("#fname-text").val().trim(),
      lname: $("#lname-text").val().trim(),
      email: $("#email-text").val().trim(),
      password: $("#password-masseuse").val().trim(),
      address: $("#address-text").val().trim(),
      storeName: $("#storeName-text").val().trim(),
      description: $("#description-text").val().trim(),
      price: $("#price-number").val().trim(),
      img: $("store-img").val()
    };
    console.log(storeInfo);
    $.post("/api/register", storeInfo).then(function(data) {
      console.log(data);
      window.location.replace(data);
    });
>>>>>>> fd38d9740f2031ea723e66cf8362c3ad077d93de
  });
});

