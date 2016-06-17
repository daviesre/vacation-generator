$(document).ready(function() {
  $("form#vacation").submit(function(event) {

    event.preventDefault();
    var person = $("select#person").val();
    var color = $("select#color").val();
    var food = $("select#food").val();


      if (person === "Outgoing" && color === "Red" && food === "Meat") {
      $("#volcano").toggle();
    } else if (person === "Mysterious" && color === "Black" && food === "Vegetables") {
      $("#tibet").toggle();
    } else if (person === "Boring" && color === "Blue" && food === "Sweets") {
      $("#idaho").toggle();
    } else {
      $("#idaho").show();
    }

  });
});
