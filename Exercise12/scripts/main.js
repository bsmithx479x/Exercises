function update() {
    /* ===================
        Your code starts here
    =====================*/
    var errorList = getElm("error-list");
    errorList.innerHTML = "";
    
    //Create new array.
    var messages = [];
    //If first name is empty. Add it to the array
    var firstName = getValue("firstName");
    var lastName = getValue("lastName");
    var email = getValue("emailAddress");

    if(firstName == ""){
        messages.push("First Name is required")
        
    };

    //If last name is empty. Add it to the array
    if(lastName === "") {
        messages.push("Last Name is required")
        
    };


    //Email is empty. Add it to the array
    if(email === "") {
        messages.push("Email is required")
        
    };

    console.log(messages);
    //Loop through array
    for(i = 0; i < messages.length; i++) {
        errorList.innerHTML += messages[i] + " ";
    }
    //Create javascript object for the user
    var user = {
    firstName: firstName,
    lastName: lastName,
    email: emailAddress,
    fullName: function() {
        return this.firstName + " " + lastName;
    }
    };
    

    //log the user object to the console
    console.log(user);

    //Check to see if everything is valid
    if(messages.length === 0) {
        
    
    //Create string for today's date. Remember, if you hard code this, it will be invalid tomorrow.
    var date = new Date();
    var submittedDate = date.toDateString();
    console.log(submittedDate);

    //Make the alert box.
    alert(`Submitted on ${submittedDate}`);
    };

    /* ===================
        Your code ends here
    =====================*/


}



var btn = document.getElementById('btnUpdate');
btn.addEventListener('click', update);

function getValue(id) {
    return getElm(id).value;
}

function getElm(id) {
    return document.getElementById(id);
}