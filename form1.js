var selectRow= null;
function onFormSubmit(){
    event.preventDefault();
    var formData = readFormData();
    if(selectRow === null){
        insertNewRecord(formData);
    }
}

function readFormData(){
    var formData ={};
    formData["fname"] = document.getElementById("fname").value;
    formData["lname"] = document.getElementById("lname").value;
    formData["Address"] = document.getElementById("Address").value;
    formData["state"] = document.getElementById("state").value;
    formData["Country"] = document.getElementById("Country").value;
    formData["pcode"] = document.getElementById("pcode").value;
    formData["gender"] = document.getElementsByName("gender")[0].value;
    formData["food"] = document.getElementsByName("food")[0].value;
    return formData;
}

function insertNewRecord(data){
    var table = document.getElementById("storedata").getElementsByTagName("tbody")[0];
    var newrow = table.insertRow(table.length);
    var fname = newrow.insertCell(0);
     fname.innerHTML = data.fname;
    var lname = newrow.insertCell(1);
     lname.innerHTML = data.lname;
    var Address = newrow.insertCell(2);
     Address.innerHTML = data.Address;
    var state = newrow.insertCell(3);
     state.innerHTML = data.state;
    var country = newrow.insertCell(4);
     country.innerHTML = data.Country;
    var pcode = newrow.insertCell(5);
     pcode.innerHTML = data.pcode;
    var gender = newrow.insertCell(6);
     gender.innerHTML = data.gender;
    var food = newrow.insertCell(7);
     food.innerHTML = data.food;
}

function onlyNumber(val) {
    var ASCIICode = (val.which) ? val.which : val.keyCode;
    if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
        return false;
    return true;
}