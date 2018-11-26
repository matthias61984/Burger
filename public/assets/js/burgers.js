// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".devour").on("click", function(event) {
    var id = $(this).data("id");
    var ifdevoured = $(this).data("eaten");
    var beenDevoured = {
      devoured: ifdevoured
    };
    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: beenDevoured
    }).then(
      function() {
        console.log("Devoured this burger!");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    var newBurger = {
      name: $("#makeBurger").val().trim(),
      devoured: 0
    };
    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("Created new burger: " + newBurger.name);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});