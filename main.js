var today = new Date();
var day = String(today.getDate()).padStart(2, '0');
var month = String(today.getMonth() + 1).padStart(2, '0'); 
var hours = today.getHours()
var minutes = String(today.getMinutes() + 1).padStart(2, '0'); 
var datum = today.getFullYear()+'-'+month+'-'+day

var dateInput = document.querySelector("input[type='date']")
dateInput.setAttribute("min",datum)
var timeInput = document.querySelector("input[type='time']")
timeInput.setAttribute("min",(hours+1) + ':' + minutes)

var submitButton = document.querySelector('#submit')
var emailError = document.querySelector('#email-error')
submitButton.addEventListener("click",ValidateEmail)

function ValidateEmail(emailInput)
{
    emailInput = document.querySelector('#email').value
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(emailInput.match(mailformat)){
        //kiiratni az adatokat
    }else{
        emailError.innerHTML="Wrong email format";
        return false;
    }
}

