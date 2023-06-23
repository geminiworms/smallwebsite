/* This music thing uses an API called 'Open Sheet' to get Google Sheets as JSON. Unlike the 'Inspiration' page that uses the 'papaparse' library to turn CSV into JSON, this API does it for us. 

Learn more at https://github.com/benborgers/opensheet
*/

/*
  The API's format is https://opensheet.elk.sh/spreadsheet_id/tab_name.
  
  
  To get your spreadsheet ID, hit Share at the top-right and make sure ANYONE WITH THE LINK CAN VIEW. Then, copy the end of your URL in your address bar after docs.google.com/spreadsheets/d/...
  
  e.g.
  https://docs.google.com/spreadsheets/d/1gLyh6gv41vl9H1fBmjFrGfKip9dKkvIu6o8sccTw2lY/edit#gid=1875797309
  copy
  "1gLyh6gv41vl9H1fBmjFrGfKip9dKkvIu6o8sccTw2lY" is your spreadsheet ID.
  
  We're using the 'Cloud' tab, so this is what we write...
*/

var SPREADSHEET_ID_AND_TAB = "1v6YroQmKUuXuZL-qDdwkx_0pRwYGrJqhT_TBxFPKnNc/1";

$(document).ready(function () {
  $.getJSON("https://opensheet.elk.sh/" + SPREADSHEET_ID_AND_TAB, function (data) {
    
    console.log(data);
    
    data.reverse().forEach(function (row, index) {
    /*  if (index === 0) return; //deleted this, since there is an index in my spreadsheet*/

 let div = $(`<div class="item"> 
        <img src="` + row.photo + `">
        <h3>` + row.identity +`</h3>
        <p>` +  row.text + `</p>
        <p>` +  row.Timestamp + `</p>
        <p>` +  row.intentions + `</p>
        </div>`)
      .appendTo("#content"); // # refers to div id
    });
  });
});


