var data_table = document.getElementById("data-table");
document.getElementById("submit-data").addEventListener("click", myfunction);
document.getElementById("empty-table").addEventListener("click", EmptyTable);
function myfunction() {
  //var data_table = document.getElementById("data-table");
  var user = document.getElementById("input-username").value;
  var email = document.getElementById("input-email").value;
  var address = document.getElementById("input-address").value;
  var admin = document.getElementById("input-admin").checked;
  // creating a new row in the table
  var newrow = data_table.insertRow();
  // creating new cells in the row
  var newcell1 = newrow.insertCell();
  var newcell2 = newrow.insertCell();
  var newcell3 = newrow.insertCell();
  var newcell4 = newrow.insertCell();
  // putting input data in the cells
  newcell1.innerHTML = user;
  newcell2.innerHTML = email;
  newcell3.innerHTML = address;
  newcell4.innerHTML = admin ? "X" : "-";
}
//doument.getElementById("empty-table").addEventListener("click", EmptyTable);
function EmptyTable() {
  var total_rows = data_table.rows.length;
  //document.getElementById("para").innerHTML = total_rows;
  for (let x = 1; total_rows > x; x++) {
    data_table.deleteRow(-1);
  }
}
