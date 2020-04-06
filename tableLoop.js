// add html table using loops
let tableData = [
    ['Car', 'Top Speed', 'Price'],
    ['Chevrolet', '120mph', '$10,000'],
    ['Pontiac', '140mph', '$20,000']
];

// create table and tableBody elements
let table = document.createElement('table');
let tableBody = document.createElement('tbody');

// append tableBody to table
table.appendChild(tableBody);

for(let i = 0; i < tableData.length; i++) {
    let row = document.createElement('tr');
    for(let j = 0; j < tableData[i].length; j++) {
        let element = null; // create a variable for table elements and data

        // i == 0 signifies the table head any other value is table cells
        if(i == 0) {
            element = document.createElement('th');
            // style object to make table head red and italic
            element.style.color = "red"; 
            element.style.fontStyle = "italic";
        } else {
            element = document.createElement('td');
            // style object to add thin border to table data
            element.style.border = "thin solid";
        }
        
        element.innerText = tableData[i][j];

        row.appendChild(element);
    }

    table.appendChild(row);

}

let myInfo = document.getElementById("myInfo");
myInfo.setAttribute("align", "center");
// appends table to body element
document.body.appendChild(table);
document.body.setAttribute("align", "center"); // center body text
table.setAttribute("align", "center"); // center table
table.setAttribute("style", "background-color: lightblue"); // light blue background for the table
table.style.border = "solid"; // style object to add thin border to table data
