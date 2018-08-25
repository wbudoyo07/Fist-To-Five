
$(document).ready(function() {
    var url = window.location.search;
    var masseuseId;
    if (url.indexOf("?masseuse_id=") !== -1) {
        masseuseId = url.split("=")[1];
      getDescription(masseuseId)
      getReviews(masseuseId);
    }
    else {
      getDescription();
      getReviews();
    }

    // descriptionContainer holds description of masseuse
    // var descriptionContainer = $(".description-container");
    // var description;

    // resultsContainer holds all of our reviews
    var resultsContainer = $(".results-container");
    var reviews;
  
    // The code below handles the case where we want to get reviews for a specific masseuse
    // Looks for a query param in the url for masseuse_id
    var url = window.location.search;
    var masseuseId;
    if (url.indexOf("?masseuse_id=") !== -1) {
        masseuseId = url.split("=")[1];
      getDescription(masseuseId)
      getReviews(masseuseId);
    }
    else {
      getDescription();
      getReviews();
    }

    // function getDescription(masseuse) {
    //     masseuseId = masseuse || "";
    //     if (masseuseId) {
    //       masseuseId = "/?masseuse_id=" + masseuseId;
    //     }
    //     $.get("/api/description" + masseuseId, function(data){
    //         console.log("Description", data);
    //         description = data;
    //         if (!description || !description.length) {
    //           displayEmpty(masseuse);
    //         }
    //         else {
    //           initializeDescription();
    //         }
    //       });
    //     } 
    //     })  

  
    function getReviews(masseuse) {
        masseuseId = masseuse || "";
      if (masseuseId) {
        masseuseId = "/?masseuse_id=" + masseuseId;
      }
    //   what is this api called?
      $.get("/api/reviews" + masseuseId, function(data) {
        console.log("Reviews", data);
        reviews = data;
        if (!reviews || !reviews.length) {
          displayEmpty(masseuse);
        }
        else {
          initializeRows();
        }
      });
    }
  
    // function initializeDescription() {
    //     descriptionContainer.empty();
    //     var descriptionToAdd = [];
    //     for (var i = 0; i < description.length; i++) {
    //       descriptionToAdd.push(createNewDescription(description[i]));
    //     }
    //     descriptionContainer.append(descriptionToAdd);
    //   }
  
    //   function createNewDescription(description) {
    //     var newDescriptionCard = $("<div>");
    //     newDescriptionCard.addClass("card");
    //     var newDescriptionCardBody = $("<div>");
    //     newDescriptionCardBody.addClass("card-body");
    //     var newDescriptionBody = $("<p>");
    //     newDescriptionTitle.text(description.title + " ");
    //     newDescriptionBody.text(description.body);
    //     newReviewDate.text(formattedDate);
    //     newReviewTitle.append(newReviewDate);
    //     newReviewCardHeading.append(newReviewTitle);
    //     newReviewCardHeading.append(newReviewAuthor);
    //     newReviewCardBody.append(newReviewBody);
    //     newReviewCard.append(newReviewCardHeading);
    //     newReviewCard.append(newReviewCardBody);
    //     newReviewCard.data("review", Review);
    //     return newReviewCard;
    //   }

    function initializeRows() {
      resultsContainer.empty();
      var reviewsToAdd = [];
      for (var i = 0; i < reviews.length; i++) {
        reviewsToAdd.push(createNewRow(reviews[i]));
      }
      resultsContainer.append(reviewsToAdd);
    }

    function createNewRow(review) {
      var newReviewCard = $("<div>");
      newReviewCard.addClass("card");
      var newReviewCardHeading = $("<div>");
      newReviewCardHeading.addClass("card-header");
      var newReviewTitle = $("<h2>");
      var newReviewDate = $("<small>");
      var newReviewAuthor = $("<h5>");
      newReviewAuthor.text("Written by: " + review.Author.name);
      newReviewAuthor.css({
        float: "right",
        color: "black",
        "margin-top":
        "-10px"
      });
      var newReviewCardBody = $("<div>");
      newReviewCardBody.addClass("card-body");
      var newReviewBody = $("<p>");
      newReviewTitle.text(review.title + " ");
      newReviewBody.text(review.body);
      newReviewDate.text(formattedDate);
      newReviewTitle.append(newReviewDate);
      newReviewCardHeading.append(newReviewTitle);
      newReviewCardHeading.append(newReviewAuthor);
      newReviewCardBody.append(newReviewBody);
      newReviewCard.append(newReviewCardHeading);
      newReviewCard.append(newReviewCardBody);
      newReviewCard.data("review", Review);
      return newReviewCard;
    }
  
    // This function displays a message when there are no reviews
    function displayEmpty(masseuseId) {
      var query = window.location.search;
      var partial = "";
      if (id) {
        partial = " for Product #" + masseuseId;
      }
      resultsContainer.empty();
      var messageH2 = $("<h2>");
      messageH2.css({ "text-align": "center", "margin-top": "50px" });
      messageH2.html("No reviews yet" + partial + ", navigate <a href='/cms" + query +
      "'>here</a> in order to get started.");
      resultsContainer.append(messageH2);
    }
  
  });
  