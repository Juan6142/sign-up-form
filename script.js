const password = document.querySelector(".password")
const confirmPassword = document.querySelector(".confirm-password")
const spanPass = document.querySelector(".pass")
const submit = document.querySelector(".submit-btn")



let passMatch

function testPass() {
    if (password.value === confirmPassword.value) {
        passMatch = true
        password.classList.add("pass-true")
        confirmPassword.classList.add("pass-true")
    } else {
        passMatch = false
        password.classList.add("error")
        confirmPassword.classList.add("error")
    }
    if (passMatch === true) {
        password.classList.remove("error")
        confirmPassword.classList.remove("error")
        spanPass.textContent = ""
        
    } else {
        spanPass.textContent = "*Passwords don't match"
        password.classList.remove("pass-true")
        confirmPassword.classList.remove("pass-true")
    }
}

confirmPassword.addEventListener("keyup", testPass)
password.addEventListener("keyup", testPass)