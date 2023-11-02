document.getElementById('myForm').onsubmit = function(event) {
    event.preventDefault(); 
    
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var address = document.getElementById('address').value;
    var pincode = document.getElementById('pincode').value;
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var food = Array.from(document.getElementById('food').selectedOptions).map(option => option.value).join(', ');
    var state = document.getElementById('state').value;
    var country = document.getElementById('country').value;
    
    var table = document.getElementById('dataTable').getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.rows.length);
    var cells = [firstName, lastName, address, pincode, gender, food, state, country];

    for (var i = 0; i < cells.length; i++) {
        var cell = newRow.insertCell(i);
        cell.appendChild(document.createTextNode(cells[i]));
    }
    
    document.getElementById('myForm').reset();
};
