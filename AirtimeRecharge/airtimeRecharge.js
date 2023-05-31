let naira = document.getElementById("naira");
let payBtn = document.getElementById("pay-btn");
let inputAmount = document.getElementById("input-amount");
let loader = document.getElementById("loader");
let loader2 = document.getElementById("loader2");
let confirmationPage = document.getElementById("confirmation");
let enterPinPage = document.getElementById("enter-pin");
let confirmBtn = document.getElementById("confirm-btn");
let selectNetwork = document.getElementById("select-network");
let phoneNumberInput = document.getElementById("enter-phone-number");

loader.style.display = "none";
loader2.style.display = "none";
payBtn.disabled = true;

//getting the currently logged in user details from the local storage
let currentUser = JSON.parse(localStorage.getItem('CU'));

//getting all the registered users details from the local storage
let allBankEaseUser = JSON.parse(localStorage.getItem('customers'));

//getting the index of the currently logged in user from all registered user storage
let currentUserIndex = allBankEaseUser.findIndex(user => user.accountNumber == currentUser.accountNumber);

//displaying the '₦' none
naira.style.display = "none"

//onfocus function that shows the naira symbol when the input is focused
function showNaira() {
    naira.style.display = "block";
}

//displaying the user current balance on the airtime recharge confirmation page 
document.getElementById("show-balance").innerHTML = currentUser.accountBalance.toLocaleString();

function globalRechargeAirtime(inputType) {
    if (phoneNumberInput.value == "") {
        alert("Enter the Phone number you want to recharge");
    } else if (selectNetwork.value == "") {
        alert("Please select a network");
    }
    else {
        loader.style.display = "block"
        document.getElementById("show-recharge-amount").innerHTML = inputType;
        document.getElementById("display-recharge-amount").innerHTML = inputType;
        document.getElementById("show-selected-network").innerHTML = selectNetwork.value;
        document.getElementById("show-cashback-amount").innerHTML = Number(0.02 * inputType);
        setTimeout(() => {
            loader.style.display = "none"
            confirmationPage.style.display = "block";
        }, 2000);        
    }
}

//the pay button gets the amount to be recharged and open the confirmation div
payBtn.addEventListener('click', function () {
    //calling the global function for recharge
    globalRechargeAirtime(inputAmount.value);
})

//this function also proceed to the confirmation page for recharge on click on any of the amount
function clickToRecharge(amount) {
    //calling the global function for recharge
    globalRechargeAirtime(amount);
}

//this is an onclick function that opens the div where the user is been asked to cancel or continue with the recharge
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

//the confirm button function navigates the user to where the transaction pin will be supplied
confirmBtn.addEventListener('click', () => {
    loader2.style.display = "block";
    setTimeout(() => {
        loader2.style.display = "none";
        enterPinPage.style.display = "block";
        confirmationPage.style.display = "none";
        document.getElementById("pin1").focus();
    }, 2000);
})

//the cancel-payment button takes the user back to the airtime main page onclick of the button
document.getElementById("cancel-payment-btn").addEventListener('click', ()=>{
    document.getElementById("cancel-notification-div").style.visibility = "hidden";
    confirmationPage.style.display = "none";
})

//the continue-payment button takes the user back to the div where he can continue with the recharge
document.getElementById("continue-to-payment").addEventListener('click', ()=>{
    document.getElementById("cancel-notification-div").style.visibility = "hidden";
})

//closing the enter pin div
function gotoConfirmationDiv() {
    enterPinPage.style.display = "none";
}

function moveToNext(currentInput, nextInputId) {
    var inputValue = currentInput.value;

    if (inputValue.length === 1) {
        document.getElementById(nextInputId).focus();
    }
}

function verifyRecharge() {
    let pinDigits = '';
    let pinInputs = document.querySelectorAll('input[type="password"]');
  
    for (let i = 0; i < pinInputs.length; i++) {
      if (pinInputs[i].value === '') {
        // Empty field found, display an error message or handle the validation failure
        alert('Please fill in all PIN digits');
        return;
      }
      pinDigits += pinInputs[i].value;
    }
    
    if (currentUser.transactionPin == pinDigits) {
        //a successful pin

        //creating instant of Date() class
        const date = new Date();

        const options = {
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            hour12: true
        };

        //formatting the date to this format May 28 at 12:50 PM
        const formattedDate = date.toLocaleString('en-US', options);

        let airtimeRechargedData = {
            transactionType: "Airtime",
            rechargedNumber: phoneNumberInput.value,
            transactionTime: formattedDate,
            transactionYear: date.getFullYear(),
            rechargedAmount: inputAmount.value
        }

        //pushing the transaction details (airtimeRechargedData) into the current user transactHistory field
        currentUser.transactionHistory.push(airtimeRechargedData)

        console.log(currentUser.transactionHistory);

        //deducting the recharge amount from the current user account balance
        currentUser.accountBalance -= inputAmount.value;

        //updating the current user accountbalance on the all registered user local storage using the currentUserIndex
        allBankEaseUser[currentUserIndex].accountBalance =  currentUser.accountBalance;
        console.log("current user new balance: "+allBankEaseUser[currentUserIndex].accountBalance);

        console.log("yes");
    } else {
        //a wrong pin is entered
        alert("Invalid Transaction Pin")

        //clearing all the input fields
        for (let i = 0; i < pinInputs.length; i++) {
            pinInputs[i].value = '';
        }
        document.getElementById("pin1").focus();
    }
    // bankEaseCustomer[bankEaseCustomer.length-1].transactionPin = pinDigits;
  
    // All PIN digits are filled, proceed with further actions
    console.log('PIN entered:', pinDigits);
    
}