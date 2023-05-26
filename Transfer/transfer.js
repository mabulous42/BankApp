let enterWithKeyPad = document.getElementById("enter-amount");
let bankEnterWithKeyPad = document.getElementById("enter-amount-for-bank");
let displayOtherBankAmount = document.getElementById("otherBank-transfer-amount");
let confirmPage = document.getElementById("confirmation-page");

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

//getting the id of the screen that displays the transfer amount
let transferAmount = document.getElementById("transfer-amount");

 
//global function that displays number(parameter) on the screen
function generalDisplay(num, displayTag) {
    displayTag.innerHTML += num
    let formattedNum = displayTag.innerHTML;
    addCommasToNumber(formattedNum)
    displayTag.innerHTML = formattedNum; 
    console.log(addCommasToNumber(formattedNum));
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
    confirmPage.style.display = "block";
    setTimeout(() => {
        confirmPage.style.bottom = "0px";        
    }, 250);
}

//this function returns the user back to the transfer page 
function goBack() {
    confirmPage.style.display = "none";
}