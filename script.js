//your JS code here. If required.
let fName = document.getElementById("fName");
let lName = document.getElementById("lName");
let pNumber =  document.getElementById("pNumber");
let email = document.getElementById("email");


function showAlert()
{
    alert(`First Name: ${fName.value} Last Name: ${lName.value} Phone Number: ${pNumber.value} Email ID: ${email.value}`);
}