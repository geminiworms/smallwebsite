
// gets a random integer between the min and max
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/* this is adapted from chia amisola's "clouds" site, so some variable names carried through*/

var SPREADSHEET_ID_AND_TAB = "1RY2w7RhE74OnvHgWiEbqCfhJGf4eKmFHndcn6jIIup0/1";

$(document).ready(function () {
  
  
  $.getJSON("https://opensheet.elk.sh/" + SPREADSHEET_ID_AND_TAB, function (data) {
    
    data.forEach(function (row, index) {

  let div = $(`<div class='cloud'>
        <span class='emoji'>` + row.icon + `</span>
        <p>` + row.note + `</p>
        </div>`)
  .attr("title", row.note)
  .css("top", getRandomInt(0, 80) + "%")
  .css("left", getRandomInt(0, 90) + "%")
  .addClass('opacity-low') // Add opacity class initially
  .appendTo("#clouds");
  
    });
  });  
});


// Look at cloud
$("#clouds").on("click", ".cloud", function(){
  
  // get information from cloud
  let symbol = $(this).find(".emoji").text();
  let msg = $(this).find("p").text();
  
  $("#look .cloud .emoji").text(symbol);
  $("#look .cloud p").text(msg);
  
  $("#look").show();
  
  // also, mark that cloud as seen
  $(this).attr("seen", "");
  
});

// hide when button is clicked
$("#look").on("click", "button[hide]", function(){
  $("#look").hide();
});
