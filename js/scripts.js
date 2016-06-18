$(document).ready(function() {
  $("form#vacation").submit(function(event) {
    var person = $("select#person").val();
    var color = $("select#color").val();
    var food = $("select#food").val();

    if (person === "Outgoing" && color === "Red" && food === "Meat") {
      $("#volcano").fadeToggle();
     } else if (person === "Outgoing" && color != "Black" && food != "Meat") {
      $("#nice").fadeToggle();
     } else if (person === "Mysterious" && color != "Red" && food === "Vegetables") {
      $("#tibet").fadeToggle();
     } else if (person === "Mysterious" && color != "Blue" && food != "Vegetables") {
      $("#vampire").fadeToggle();
     } else if (person === "Average") {
      $("#idaho").fadeToggle();
     } else {
      $("#space").fadeToggle();
     }
      event.preventDefault();
  });
});
