// from data.js
var tableData = data;
var tbody = d3.select("tbody");

// Select the buttons
var button_1 = d3.select("#filter-btn");
var button_2 = d3.select("#reset-btn");
var button_3 = d3.select("#splash-btn");

// Select the form
var form = d3.select("#form");


// Create event handlers for clicking the button or pressing the enter key
button_1.on("click", runEnter);
form.on("submit", runEnter);
button_2.on("click", reset);
button_3.on("click", loadPage);


// Create the function to run for both events
function runEnter() {
    
    // RESET THE TABLE - Delete all current row entries 
    // Only deletes rows if table length graeter than 1 (i.e. not just headers)
    document.getElementById('no-match').style.visibility = 'hidden'
    table = document.getElementById("ufo-table");
    if (table.rows.length > 1) {
        while(table.rows.length > 1) {
            table.deleteRow(1); 
            // When deleting the 2nd row, 
            // the 3rd row will become the 2nd, so it's dynamic
        }
    }
    
    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input elements and get the raw HTML node
    var dateElement = d3.select("#datetime");
    var cityElement = d3.select("#city");
    var stateElement = d3.select("#state");
    var countryElement = d3.select("#country");
    var shapeElement = d3.select("#shape");

    // Get the value property for each of the form fields
    var dateValue = dateElement.property("value");
    var cityValue = cityElement.property("value");
    var stateValue = stateElement.property("value");
    var countryValue = countryElement.property("value");
    var shapeValue = shapeElement.property("value");

    // convert user inputs for city and state to lowercase (to match data)
    cityValue = cityValue.toLowerCase()
    stateValue = stateValue.toLowerCase()

    // Create array to store the filtered data
    var filtered = []
        

    // Iterate through the data and filter
    // Iteration used instead of filter method to allow user to leave fields blank
    for (i=0; i<tableData.length; i++) {
        
        // filter by date 
        if ((tableData[i].datetime == dateValue) || (dateValue == "") ) {
                          
            // filter by city 
            if ((tableData[i].city == cityValue) || (cityValue == "any") || (cityValue == "")) {

                //filter by state
                if ((tableData[i].state == stateValue) || (stateValue == "any") || (stateValue == "")) {

                    //filter by country
                    if ((tableData[i].country == countryValue) || (countryValue == "Any") || (countryValue == ""))  {
                        
                        //filter by shape
                        if ((tableData[i].shape == shapeValue) || (shapeValue == "Any") || (shapeValue == "")) {
                            filtered.push(tableData[i]);
                        }                             
                    };   
                };    
            };
        };    
    };

    // TABLE DATA
    // Display a 'No matches' if there were no matches, Otherwise fill table with data 
    if (filtered.length == 0){
        // hide the table
        document.getElementById('table-area').style.visibility = 'hidden' 
        // show the 'No match' text
        document.getElementById('no-match').style.visibility = 'visible';
    } else {
        // else show the table and fill with the filtered data 
        document.getElementById('table-area').style.visibility = 'visible';
                
        filtered.forEach((insertData) => {
            var row = tbody.append("tr");
            Object.entries(insertData).forEach(([key, value]) => {
                var cell = row.append("td");
                cell.text(value);
            });
        });
    }

};  

function loadPage() {

    // Display the main page elements
    document.getElementById('wrapper').style.visibility = 'visible';

    // Hide the splash page elements 
    document.getElementById('splash-div').style.visibility = 'hidden';

    // Render the table
    tableData.forEach((insertData) => {
        var row = tbody.append("tr");
        Object.entries(insertData).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });

    // Trigger reflow so text animations are replayed
    var el = document.getElementById('ufo-header');
    el.style.animation = 'none';
    el.offsetHeight; /* trigger reflow */
    el.style.animation = null; 
}



function reset() {

    // Reset the form
    document.getElementById('form').reset
}

