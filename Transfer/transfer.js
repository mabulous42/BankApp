let enterWithKeyPad = document.getElementById("enter-amount");
let bankEnterWithKeyPad = document.getElementById("enter-amount-for-bank");
let displayOtherBankAmount = document.getElementById("otherBank-transfer-amount");
function gotoDashboard() {
    window.location.href = "../Dashboard/dashboard.html";
}

function showTransferToBankEase() {
    document.getElementById("bankEaseTransfer").style.right = "0px";
}

function showTransferToOtherBank() {
    document.getElementById("otherBankTransfer").style.right = "0px";
}

function gotoTransfer() {
    window.location.href = "transfer.html";
}

let transferAmount = document.getElementById("transfer-amount");
// let amount = 1000000;
// transferAmount.innerHTML = amount.toLocaleString();
// transferAmount.innerHTML.toLocaleString();

function generalDisplay(num, displayTag) {
    displayTag.innerHTML += num
    let formattedNum = displayTag.innerHTML;
    addCommasToNumber(formattedNum)
    displayTag.innerHTML = formattedNum; 
    console.log(addCommasToNumber(formattedNum));
}

function displayNumber(num) {
    enterWithKeyPad.style.display = "none";
    generalDisplay(num, transferAmount);
}

function showNumber(num) {
    bankEnterWithKeyPad.style.display = "none";
    generalDisplay(num, displayOtherBankAmount);
}

function globalDelete(displayTag) {
    let display = displayTag.innerHTML;
    displayTag.innerHTML = display.slice(0, displayTag.innerHTML.length - 1);
    
}

function del() {
    globalDelete(transferAmount);
}

function delOtherBank() {
    globalDelete(displayOtherBankAmount);
    
}

function addCommasToNumber(num) {
    const parts = num.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
}