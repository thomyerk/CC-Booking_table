var today = new Date();
var day = String(today.getDate()).padStart(2, '0');
var month = String(today.getMonth() + 1).padStart(2, '0'); 
var hours = today.getHours()
var minutes = String(today.getMinutes() + 1).padStart(2, '0'); 
var todaysDate = today.getFullYear()+'-'+month+'-'+day

var dateInput = document.querySelector("input[type='date']")
dateInput.setAttribute("min",todaysDate)
var timeInput = document.querySelector("input[type='time']")

if(dateInput.value == todaysDate){
    timeInput.setAttribute("min",(hours+1) + ':' + minutes)
}

var submitButton = document.querySelector('#book')
var emailError = document.querySelector('#email-error')
submitButton.addEventListener("click",ValidateEmail)
var modal = document.getElementById("myModal");

function ValidateEmail(event, emailInput)
{
    event.preventDefault()
    var bookingData = document.querySelector('#bookingData')
    emailInput = document.querySelector('#email').value
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(emailInput.match(mailformat)){
        for(let elements of form){
            console.log(elements.value)
            modal.style.display = "block";
            let row = document.createElement("p")
            row.innerHTML = elements.value
            document.getElementById("formResults").appendChild(row)
        }
    }else{
        emailError.innerHTML="Wrong email format ";
        return false;
    }
}

var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


