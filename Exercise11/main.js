var arrayItems = [];

function update() {
    //////////////////////Your Code Starts here


    ///Part 1
    var firstName = getValue('firstName');
    var lastName = getValue('lastName');
    console.log(firstName);
    console.log(lastName);

    p1_fullName = firstName + " " + lastName;
    var p1_valid;
    if (firstName || lastName === ""){
        p1_valid = true;
    } else {
        p1_valid = false;
    }

    var p1_fullNameLength = firstName.length + lastName.length;

    getElm("p1_valid").innerHTML = p1_valid;
    getElm("p1_fullName").innerHTML = p1_fullName;
    getElm("p1_fullNameLength").innerHTML = p1_fullNameLength;


    // Part 2
    var emailAddress = getValue('emailAddress');
    console.log(emailAddress);

    var p2_email = emailAddress;
    var p2_valid;
    if (emailAddress.indexOf("@" ) > -1) {
        p2_valid = true;
        
    } else {
        p2_valid = false;  
    }

    var p2_emailLength = emailAddress.length;
    
    getElm("p2_email").innerHTML = p2_email;
    getElm("p2_valid").innerHTML = p2_valid;
    getElm("p2_emailLength").innerHTML = p2_emailLength;

    // Part 3
    var randomNumber = getValue('randomNumber');
    console.log(randomNumber);

    var p3_number = randomNumber;
    var p3_valid;
    
    if(isNaN(p3_number)){
        p3_valid = false;
    } else {
        p3_valid = true;
    }

    getElm("p3_number").innerHTML = p3_number;
    getElm("p3_valid").innerHTML = p3_valid;


    // Part 4
    var arrayInput = getValue('arrayValue');
    console.log(arrayInput);

    
    arrayItems.push(arrayInput);
    var arraylength = arrayItems.length;
    var p4_valid;

    getElm("p4_arraylength").innerHTML = arraylength;
    getElm("p4_valid").innerHTML = arrayItems;





    ////////////////////////Your code ends here.

}


////
var btn = document.getElementById('btnUpdate');
btn.addEventListener('click', update);

function getValue(id) {
    return getElm(id).value;
}

function getElm(id) {
    return document.getElementById(id);
}