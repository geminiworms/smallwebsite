var SPREADSHEET_ID_AND_TAB = "1pRvsfCkQZrSgU84W1trHtEgRbJ3PrMc7X_dgY7aQT0I/2";
/* spreadsheet for ourgoodreads_meta loaded, this is using the formatted sheet /2 */


$(document).ready(function () {
  $.getJSON("https://opensheet.elk.sh/" + SPREADSHEET_ID_AND_TAB, function (data) {
    
    console.log(data);
    
    data.reverse().forEach(function (row, index) {
    /*  if (index === 0) return; //deleted this, since there is an index in my spreadsheet*/

let stars = '';
for (let i = 0; i < row.stars; i++) {
  stars += '★';
}
      
 let div = $(`<div class="item"> 
        <h5>` + '→ ' + row.Timestamp + `<h5>
        <h3><a href="${row.link}" target="_blank">${row.title}</a> by ${row.author}</h3>        
        <h4>${row.name} rated it ${stars}(${row.stars})</h4>
        <p>` + 'tldr; ' + row.vibes + `</p>
        <p>` +  row.review + `</p>

        
        </div>`)
      .appendTo("#content"); // # refers to div id
    });
  });
});


