// use javascript DOM to create HTML table

// create elements for table, 3 rows, 9 cells
const tableElement = document.createElement("table");
const r1Element = document.createElement("tr");
const r2Element = document.createElement("tr");
const r3Element = document.createElement("tr");
const r1c1Element = document.createElement("td");
const r1c2Element = document.createElement("td");
const r1c3Element = document.createElement("td");
const r2c1Element = document.createElement("td");
const r2c2Element = document.createElement("td");
const r2c3Element = document.createElement("td");
const r3c1Element = document.createElement("td");
const r3c2Element = document.createElement("td");
const r3c3Element = document.createElement("td");

// create text nodes for cells
let r1c1Text = document.createTextNode("Car");
let r1c2Text = document.createTextNode("Top Speed");
let r1c3Text = document.createTextNode("Price");
let r2c1Text = document.createTextNode("Chevrolet");
let r2c2Text = document.createTextNode("120mph");
let r2c3Text = document.createTextNode("$10,000");
let r3c1Text = document.createTextNode("Pontiac");
let r3c2Text = document.createTextNode("140mph");
let r3c3Text = document.createTextNode("$20,000");

