const password = document.querySelector("#password")
const confirmPassword = document.querySelector("#confirm_password")
const submitBtn = document.querySelector("#submitButton")
const input = document.querySelectorAll(".input")

// password match
const passwordMatch = () => {
    console.log(password.value, confirmPassword.value)
    if (password.value !== confirmPassword.value) {
        confirmPassword.setCustomValidity("Password do not match")
        // password.style.border = "#e40c3b 3px solid"
    } else {
        confirmPassword.setCustomValidity("")
    }
}

// check form validation after click button to submit the form
submitBtn.addEventListener('click', () => {
    input.forEach(event => {
        console.log(event.reportValidity())
        if (event.reportValidity() === false) {
            event.style.border = "#e40c2b 3px solid"
        } else {
            event.style.border = "#000000 1px solid"
        }
    })
    changBorderColor()
    passwordMatch()
})


// change border color of input when focusin
const changBorderColor = () => {
    input.forEach(event => {
        event.addEventListener('focus', () => {
            event.style.border = "#000000 3px solid"
        })
    })
    input.forEach(event => {
        event.addEventListener('keyup', () => {
            event.style.border = "#000000 1px solid"
        })
    })
}