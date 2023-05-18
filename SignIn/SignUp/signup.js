let signUpBtn = document.getElementById("signUp-btn");
let check = document.getElementById("check-box");

//this function navigates from the signup page to signin page
function gotoSignIn() {
    window.location.href = "../signin.html";
}


function checkBox() {
    // signUpBtn.disabled = this.checked;
    if (check.checked == true) {
        signUpBtn.disabled = false;
        signUpBtn.style.background = "rgba(0, 168, 89, 1)";
    } else {
        signUpBtn.disabled = true;
        signUpBtn.style.background = "rgba(217, 217, 217, 1)";
    }
}

