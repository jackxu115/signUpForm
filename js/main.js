const password = document.querySelector("#password")
const confirmPassword = document.querySelector("#confirm_password")
const submitBtn = document.querySelector("#submitButton")
const input = document.querySelectorAll(".input")

confirmPassword.addEventListener('input', () => {
    console.log(password.value, confirmPassword.value)
    if (password.value !== confirmPassword.value) {
        password.setCustomValidity("Password do not match")
        confirmPassword.reportValidity()
    } else {
        password.setCustomValidity("")
    }
})

submitBtn.addEventListener('click', () => {
    input.forEach(event => {
        if(event.reportValidity() === false) {
            event.style.border = "#e40c2b 3px solid"
        } else {
            event.style.border = "#000000 1px solid"
        }
    })
})

input.forEach(event => {
    event.addEventListener('input', () => {
        event.style.border = "#000000 1px solid"
    })
})

