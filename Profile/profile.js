let currentUser = JSON.parse(localStorage.getItem('CU'));

document.getElementById("display-name").innerHTML = currentUser.firstName + " " + currentUser.lastName

//the function navigates the user to the dashboard page
function gotoDashboard() {
    window.location.href = "../Dashboard/dashboard.html";
}

//sign out function
function signOut() {
    localStorage.removeItem('CU');
    setTimeout(() => {
        window.location.href = "../Signin/signin.html";
    }, 2000);
}