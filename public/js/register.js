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
    img: $("store-img").val()
  };
  console.log(storeInfo);
  $.ajax({
    headers: {
      "Content-Type": "application/json"
    },
    type: "POST",
    url: "api/register",
    data: JSON.stringify(storeInfo)
  });
});
