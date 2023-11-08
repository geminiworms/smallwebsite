// gets a random integer between the min and max
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// spreadsheet load and read
var SPREADSHEET_ID_AND_TAB = "1QT9Dz51XQw9moaxJXxCcuTLIeukunDOdfa7vUzUNedQ/1"; /*loveletters metadata loaded */

$(document).ready(function () {
  $.getJSON("https://opensheet.elk.sh/" + SPREADSHEET_ID_AND_TAB, function (data) {
    data.forEach(function (row, index) {
      let div = $(`<div class="letter"> 
          <p>` +  row.letter + `</p>
          <p>` +  row.identity + `</p>
          </div>`)
          .css("top", getRandomInt(0, 80) + "%")
          .css("left", getRandomInt(0, 90) + "%")
          .appendTo("#content");

      // Make the "letter" divs draggable
      div.draggable();
    });
  });
});
