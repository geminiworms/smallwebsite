var SPREADSHEET_ID_AND_TAB = "1NEC0SdTEB6X0daoUHN50svEdWdGvE6-ojcrloQy-1Aw/1";

// Define descriptions for each category
const categoryDescriptions = {
  all: ":everything",
  Learn: ":challenge what we know",
  Nurture: ":take care of yourself & others",
  Play: ":create & inspire"
};

$(document).ready(function () {
  $.getJSON("https://opensheet.elk.sh/" + SPREADSHEET_ID_AND_TAB, function (data) {
    data.reverse().forEach(function (row) {
      let categories = row.category.split(',').map(c => c.trim()).join(' ');
      let div = $(`<div class="item" data-category="${categories}">
        <h3><a href="${row.link}" target="_blank">${row.title}</a></h3>        
        <p>${row.note}</p>
        <h5>${row.category}</h5>
      </div>`).appendTo("#content");
    });
  });

  // Update active button and description text
  $("nav button").on("click", function () {
    const category = $(this).data("category");

    // Update active button
    $("nav button").removeClass("active");
    $(this).addClass("active");

    // Show/hide items based on category
    if (category === "all") {
      $(".item").show();
    } else {
      $(".item").hide();
      $(`.item[data-category*="${category}"]`).show();
    }

    // Update the category description text
    $("#category-description").text(categoryDescriptions[category] || "Showing items");
  });
});
