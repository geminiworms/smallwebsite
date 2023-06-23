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
*/
var SPREADSHEET_ID_AND_TAB = "1LYM6R2OaVdseXQVnmTmDX65_cHpRf83szL8E7lA4_xc/1";


$(document).ready(function () {
  
  $.getJSON("https://opensheet.elk.sh/" + SPREADSHEET_ID_AND_TAB, function (data) {
    
    console.log(data);
    

    data.forEach(function (row, index) { // iterate over every object in data and run this function
      console.log(row);
      
      /* if(index == 0) return; // you might not need this. guess why? */
      
      let div = $(`<tr> 
        <td>`+ row.Title + `</td>
        <td>`+ row.Author +`</td>
        <td>`+ row.Rating +`</td>
        <td>`+ row.DateRead +`</td>

        </tr>`)
      .appendTo("table"); // # refers to div id
      
      // let's make a checkbox that's checked or not depending on whether we listened to it already
      if(row["Shelf"] == "read"){
        $(`<input type="checkbox" checked>`).appendTo(div);
      } else{
        $(`<input type="checkbox">`).appendTo(div);
      }
  
    });
  });  
});
  
