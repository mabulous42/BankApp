let enterWithKeyPad = document.getElementById("enter-amount");
let bankEnterWithKeyPad = document.getElementById("enter-amount-for-bank");
let displayOtherBankAmount = document.getElementById("otherBank-transfer-amount");
let confirmPage = document.getElementById("confirmation-page");

let allBankEaseUser = JSON.parse(localStorage.getItem("customers"));
let curentCustomer = JSON.parse(localStorage.getItem('CU'));
let recipient = JSON.parse(localStorage.getItem('beneficiary'));

console.log(curentCustomer); 

//this function takes the user back to the dashboard page
function gotoDashboard() {
    window.location.href = "../Dashboard/dashboard.html";
}

//this function navigates the user to the transfer to bankEase account page
function showTransferToBankEase() {
    document.getElementById("bankEaseTransfer").style.right = "0px";
}

//this function navigates the user to the transfer to bank account page
function showTransferToOtherBank() {
    document.getElementById("otherBankTransfer").style.right = "0px";
}

//this function navigates the user back to the transfer page
function gotoTransfer() {
    window.location.href = "transfer.html";
}

let inputBankEaseAccountNumber = document.getElementById("input-accountNumber");
let verificationDisplayNotFound = document.getElementById("display-verification-result-notfound");
let verificationDisplayFound = document.getElementById("display-verification-result-found");

let transferButton = document.getElementById("transfer-btn");
let amountTag = document.getElementById("amount-to-transfer");
let accountDetailsTag = document.getElementById("account-details");

//display none the elements
verificationDisplayFound.style.display = "none";
verificationDisplayNotFound.style.display = "none";

let beneficiaryAccount;

//this function checks if the account exist or not before proced=eding with the transaction
function verifyAccountNumber() {
    if (inputBankEaseAccountNumber.value.length == 10) {
        beneficiaryAccount = inputBankEaseAccountNumber.value;
        let beneficiary = allBankEaseUser.find(user => user.accountNumber == beneficiaryAccount);

        if (beneficiary) {
            setTimeout(() => {
                verificationDisplayFound.style.display = "block";
                verificationDisplayFound.value = beneficiary.firstName.toUpperCase() + " " + beneficiary.lastName.toUpperCase();
                localStorage.setItem('beneficiary', JSON.stringify(beneficiary));
                console.log(beneficiary);
            }, 1000);
        } else {
            setTimeout(() => {
                verificationDisplayNotFound.style.display = "block";
                verificationDisplayNotFound.value = "Account details verification failed, check the details and try again";
            }, 1000);
        }
    }
    else if (inputBankEaseAccountNumber.value.length < 10) {
        verificationDisplayFound.style.display = "none";
        verificationDisplayNotFound.style.display = "none";
    }
    else if (inputBankEaseAccountNumber.value > 10) {
        inputBankEaseAccountNumber.value = inputBankEaseAccountNumber.value.slice(0, 10);
    }
}

//getting the id of the screen that displays the transfer amount
let transferAmount = document.getElementById("transfer-amount");


//global function that displays number(parameter) on the screen
function generalDisplay(num, displayTag) {
    displayTag.innerHTML += num
    //checking to make sure that transfer amount is 100 and above which is 3 digits and above
    if (transferAmount.innerHTML.length >= 3) {
        console.log("yes");
        transferButton.disabled = false 
    } else {
        transferButton.disabled = true;
    }
}

//disbling the confirm transfer button to make sure the amount is atleast 100 before proceeding with the transaction
transferButton.disabled = true;

//displaying number(parameter) on the screen
function displayNumber(num) {
    enterWithKeyPad.style.display = "none";
    generalDisplay(num, transferAmount);
}

//displaying number(parameter) on the screen
function showNumber(num) {
    bankEnterWithKeyPad.style.display = "none";
    generalDisplay(num, displayOtherBankAmount);
}

//a global function that deletes number
function globalDelete(displayTag) {
    let display = displayTag.innerHTML;
    displayTag.innerHTML = display.slice(0, displayTag.innerHTML.length - 1);
    //checking to make sure that transfer amount is 100 and above which is 3 digits and above
    if (transferAmount.innerHTML.length >= 3) {
        console.log("yes");
        transferButton.disabled = false 
    } else {
        transferButton.disabled = true;
    }
}

//to delete a number
function del() {
    globalDelete(transferAmount);
}

//to delete a number
function delOtherBank() {
    globalDelete(displayOtherBankAmount);
}

//this function adds comma(,) to the number after each 3 digits
// function addCommasToNumber(num) {
//     const parts = num.toString().split(".");
//     parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
//     return parts.join(".");
// }


//this function pops out the confirmation page for the user to confirm if he/she actually wants to proceed with the transction
function gotoConfirmationPage() {
    let recipient = JSON.parse(localStorage.getItem('beneficiary'));
    console.log(recipient);
    confirmPage.style.display = "block";
    setTimeout(() => {
        confirmPage.style.bottom = "0px";
    }, 250);
    console.log(transferAmount.innerHTML);
    //displaying the transfer amount
    amountTag.innerHTML = transferAmount.innerHTML;

    //displaying the beneficiary account name
    accountDetailsTag.innerHTML = recipient.firstName + " " + recipient.lastName;
}

//this function returns the user back to the transfer page 
function goBack() {
    // localStorage.removeItem('beneficiary');
    confirmPage.style.display = "none";
}

let transactionPinPage = document.getElementById('enter-transaction-pin');
function gotoEnterTransferPin() {
    transactionPinPage.style.display = "block";
    setTimeout(() => {
        transactionPinPage.style.bottom = "0px";
    }, 250);
}

let firstPinInput = document.getElementById("passDigit1");

function enterPin(btn) {
    firstPinInput.focus();
    firstPinInput.value = btn;
}

function closeModal() {
    transactionPinPage.style.display = "none";
}

//this function moves the focus from the current input to the nextinput on input event
function moveToNext(currentInput, nextInputId) {
    var inputValue = currentInput.value;

    if (inputValue.length === 1) {
        document.getElementById(nextInputId).focus();
    }
    
}


//this function checks if all the inputs are filled and concatenate each input field value inside a variable
function validatesPin() {
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

    let foundBeneficiary = allBankEaseUser.find(user => user.accountNumber == beneficiaryAccount);
    console.log(foundBeneficiary);

    //findind the index of the currentCustomer from the allBankEaseUser local storage
    let currentCustomerIndex = allBankEaseUser.findIndex(user => user.accountNumber == curentCustomer.accountNumber)
    console.log(currentCustomerIndex);

    //findind the index of the recipient from the allBankEaseUser local storage
    let recipientIndex = allBankEaseUser.findIndex(user => user.accountNumber == foundBeneficiary.accountNumber)
    console.log(recipientIndex);


    // All PIN digits are filled, proceed with further actions
    console.log('PIN entered:', pinDigits);
    if (curentCustomer.transactionPin == pinDigits) {
        //transaction is successful

        //getting the currentCustomer account balance after a successful transaction
        curentCustomer.accountBalance -= transferAmount.innerHTML;
        console.log("currentUser accountBalance: "+curentCustomer.accountBalance);

        //getting the recipient account balance after a successful transaction
        foundBeneficiary.accountBalance += Number(transferAmount.innerHTML);
        console.log("beneficiary accountBalance: "+foundBeneficiary.accountBalance);


        // allBankEaseUser[currentCustomerIndex].accountNumber
        localStorage.removeItem('beneficiary');
        document.getElementById('successful-div').style.display = "block";
    } else {
        alert("Invalid Transaction Pin")
        for (let i = 0; i < pinInputs.length; i++) {
            pinInputs[i].value = '';
        }
    }
}

// document.getElementById("passDigit4").addEventListener('input', () => {

// })