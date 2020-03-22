// from data.js
var tableData = data;

console.log(tableData)

// Define Variables
var Button = d3.select("#filter-btn");
var TableBody = d3.select("tbody");
//var resetbtn = d3.select("#reset-btn");
var Columns = ["datetime", 
                "city", 
                "state", 
                "country", 
                "shape", 
                "durationMinutes", 
                "comments"]

// Process for populate table:
var PopulateTable = (DataInput) => {
    DataInput.forEach(Event => {
        var row = TableBody.append("tr");
        Columns.forEach(column => {
            row.append("td").text(Event[column]);
        })
    });
}

// First Populate Table - All Data Are Include
PopulateTable(tableData);

// Filter by Attribute: Date
Button.on("click", function() {
    TableBody.html("");
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    console.log(inputValue);
    
    // Filter by field matching input value
    var filteredTableData = tableData.filter(data => data.datetime === inputValue);
  
    console.log(filteredTableData);

    // Second Populate Table - Filtered Data
    if (filteredTableData.length !== 0) {
        PopulateTable(filteredTableData);
        }
    else if (filteredTableData.length === 0 ){
        TableBody.append("tr").append("td").text("No results found! Try another date"); 
        }
    if ( inputValue.length === 0 ){
        TableBody.html("");
        PopulateTable(tableData);
        }
});
  
 









 