 var SPREADSHEET_ID_AND_TAB = "1p42Rd2JZLqaz5-Onc-0yvWWDfESvNf4rkcrQl7ReESc/1";

$(document).ready(function () {
  var contentItems = []; // Array to store the content items
  var currentIndex = 0; // Current index of the displayed content item

  // Retrieve the data and populate contentItems array
  $.getJSON("https://opensheet.elk.sh/" + SPREADSHEET_ID_AND_TAB, function (data) {
    contentItems = data;
  }).done(function () {
    var displayContainer = document.getElementById("display-container");
    var refreshButton = document.getElementById("refresh-button");

    // Function to display a random cell from a specific column
    function displayRandomCell() {
      if (contentItems.length > 0) {
        var randomIndex = Math.floor(Math.random() * contentItems.length);
        var randomCellValue = contentItems[randomIndex].alternate; // Replace 'yourColumnName' with the actual column name

        // Display the cell value in your container (e.g., a <div>)
        displayContainer.textContent = randomCellValue;
      }
    }
 refreshButton.innerHTML = "";
    // Event listener for the refresh button
    refreshButton.addEventListener("click", displayRandomCell);

    // Initial display
    displayRandomCell();
  });
});

$(document).ready(function() {
  // About Modal
  $("#about-link").click(function(event) {
    event.preventDefault();
    $("#about-modal").show();
  });

  // Read Modal
  $("#read-link").click(function(event) {
    event.preventDefault();
    $("#read-modal").show();
  });

  // Close Buttons
  $(".close-button").click(function() {
    $(this).closest(".modal").hide();
  });
});
