$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var nameInput = $("input#name").val();
    var colorInput = $("input#color").val();
    var movieInput = $("input#movie").val();
    var songInput = $("input#song").val();
    var bookInput = $("input#book").val();
    var foodInput = $("input#food").val();
    var combine = [nameInput, colorInput, movieInput, songInput, bookInput, foodInput]

    $(".name").text(combine[0]);
    $(".color").text(combine[1]);
    $(".movie").text(combine[2]);
    $(".song").text(combine[3]);
    $(".book").text(combine[4]);
    $(".food").text(combine[5]);

    $("#results").show();
    event.preventDefault();

  });
});
