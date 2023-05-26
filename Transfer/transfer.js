let enterWithKeyPad = document.getElementById("enter-amount");
function gotoDashboard() {
    window.location.href = "../Dashboard/dashboard.html";
}

function showTransferToBankEase() {
    document.getElementById("bankEaseTransfer").style.right = "0px";
}

function gotoTransfer() {
    window.location.href = "transfer.html";
}

let transferAmount = document.getElementById("transfer-amount");
// let amount = 1000000;
// transferAmount.innerHTML = amount.toLocaleString();
// transferAmount.innerHTML.toLocaleString();

function displayNumber(num) {
    enterWithKeyPad.style.display = "none";
    transferAmount.innerHTML += Number(num);
    let amount = transferAmount.innerHTML;
    console.log(amount.toLocaleString());
    let finalAmount = amount.substring(0,amount.length).toLocaleString();
    console.log("final amount"+ finalAmount);
    // transferAmount.innerHTML = amount.toLocaleString();
    // transferAmount.innerHTML.toLocaleString();
}

function del() {
    let display = transferAmount.innerHTML;
    transferAmount.innerHTML = display.slice(0,transferAmount.innerHTML.length-1);
}