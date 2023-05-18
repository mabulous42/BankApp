let signUpBtn = document.getElementById("signUp-btn");
let check = document.getElementById("check-box");
let passwordInput = document.getElementById("password");
let confirmPasswordInput = document.getElementById("confirm-password");
let signUpText = document.getElementById("sign-up-id");
let hidePass = document.getElementById("hide-pass");
let showPass = document.getElementById("show-pass");
let hideConfirmPass = document.getElementById("hide-cPass");
let showConfirmPass = document.getElementById("show-cPass");

hidePass.style.display = "none";
hideConfirmPass.style.display = "none";

//this function navigates from the signup page to signin page
function gotoSignIn() {
    window.location.href = "../signin.html";
}

//this function checks if the check box is checked or not and then triggers the button state from disabled to enabled and vice versa
function checkBox() {
    if (check.checked == true) {
        signUpBtn.disabled = false;
        signUpBtn.style.background = "rgba(0, 168, 89, 1)";
        signUpText.style.color = "white";
    } else {
        signUpBtn.disabled = true;
        signUpBtn.style.background = "rgba(217, 217, 217, 1)";
        signUpText.style.color = "black";
    }
}

function showPassword() {
    if (passwordInput.type == "password") {
        passwordInput.type = "text";
        hidePass.style.display = "block";
        showPass.style.display = "none";
    } else {
        passwordInput.type = "password";
        hidePass.style.display = "none";
        showPass.style.display = "block";
    }
}

function hidePassword() {
    if (passwordInput.type == "text") {
        passwordInput.type = "password";
        hidePass.style.display = "none";
        showPass.style.display = "block";
    } else {
        passwordInput.type = "text";
        hidePass.style.display = "block";
        showPass.style.display = "none";
    }
}

function showConfirmPassword() {
    if (confirmPasswordInput.type == "password") {
        confirmPasswordInput.type = "text";
        hideConfirmPass.style.display = "block";
        showConfirmPass.style.display = "none";
    } else {
        confirmPasswordInput.type = "password";
        hideConfirmPass.style.display = "none";
        showConfirmPass.style.display = "block";
    }
}

function hideConfirmPassword() {
    if (confirmPasswordInput.type == "text") {
        confirmPasswordInput.type = "password";
        hideConfirmPass.style.display = "none";
        showConfirmPass.style.display = "block";
    } else {
        confirmPasswordInput.type = "text";
        hideConfirmPass.style.display = "block";
        showConfirmPass.style.display = "none";
    }
}

