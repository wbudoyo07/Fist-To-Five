$(document).ready(function() {

  console.log("connected");/*
  $("#submit-register").submit(function(event) {
    event.preventDefault();
    console.log("submit button worked");
    //everything has to be sent through the formData object now
    var formData = new FormData(this);
    var fname = $("#fname-text").val().trim();
    var lname = $("#lname-text").val().trim();
    var routeName = fname+lname;
    console.log("routeName:",routeName);
    routeName = routeName.replace(/\s+/g, "").toLowerCase();
    var email = $("#email-text").val().trim();
    var password = $("#password-masseuse").val().trim();
    var address = $("#address-text").val().trim();
    var storeName = $("#storeName-text").val().trim();
    var description = $("#description-text").val().trim();
    var price = $("#price-number").val().trim();

    formData.append("fname",fname);
    formData.append("lname",lname);
    formData.append("routeName",routeName);
    formData.append("email",email);
    formData.append("password",password);
    formData.append("address",address);
    formData.append("storeName",storeName);
    formData.append("description",description);
    formData.append("priceNumber",price);
    console.log("formData",formData);
    $.ajax({
      url: "/api/register",
      type: "POST",
      data: formData,
      processData: false,
      contentType: false,
      sucess: function(r) {
        console.log("result", r);
      },
      error: function (err) {
        console.log("error:",err);
      }
    });
    

    /*
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
  
    
    $.post("/api/register", storeInfo).then(function(data) {
      console.log(data);
      window.location.replace(data);
    });
    */
  });
  */


