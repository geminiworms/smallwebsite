var SPREADSHEET_ID_AND_TAB = "1g3pn4ZGPilBdDkV6NjyoC1Uyvglb-E6tZYgVocC4_HQ/1";

$(document).ready(function () {
  var contentItems = []; // Array to store the content items
  var currentIndex = 0; // Current index of the displayed content item

  // Retrieve the data and populate contentItems array
  $.getJSON("https://opensheet.elk.sh/" + SPREADSHEET_ID_AND_TAB, function (data) {
    contentItems = data;
  }).done(function () {
    // Event listener for the button that triggers the pop-up window
    $(".popup-trigger button").click(function () {
      displayContentItem(currentIndex);
    });
  });

  // Display a content item in the pop-up window
  function displayContentItem(index) {
    var item = contentItems[index];
    var content = item.text;

    // Update the content of the pop-up window
    $("#popup-content").text(content);

    // Show the pop-up window
    $("#popup").show();
  }

  // Navigation functions
  function navigatePrev() {
    currentIndex = (currentIndex - 1 + contentItems.length) % contentItems.length;
    displayContentItem(currentIndex);
  }

  function navigateNext() {
    currentIndex = (currentIndex + 1) % contentItems.length;
    displayContentItem(currentIndex);
  }

  // Event handlers for navigation buttons
  $("#popup-prev").click(navigatePrev);
  $("#popup-next").click(navigateNext);
  $("#popup-close").click(function () {
    $("#popup").hide();
  });
});

$(function() {
  $("#popup").draggable();
});