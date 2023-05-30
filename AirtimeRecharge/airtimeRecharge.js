let naira = document.getElementById("naira");
let payBtn = document.getElementById("pay-btn");
let inputAmount = document.getElementById("input-amount");
let loader = document.getElementById("loader");
let loader2 = document.getElementById("loader2");
let confirmationPage = document.getElementById("confirmation");
let enterPinPage = document.getElementById("enter-pin");
let confirmBtn = document.getElementById("confirm-btn");
let placeHolder = inputAmount.placeholder;

loader.style.display = "none";
loader2.style.display = "none";
payBtn.disabled = true;

let currentUser = JSON.parse(localStorage.getItem('CU'));
let allBankEaseUser = JSON.parse(localStorage.getItem('customers'));

let currentUserIndex = allBankEaseUser.findIndex(user => user.accountNumber == currentUser.accountNumber);


naira.style.display = "none"

//onfocus function that shows the naira symbol when the input is focused
function showNaira() {
    naira.style.display = "block";
}

let rechargeAount;

//the pay button gets the amount to be recharged and open the confirmation div
payBtn.addEventListener('click', function () {
    loader.style.display = "block"
    setTimeout(() => {
        loader.style.display = "none"
        confirmationPage.style.display = "block";
    }, 2000);
})

function openCancelOrContinuePaymentDiv() {
    document.getElementById("cancel-notification-div").style.visibility = "visible";
}

//an input eventlistener function that checks if the input is not empty for the pay button to be active and also check to make sure the amount to be recharged is within 50 - 5000
inputAmount.addEventListener('input', () => {
    if (inputAmount.value.length != "") {
        if (inputAmount.value >= 50 && inputAmount.value <= 5000) {
            payBtn.style.backgroundColor = "rgba(0, 168, 89, 1)";
            payBtn.disabled = false;
        }
        else {
            payBtn.style.backgroundColor = "rgb(141, 216, 180)";
            payBtn.disabled = true;
        }
    } else {
        payBtn.style.backgroundColor = "rgb(141, 216, 180)";
        payBtn.disabled = true;
    }
})

confirmBtn.addEventListener('click', () => {
    loader2.style.display = "block";
    setTimeout(() => {
        loader2.style.display = "none";
        enterPinPage.style.display = "block";
        confirmationPage.style.display = "none";
    }, 2000);
})

document.getElementById("cancel-payment-btn").addEventListener('click', ()=>{
    document.getElementById("cancel-notification-div").style.visibility = "hidden";
    confirmationPage.style.display = "none";
})

document.getElementById("continue-to-payment").addEventListener('click', ()=>{
    document.getElementById("cancel-notification-div").style.visibility = "hidden";
})

//closing the enter pin div
function gotoConfirmationDiv() {
    enterPinPage.style.display = "none";
}