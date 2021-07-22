const errorDiv = document.getElementById("errorMsg");
const form = document.getElementById("form");
const nameField = document.getElementById("name");
const passwordField = document.getElementById("password");

form.addEventListener("submit" , (e)=>{
    e.preventDefault();
    let messages = [];
    if(nameField.value === "" || nameField.value === null){
        messages.push("Please enter your name");
    }
    if(passwordField.value === "" ||passwordField.value === null){
        messages.push("Please enter a password");
    }
    if(passwordField.value.length>6 && passwordField.value.length>15){
        messages.push("Please enter a valid password")
    }
    if(passwordField.value === "password"){
        messages.push(`Password cannot be "password"`);
    }
    errorDiv.innerHTML = messages.join(", ");
});