var SPREADSHEET_ID_AND_TAB = "1t5blu8G5X7AP7bQ0IR3jeNqyX0Fo4kYt8_5XkUVtGE0/1";
/* spreadsheet for twilight_soundtrack loaded, this is using the formatted sheet /1 */


$(document).ready(function () {
  $.getJSON("https://opensheet.elk.sh/" + SPREADSHEET_ID_AND_TAB, function (data) {
    
    console.log(data);
    
 data.forEach(function (row, index) { // iterate over every object in data and run this function
      console.log(row);
      
      /* if(index == 0) return; // you might not need this. guess why? */
   
        let linkspotify = ''; // Initialize an empty string for the link image HTML
      
      // Check if row.link has content before adding the image HTML
      if (row.link_spotify) {
        linkspotify = `<a href="${row.link_spotify}" target="_blank"><img src="https://cdn.glitch.global/413e5956-791d-4fa2-a850-40e6e17d90ec/spotifywhite.png?v=1694676382164"  alt="Link Image" style="width: 20px; height: 20px;"></a>`;
      }
   
           let linkyoutube = ''; // Initialize an empty string for the link image HTML
      
      // Check if row.link has content before adding the image HTML
      if (row.link_youtube) {
        linkyoutube = `<a href="${row.link_youtube}" target="_blank"><img src="https://cdn.glitch.global/413e5956-791d-4fa2-a850-40e6e17d90ec/youtube-logo-white.png?v=1694714889910"  alt="Link Image" style="width: 20px; height: 20px;"></a>`;
      }
      
      let div = $(`<tr> 
        
        <td>`+ row.book + `</td>
        <td>`+ row.page +`</td>
        <td>`+ row.song_title +`</td>
        <td>`+ row.song_artist +`</td>
        <td>${linkspotify}</td>
        <td>${linkyoutube}</td>
        <td>`+ row.note +`</td>


        </tr>`)
      .appendTo("table"); // # refers to div id
      
    });
  });  
});