document.getElementById("submit").addEventListener("click", submitButton);
document.getElementById("reset").addEventListener("click", reset);



function submitButton() {
    var userName = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var timeZone = document.getElementById("timeZone").value;
    var checkBox = document.getElementById("checkBox");
    let re = new RegExp(/@/);
    let res = re.test(email);
    var errorMessages = [];


    if (userName.length > 0) {
        document.getElementById("name").style.borderColor = "green";
        document.getElementById("name").style.backgroundColor = "white";
    } else {
        errorMessages.push("First Name is required");
        document.getElementById("name").style.borderColor = "red";
        document.getElementById("name").style.backgroundColor = "#ffcccb";
    }

    if (email.length > 0 && res === true) {
        document.getElementById("email").style.borderColor = "green";
        document.getElementById("email").style.backgroundColor = "white";
    } else {
        errorMessages.push("Enter a valid email address");
        document.getElementById("email").style.borderColor = "red";
        document.getElementById("email").style.backgroundColor = "#ffcccb";
    }

    if (password.length > 0) {
        document.getElementById("password").style.borderColor = "green";
        document.getElementById("password").style.backgroundColor = "white";
    } else {
        errorMessages.push("Password is required");
        document.getElementById("password").style.borderColor = "red";
        document.getElementById("password").style.backgroundColor = "#ffcccb";
    }

    if (timeZone.length === 0) {
        errorMessages.push("Select a valid time zone");
        document.getElementById("timeZone").style.borderColor = "red";
        document.getElementById("timeZone").style.backgroundColor = "#ffcccb";
    } else {
        document.getElementById("timeZone").style.backgroundColor = "white";
        document.getElementById("timeZone").style.borderColor = "green";
    }

    if (checkBox.checked === false) {
        errorMessages.push("You must accept the terms and conditions");
    } else {

    }


    var errors;
    var thanks;

    if (errorMessages.length > 0) {
        errors = '<ul class="errors"><li>' + errorMessages.join("</li><li>") + "</li></ul>";
    } else {
        errors = '<h1> Thanks for registering! </h1>';
    }
    document.getElementById("message").innerHTML = errors;
}

function reset() {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    document.getElementById("timeZone").value = "";
    document.getElementById("checkBox").checked = false;
    document.getElementById("message").innerHTML = "";
    document.getElementById("name").style.backgroundColor = "white";
    document.getElementById("email").style.backgroundColor = "white";
    document.getElementById("password").style.backgroundColor = "white";
    document.getElementById("timeZone").style.backgroundColor = "white";
    document.getElementById("name").style.borderColor = "black";
    document.getElementById("email").style.borderColor = "black";
    document.getElementById("password").style.borderColor = "black";
    document.getElementById("timeZone").style.borderColor = "black";
}