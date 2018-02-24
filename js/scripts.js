$(document).ready(function() {
  $("#quiz form").submit(function(event) {
    var yourNameInput = $("input#yourName").val();
    var customName = $("input:radio[name=customName]:checked").val();
    var yourNewName = yourNameInput.concat(customName);

    $(".yourNewName").text(yourNewName);


  $("results1").show();
event.preventDefault();
  });




});
