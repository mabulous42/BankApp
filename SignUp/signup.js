let signUpBtn = document.getElementById("signUp-btn");
let check = document.getElementById("check-box");
let passwordInput = document.getElementById("password");
let confirmPasswordInput = document.getElementById("confirm-password");
let signUpText = document.getElementById("sign-up-id");
let hidePass = document.getElementById("hide-pass");
let showPass = document.getElementById("show-pass");
let hideConfirmPass = document.getElementById("hide-cPass");
let showConfirmPass = document.getElementById("show-cPass");
let firstName = document.getElementById("fname");
let lastName = document.getElementById("lname");
let emailInput = document.getElementById("email-input");
let phoneNumber = document.getElementById("phone-input");

hidePass.style.display = "none";
hideConfirmPass.style.display = "none";

//this function navigates from the signup page to signin page
function gotoSignIn() {
    window.location.href = "../SignIn/signin.html";
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

//toggling between show and hide password function
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

//toggling between show and hide password function
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

//toggling between show and hide confirm password function
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

//toggling between show and hide confirm password function
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

//fetching the details of refistered users/customers from the local storage
let bankEaseCustomers = JSON.parse(localStorage.getItem('customers')) || [];

//registering a new user
signUpBtn.addEventListener("click", (ev)=> {
    ev.preventDefault();

    let data = {
        firstName: firstName.value,
        lastName: lastName.value,
        email: emailInput.value,
        phoneNumber: phoneNumber.value,
        password: passwordInput.value
    }

    if (passwordInput.value.trim() === "") {
        alert("Please fill in the input field.");
    } else {
        // Proceed with the desired action
        bankEaseCustomers.push(data);
        localStorage.setItem('customers', JSON.stringify(bankEaseCustomers));
        console.log(bankEaseCustomers);
        window.location.href = "../Generating/generating.html";
    }
})
