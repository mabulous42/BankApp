
//this function navigates from getstarted page to signin page
function gotoSignInPage() {
    window.location.href = "./SignIn/signin.html";
}

setTimeout(() => {
    document.getElementById("image-div-1").style.top = "10rem";
    setTimeout(() => {        
        document.getElementById("image-div-1").style.opacity = "0";
        document.getElementById("image-div-1").style.visibility = "hidden";
    }, 1000);
}, 1000);

setTimeout(() => {
    document.getElementById("bankease-img").style.visibility = "visible";
}, 2400);

setTimeout(() => {
    document.getElementById("banking-made").style.visibility = "visible";
    document.getElementById("banking-made").style.top = "31.8rem";
}, 4500);

setTimeout(() => {
    document.getElementById("main").style.right = "0";
}, 7500);