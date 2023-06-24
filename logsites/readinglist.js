/* this is for the reading list data i imported from goodreads june 2023 */
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
  a
