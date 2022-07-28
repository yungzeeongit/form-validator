// Code Starts Here..
const form = document.querySelector('#form')
const message = document.querySelector('#message')
 const password1 = document.querySelector('#password1')
 const password2 = document.querySelector('#password2')



let isValid = false
function validateForm() {
let isValid = form.checkValidity()
let passwordMAtch = false
if(!isValid){
    message.textContent = 'Please fill out all fields'
//  message.style.display= 'block'
    message.style.color = 'red'
}else{
    if(password1.value === password2.value) {
        passwordMAtch = true

        password1.style.borderColor = "green"
        password2.style.borderColor = "green"
   }
   else{passwordMAtch = false
    message.textContent = 'Make sure passwords match'
    message.style.color = 'red'

    password1.style.borderColor = "red"
    password2.style.borderColor = "red"
    return
}if (isValid && passwordMAtch) {
    message.textContent = 'Registration Successful!'
    message.style.color = 'green'
}
}



}


form.addEventListener("submit", (e) => {
    e.preventDefault()
    validateForm()
}

)
//first call the form id, then add the eventlistner
// craete the validate form function, and use checkValidity to check the validation
//call the function
//call the message id,
//pass the if statement
// use message.textContent to change the error message and style.color to change the color of the error message 
// 