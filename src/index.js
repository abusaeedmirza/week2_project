document.getElementById("submit-data").addEventListener("click", myfunction);
function myfunction() {
  var data_table = document.getElementById("data-table");
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
