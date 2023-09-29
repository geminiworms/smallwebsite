var SPREADSHEET_ID_AND_TAB = "1bqRYXhXwQXW9x6MDsrS8obLIdBvMOH6lpsUA25x9C8k/1";

$(document).ready(function () {
    // Define an array of marquee IDs
    var marqueeIds = ["list", "work", "internet", "thoughts", "notes", "love", "identity", "observations", "affirm", "deny", "lyrics", "noise1", "noise2", "noise3"]; // Add more IDs for additional marquees

    // Function to update a marquee with data
    function updateMarquee(marqueeId, data) {
        var marquee = document.getElementById(marqueeId);
        marquee.textContent = data; // Update the text content

        // Calculate the animation duration based on content length (adjust the factor as needed)
        var contentLength = marquee.textContent.length;
        var animationDuration = contentLength * 0.1 + "s"; // Adjust the factor as needed

        // Apply the animation duration to the marquee
        marquee.style.animationDuration = animationDuration;
    }

    // Function to retrieve data and populate a marquee
    function populateMarquee(marqueeId, columnName) {
        $.getJSON("https://opensheet.elk.sh/" + SPREADSHEET_ID_AND_TAB, function (data) {
            var concatenatedData = ""; // Initialize an empty string for concatenated data
            data.forEach(function (row, index) {
                // Modify this line to access the specific column data you want
                var cellData = row[columnName]; // Use the provided column name

                // Check if the cellData is not empty or undefined
                if (cellData !== undefined && cellData !== null && cellData.trim() !== "") {
                    concatenatedData += cellData + ' '; // Concatenate the data with a space
                }
            });
            updateMarquee(marqueeId, concatenatedData); // Update the marquee with concatenated data
            
            // Attach click-to-pause functionality to the marquee
            var marquee = document.getElementById(marqueeId);
            var isPaused = false;

            marquee.addEventListener("click", function () {
                if (isPaused) {
                    marquee.style.animationPlayState = "running"; // Resume animation
                } else {
                    marquee.style.animationPlayState = "paused"; // Pause animation
                }
                isPaused = !isPaused; // Toggle the paused state
            });
        });
    }
    // Populate each marquee with its respective data
    populateMarquee("list", "list"); // Replace "ColumnName1" with the actual column name
    populateMarquee("work", "work"); // Replace "ColumnName2" with the actual column name
  populateMarquee("internet", "internet");
  populateMarquee("thoughts", "thoughts");
  populateMarquee("notes", "notes");
    populateMarquee("love", "love");
    populateMarquee("identity", "identity");
    populateMarquee("observations", "observations");
  populateMarquee("affirm", "affirm");
  populateMarquee("deny", "deny");
  populateMarquee("lyrics", "lyrics");
  populateMarquee("noise1", "noise1");
  populateMarquee("noise2", "noise2");
  populateMarquee("noise3", "noise3");
    // Add more calls to populateMarquee for additional marquees with their respective column names
});
