let currentUser = JSON.parse(localStorage.getItem('CU'));

let displayHistoryTag = document.getElementById("show-transaction-history");



//displaying all the transaction history
function allTransactionHistory() {
    setTimeout(() => {
        document.getElementById("loader").style.display = "none";
        currentUser.transactionHistory.forEach(element => {
            let transactionAmount = Number(element.transferAmount).toLocaleString();
            console.log(transactionAmount);
            if (element.transactionType == "Money Received") {
                displayHistoryTag.innerHTML += `
                <div class="mx-auto d-flex align-items-center justify-content-between d-history mb-2 pb-2">
                    <div class='d-flex align-items-center'>
                        <div class='me-2 t-image-g rounded-circle text-center'>
                            <img src='../images/bankeasep-1.png' / class='w-50'>
                        </div>
                        <div>
                            <div class='t-type'>${element.transactionType}</div>
                            <div class='d-flex align-items-center t-name-date'>
                                <div>${element.accountName}</div>
                                <span class='mx-1'>-</span>
                                <div>${element.transactionTime}</div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class='t-amount text-end'>+${'₦'}${transactionAmount}</div>
                        <div class='t-status'>Successful</div>
                    </div>
                </div>
                `
            } else {
                displayHistoryTag.innerHTML += `
                <div class="mx-auto d-flex align-items-center justify-content-between d-history mb-2 pb-2">
                    <div class='d-flex align-items-center'>
                        <div class='me-2 t-image rounded-circle text-center'>
                            <img src='../images/bankeasep-1.png' / class='w-50'>
                        </div>
                        <div>
                            <div class='t-type'>${element.transactionType}</div>
                            <div class='d-flex align-items-center t-name-date'>
                                <div>${element.accountName}</div>
                                <span class='mx-1'>-</span>
                                <div>${element.transactionTime}</div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class='t-amount text-end'>-${'₦'}${transactionAmount}</div>
                        <div class='t-status'>Successful</div>
                    </div>
                </div>
                `            
            }
        });
    }, 2000);


    
}

allTransactionHistory();

function gotoDashboard() {
    window.location.href = "../Dashboard/dashboard.html";
}