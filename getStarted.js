
//this function navigates from getstarted page to signin page
function gotoSignInPage() {
    window.location.href = "./SignIn/signin.html";
}

setTimeout(() => {
    document.getElementById("bankease-img").style.visibility = "visible";
}, 1000);

setTimeout(() => {
    document.getElementById("banking-made").style.visibility = "visible";
    document.getElementById("banking-made").style.top = "31.8rem";
}, 3000);

setTimeout(() => {
    document.getElementById("main").style.right = "0";
}, 6000);