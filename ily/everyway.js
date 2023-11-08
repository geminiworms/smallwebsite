var SPREADSHEET_ID_AND_TAB = "1p42Rd2JZLqaz5-Onc-0yvWWDfESvNf4rkcrQl7ReESc/1";

$(document).ready(function () {
  var contentItems = []; // Array to store the content items

  // Retrieve the data and populate contentItems array
  $.getJSON("https://opensheet.elk.sh/" + SPREADSHEET_ID_AND_TAB, function (data) {
    contentItems = data;
  }).done(function () {
    var displayContainer = document.getElementById("display-container");

    // Function to create and display values from the "ily" column
    function displayAllIlyValues() {
      contentItems.forEach(function (item) {
        var ilyValue = item.ily;
        var alternateValue = item.alternate;

        var cellElement = document.createElement("div");
        cellElement.textContent = ilyValue;

        // Add a hover effect to change the text on hover
        cellElement.addEventListener("mouseenter", function () {
          cellElement.textContent = alternateValue;
        });

        cellElement.addEventListener("mouseleave", function () {
          cellElement.textContent = ilyValue;
        });

        displayContainer.appendChild(cellElement);
      });
    }

    // Call the function to display "ily" values
    displayAllIlyValues();
  });
});
