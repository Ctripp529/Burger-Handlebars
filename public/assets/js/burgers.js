// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
  //form to sumbit new burger to db
  $(".create-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();


    var newBurger = {
      burger_name: $("#newBurger").val().trim(),
      devoured: 0

    };
    // Send the POST request.
    $.post("/burgers", newBurger).then(location.reload());
  });


  //changing the burger to devoured, on click 
  $(".eatMe").on("click", function (event) {
    event.preventDefault();
    var id = $(this).data("id");
    var newDevourState = {
      devoured: 1
    };
    // Send the PUT request.
    $.ajax("/burgers/" + id, {
      type: "PUT",
      data: newDevourState
    }).then(location.reload());
  });

    $(".deleteBurger").on("click", function(event) {
      event.preventDefault();
      
      var id = $(this).data("id");
      console.log("The id to the burger that should be deleting is "+ id)
      // Send the DELETE request.
      $.ajax("/burgers/" + id, {
        type: "DELETE", 
      }).then(location.reload());
    
  });
});