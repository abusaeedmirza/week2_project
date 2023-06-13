var R1 = document.getElementById("row1");
var R2 = document.getElementById("row2");
var R3 = document.getElementById("row3");
const rows = [R1, R2, R3];
const rowdata = [
  ["Webmaster", "example1@email.com", "Helsinginkatu 3", "X"],
  ["User123", "example2@email.com", "Oulunkatu 1", "-"],
  ["AnotherUser222", "example3@email.com", "Vaasankatu 2", "-"],
];
for (let i = 0; i < rowdata.length; i++) {
  for (let x = 0; x < rowdata[i].length; x++) {
    var cell = document.createElement("td");
    var txt = document.createTextNode(rowdata[i][x]);
    cell.appendChild(txt);
    rows[i].appendChild(cell);
  }
}
