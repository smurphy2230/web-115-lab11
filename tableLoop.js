// add html table using loops
let tableData = [
    ['Car', 'Top Speed', 'Price'],
    ['Chevrolet', '120mph', '$10,000'],
    ['Pontiac', '140mph', '$20,000']
];

let table = document.createElement('table');
let tableBody = document.createElement('tbody');

table.appendChild(tableBody);

for(let i = 0; i < tableData.length; i++) {
    let row = document.createElement('tr');
    for(let j = 0; j < tableData[i].length; j++) {
        let element = null;

        if(i == 0) {
            element = document.createElement('th');
        } else {
            element = document.createElement('td');
        }
        
        element.innerText = tableData[i][j];

        row.appendChild(element);
    }

    table.appendChild(row);

}

document.body.appendChild(table);
