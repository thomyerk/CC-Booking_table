var today = new Date();
var day = String(today.getDate()).padStart(2, '0');
var month = String(today.getMonth() + 1).padStart(2, '0'); 
var hours = today.getHours()
var minutes = String(today.getMinutes() + 1).padStart(2, '0'); 
var todaysDate = today.getFullYear()+'-'+month+'-'+day

var dateInput = document.querySelector("input[type='date']")
dateInput.setAttribute("min",todaysDate)
var timeInput = document.querySelector("input[type='time']")

function dateChange(){
    if(dateInput.value == todaysDate){
        timeInput.setAttribute("min",(hours+1) + ':' + minutes)
    }
}
dateInput.addEventListener("change",dateChange)


var submitButton = document.querySelector('#book')
submitButton.addEventListener("click",ValidateEmail)
var modal = document.getElementById("myModal");
var emailError = document.querySelector('#email-error')

function ValidateEmail(event, emailInput)
{
    var nameInput = document.querySelector('#name')
    var numberInput = document.querySelector('#number')
    
    emailError.style.visibility = "hidden"
    emailInput = document.querySelector('#email').value
    let everythingIsOK = []
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(emailInput.match(mailformat)){
        emailError.style.visibility = "hidden"
        for(let elements of form){
            if(elements.validity.valid == true){
                let row = document.createElement("p")
                row.innerHTML = elements.value
                document.getElementById("formResults").appendChild(row)
                everythingIsOK.push(true)
            }else{
                everythingIsOK.push(false)
            }

        }
        if(everythingIsOK.includes(false) == false){
            console.log("Reservation for:\n" + nameInput.value + " \nemail: " + emailInput + " \nReservation date: "+ dateInput.value + " " + timeInput.value + "\nNumber of people: " + numberInput.value )
            alert("Reservation for:\n" + nameInput.value + " \nemail: " + emailInput + " \nReservation date: "+ dateInput.value + " " + timeInput.value + "\nNumber of people: " + numberInput.value )
        }
    }else{
        emailError.innerHTML = "Wrong email format!"
        emailError.style.visibility = "visible";
        return false;
    }
}