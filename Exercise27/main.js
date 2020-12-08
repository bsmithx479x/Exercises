/*
    Exercise 27 
*/
$(document).ready(function () {
    /*=======================
        Regular Expressions 
     =======================*/


    $('#btnvalidate').click(function () {
        /*=======================
           RegExp functionality 
         =======================*/
        var email = document.getElementById("email");

        var patt = new RegExp(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/i);
        var res = patt.test(email.value);


        (res === true) ? console.log("valid"):  email.classList.add("is-invalid");
        
        ;

    });


    /*=======================
      Array Methods 
    =======================*/
    var myArray = [1, 2, 3, 4];

    var squared = myArray.map(function (element, index, array) {
        return Math.pow(element, 2);
    });

    console.log(squared);
});