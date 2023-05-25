
//getting the currently logged in customer from the local storage
let currentUser = JSON.parse(localStorage.getItem('CU'));
console.log(currentUser);

if (!currentUser) {
    window.location.href = "../Signin/signin.html";
}

console.log(!currentUser);

//passing the current user first name to variable customerName
let customerName = currentUser.firstName;
console.log(customerName);

//displaying the current customer first name on the dashboard
document.getElementById("customer-name").innerHTML = customerName;

//passing the current customer account balance into a variable
let accountBalance = currentUser.accountBalance.toLocaleString();

//displaying the current customer account balance on the dashboard
document.getElementById("balance").innerHTML = accountBalance;

//displaying the current customer account number
document.getElementById("bankEase-account").innerHTML = currentUser.accountNumber;

let displayBalance = document.getElementById("show-bal");
let hide_Balance = document.getElementById("hide-bal");
let currentBalance = document.getElementById("current-balance");
let hideCurrentBalance = document.getElementById("hide-current-balance");

displayBalance.style.display = 'none';
hideCurrentBalance.style.display = "none";

function hideAndShowBalance() {
    if (currentUser.isHide == true) {
        hideCurrentBalance.style.display = "block";
        currentBalance.style.display = "none";
        displayBalance.style.display = "block";
        hide_Balance.style.display = "none";
    } else {
        hideCurrentBalance.style.display = "none";
        currentBalance.style.display = "block";
        displayBalance.style.display = "none";
        hide_Balance.style.display = "block";
    }
}
hideAndShowBalance();

function showBalance() {
    if (displayBalance.style.display == "none") {
        displayBalance.style.display = "block";
        hide_Balance.style.display = "none";
        currentBalance.style.display = "none";
        hideCurrentBalance.style.display = "block";
    } else {
        hide_Balance.style.display = "block";
        currentBalance.style.display = "block";
        hideCurrentBalance.style.display = "none";
        displayBalance.style.display = "none";
    }
    currentUser.isHide = true;
    hideAndShowBalance();
    localStorage.setItem("CU", JSON.stringify(currentUser));
    console.log(currentUser);
}

function hideBalance() {
    if (displayBalance.style.display == "block") {
        displayBalance.style.display = "none";
        hide_Balance.style.display = "block";
        currentBalance.style.display = "block";
        hideCurrentBalance.style.display = "none";
    } else {
        hide_Balance.style.display = "none";
        currentBalance.style.display = "none";
        hideCurrentBalance.style.display = "block";
        displayBalance.style.display = "block";
    }
    currentUser.isHide = false;
    hideAndShowBalance();
    localStorage.setItem("CU", JSON.stringify(currentUser));
    console.log(currentUser);
}




function signOut() {
    localStorage.removeItem('CU');
    setTimeout(() => {
        window.location.href = "../Signin/signin.html";
    }, 2000);
}