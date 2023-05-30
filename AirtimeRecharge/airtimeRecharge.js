let naira = document.getElementById("naira");
let payBtn = document.getElementById("pay-btn");
let inputAmount = document.getElementById("input-amount");
let loader = document.getElementById("loader");
let confirmationPage = document.getElementById("confirmation");
let enterPinPage = document.getElementById("enter-pin");
let placeHolder = inputAmount.placeholder;

loader.style.display = "none";
payBtn.disabled = true;

let currentUser = JSON.parse(localStorage.getItem('CU'));
let allBankEaseUser = JSON.parse(localStorage.getItem('customers'));

let currentUserIndex = allBankEaseUser.findIndex(user => user.accountNumber == currentUser.accountNumber);


console.log(placeHolder);

naira.style.display = "none"

function showNaira() {
    naira.style.display = "block";
}

let rechargeAount;
payBtn.addEventListener('click', function () {
    console.log(inputAmount.value);
    loader.style.display = "block"
    setTimeout(() => {
        loader.style.display = "none"
    }, 2000);


})

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

function gotoConfirmationDiv() {
    confirmationPage.style.d
}