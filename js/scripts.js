$(document).ready(function() {
  $("form#vacation").submit(function(event) {


    var person = $("select#person").val();
    var color = $("select#color").val();
    var food = $("select#food").val();


    if (person === "Outgoing" && color === "Red" && food === "Meat") {
    $("#volcano").toggle();
  } else if (person === "Outgoing" && color != "Black" && food != "Meat") {
    $("#nice").toggle();
  } else if (person === "Mysterious" && color != "Red" && food === "Vegetables") {
    $("#tibet").toggle();
  } else if (person === "Mysterious" && color != "Blue" && food != "Vegetables") {
    $("#vampire").toggle();
  } else if (person === "Average") {
    $("#idaho").toggle();
  } else {
    $("#space").toggle();
  }
    event.preventDefault();
  });
});
