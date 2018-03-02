$(document).ready(function() {
  $("#quiz form").submit(function(event) {
    var yourNameInput = $("input#yourName").val();
    var customName = $("input:radio[name=customName]:checked").val();
    var yourNewName = yourNameInput.concat(customName)+"!";
    var favoriteColor = $("#color").val();
    var tropicalCultural = $("input:radio[name=tropicalChoice]:checked").val();
    var favoriteLocation = $("input:radio[name=location]:checked").val();

    $(".yourNewName").text(yourNewName);

    event.preventDefault();

    if (favoriteLocation === 'Dominican Republic' && tropicalCultural === 'tropical') {
      $("#results2").hide()
      $("#results3").hide();
      $("#results4").hide();
      $("#results1").show();
    } else if (favoriteLocation === 'Amalfi Coast'&& tropicalCultural === 'tropical') {
      $("#results1").hide();
      $("#results3").hide();
      $("#results4").hide();
      $("#results2").show();
    } else if (favoriteLocation === 'The Great Barrier Reef' && tropicalCultural === 'tropical') {
      $("#results1").hide();
      $("#results2").hide();
      $("#results4").hide();
      $("#results3").show();
    } else {
      $("#results1").hide();
      $("#results2").hide();
      $("#results3").hide();
      $("#results4").show();
    }
  });




});
