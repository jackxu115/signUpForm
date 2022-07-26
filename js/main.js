const password = document.querySelector("#password")
const confirmPassword = document.querySelector("#confirm_password")

confirmPassword.addEventListener('input', () => {
    console.log(password.value, confirmPassword.value)
    if (password.value !== confirmPassword.value) {
        password.setCustomValidity("Password do not match")
        confirmPassword.reportValidity()
    } else {
        password.setCustomValidity("")
    }
})
