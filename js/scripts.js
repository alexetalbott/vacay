$(document).ready(function() {
  $("#quiz form").submit(function(event) {
    var yourNameInput = $("input#yourName").val();
    var customName = $("input:radio[name=customName]:checked").val();
    var yourNewName = yourNameInput.concat(customName)+"!";
    var favoriteColor = $("#color").val();
    var favoriteLocation = $("input:radio[name=location]:checked").val();

    $(".yourNewName").text(yourNewName);

    if ()
    $("#results1").show();

event.preventDefault();
  });




});
