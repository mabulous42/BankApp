let enterWithKeyPad = document.getElementById("enter-amount");
let bankEnterWithKeyPad = document.getElementById("enter-amount-for-bank");
let displayOtherBankAmount = document.getElementById("otherBank-transfer-amount");
let confirmPage = document.getElementById("confirmation-page");

let allBankEaseUser = JSON.parse(localStorage.getItem("customers"));
let currentCustomer = JSON.parse(localStorage.getItem('CU'));
let recipient = JSON.parse(localStorage.getItem('beneficiary'));

console.log(currentCustomer);

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

//disbling the confirm transfer button to make sure the amount is atleast 100 before proceeding with the transaction
transferButton.disabled = true;

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

    let enteredAmount = (displayTag.innerHTML)
    console.log(enteredAmount);
    //checking to make sure that transfer amount is 100 and above which is 3 digits and above
    if (transferAmount.innerHTML.length >= 3) {
        transferButton.disabled = false            
    } else {
        transferButton.disabled = true;
    }


}


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
function addCommasToNumber(num) {
    const parts = num.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
}


//this function pops out the confirmation page for the user to confirm if he/she actually wants to proceed with the transction
function gotoConfirmationPage() {
    let recipient = JSON.parse(localStorage.getItem('beneficiary'));
    console.log(recipient);
    if (verificationDisplayFound.style.display == "none") {
        alert("Please enter the beneficiary account")
    } else {
        confirmPage.style.display = "block";
    setTimeout(() => {
        confirmPage.style.bottom = "0px";
    }, 250);
    console.log(transferAmount.innerHTML);
    //displaying the transfer amount
    amountTag.innerHTML = Number(transferAmount.innerHTML).toLocaleString();

    //displaying the beneficiary account name
    accountDetailsTag.innerHTML = recipient.firstName + " " + recipient.lastName;
    }
    
}

//this function returns the user back to the transfer page 
function goBack() {
    // localStorage.removeItem('beneficiary');
    confirmPage.style.display = "none";
}

let firstPinInput = document.getElementById("passDigit1");
let transactionPinPage = document.getElementById('enter-transaction-pin');
function gotoEnterTransferPin() {
    transactionPinPage.style.display = "block";
    firstPinInput.focus();
    setTimeout(() => {
        transactionPinPage.style.bottom = "0px";
    }, 250);
}


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

    //getting the beneficiary details by searcining with the beneficiary account number
    let foundBeneficiary = allBankEaseUser.find(user => user.accountNumber == beneficiaryAccount);
    console.log(foundBeneficiary);

    //passing the beneficiary first name and last name inside a variable
    let beneficiaryName = foundBeneficiary.firstName + " " + foundBeneficiary.lastName;
    console.log(beneficiaryName);

    //passing the current customer first name and last name inside a variable
    let currentCustomerName = currentCustomer.firstName + " " + currentCustomer.lastName;
    console.log(currentCustomerName);

    //findind the index of the currentCustomer from the allBankEaseUser local storage
    let currentCustomerIndex = allBankEaseUser.findIndex(user => user.accountNumber == currentCustomer.accountNumber)
    console.log(currentCustomerIndex);

    //finding the index of the recipient from the allBankEaseUser local storage
    let recipientIndex = allBankEaseUser.findIndex(user => user.accountNumber == foundBeneficiary.accountNumber)
    console.log(recipientIndex);


    // All PIN digits are filled, proceed with further actions
    console.log('PIN entered:', pinDigits);
    if (currentCustomer.transactionPin == pinDigits) {
        //transaction is successful

        if (currentCustomer.accountBalance < transferAmount.innerHTML) {
            document.getElementById("loader").style.display = "block";
            setTimeout(() => {
                document.getElementById("loader").style.display = "none";
            }, 2000);
            setTimeout(() => {
                alert("Insufficient Fund");
                for (let i = 0; i < pinInputs.length; i++) {
                    pinInputs[i].value = '';
                }
            }, 2500);
        } else {
            //getting the currentCustomer account balance after a successful transaction
            currentCustomer.accountBalance -= transferAmount.innerHTML;
            console.log("currentUser accountBalance: " + currentCustomer.accountBalance);

            //getting the recipient account balance after a successful transaction
            foundBeneficiary.accountBalance += Number(transferAmount.innerHTML);
            console.log("beneficiary accountBalance: " + foundBeneficiary.accountBalance);

            //updating the currentCustomer account balance after a successful transaction
            allBankEaseUser[currentCustomerIndex].accountBalance = currentCustomer.accountBalance;

            //updating the recipient account balance after a successful transaction
            allBankEaseUser[recipientIndex].accountBalance = foundBeneficiary.accountBalance;

            localStorage.removeItem('beneficiary');

            document.getElementById("loader").style.display = "block";
            setTimeout(() => {
                document.getElementById("loader").style.display = "none";
                document.getElementById('successful-div').style.display = "block";
            }, 2000);

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

            console.log(formattedDate);

            //pushing some of the transaction data to transactionHistory local storage
            let moneySentData = {
                transactionType: "Money Sent",
                accountName: beneficiaryName,
                transactionTime: formattedDate,
                transactionYear: date.getFullYear(),
                transferAmount: transferAmount.innerHTML
            }

            let moneyReceivedData = {
                transactionType: "Money Received",
                accountName: currentCustomerName,
                transactionTime: formattedDate,
                transactionYear: date.getFullYear(),
                transferAmount: transferAmount.innerHTML
            }

            //pushing the transaction data of the money sent into the currentCustomer transactionHistory field after a successful transaction
            allBankEaseUser[currentCustomerIndex].transactionHistory.push(moneySentData);

            //updating the current user transactionHistory by pushing the data of the money sent into the currentCustomer transactionHistory field after a successful transaction
            currentCustomer.transactionHistory.push(moneySentData);

            //pushing the transaction data of the money received into the beneficiary transactionHistory field after a successful transaction
            allBankEaseUser[recipientIndex].transactionHistory.push(moneyReceivedData);

            //updating the current user details in the local storage
            localStorage.setItem('CU', JSON.stringify(currentCustomer));

            //updating all the bankEase users details in the local storage
            localStorage.setItem('customers', JSON.stringify(allBankEaseUser));

        }

    } else {
        alert("Invalid Transaction Pin")
        for (let i = 0; i < pinInputs.length; i++) {
            pinInputs[i].value = '';
        }
    }
}

// document.getElementById("passDigit4").addEventListener('input', () => {

// })