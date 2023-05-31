function gotoDashboard() {
    window.location.href = "../Dashboard/dashboard.html";
}

function signOut() {
    localStorage.removeItem('CU');
    setTimeout(() => {
        window.location.href = "../Signin/signin.html";
    }, 2000);
}