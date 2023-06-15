var data_table = document.getElementById("data-table");
document.getElementById("submit-data").addEventListener("click", myfunction);
document.getElementById("empty-table").addEventListener("click", EmptyTable);
function myfunction() {
  var user = document.getElementById("input-username").value;
  var email = document.getElementById("input-email").value;
  var address = document.getElementById("input-address").value;
  var admin = document.getElementById("input-admin").checked;
  var rownumber = FindUsername(user);
  if (rownumber < 1) {
    //if username is not matched
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
  if (rownumber >= 1) {
    // if username is matched
    //updating the exisiting row
    var updatedrow = data_table.getElementsByTagName("tr");
    var cells = updatedrow[rownumber].getElementsByTagName("td")[1];
    cells.textContent = email;
    cells = updatedrow[rownumber].getElementsByTagName("td")[2];
    cells.textContent = address;
    cells = updatedrow[rownumber].getElementsByTagName("td")[3];
    cells.textContent = admin ? "X" : "-";
  }
}
function EmptyTable() {
  var total_rows = data_table.rows.length;

  for (let x = 1; total_rows > x; x++) {
    data_table.deleteRow(-1);
  }
}
function FindUsername(username) {
  // this function compares the username if it already exists
  var rows = data_table.getElementsByTagName("tr");
  console.log("length is " + rows.length);
  for (let i = 0; rows.length > i; i++) {
    var cells = rows[i].getElementsByTagName("td")[0];
    if (cells.textContent === username) {
      var row = i;
      return row;
    } else {
      var row = -1; // if user name is not matched is return -1
    }
  }
  return row;
}
