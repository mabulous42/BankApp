let userEmail = document.getElementById('email-or-phone');
let userPassword = document.getElementById('login-password');

//this function navigates from signin page to signup page
function gotoSignUpPage() {
    window.location.href = "../SignUp/signup.html";
}

let user = JSON.parse(localStorage.getItem('customers'));

function signIn(ev) {
    ev.preventDefault();

    let authorizedUser = user.find(customer => (customer.email == userEmail.value || customer.phoneNumber == userEmail.value) && customer.password == userPassword.value);
    
    if (authorizedUser) {
        alert("Login Successful")
        console.log(authorizedUser);
    } else {
        alert("User Credentials is incorrect")
    }
}