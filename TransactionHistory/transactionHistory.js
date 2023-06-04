let currentUser = JSON.parse(localStorage.getItem('CU'));

let displayHistoryTag = document.getElementById("show-transaction-history");



//displaying all the transaction history
function allTransactionHistory() {
    setTimeout(() => {
        document.getElementById("loader").style.display = "none";
        console.log(currentUser.transactionHistory);
        if (currentUser.transactionHistory == "") {
            displayHistoryTag.innerHTML = `
            <div class='d-flex align-items-center justify-content-center'>
                <h3>No recent transaction</h3>
            </div>
            `
        } else {
            currentUser.transactionHistory.forEach((element, index) => {
                let transactionAmount = Number(element.transferAmount).toLocaleString();
                if (element.transactionType == "Money Received") {
                    displayHistoryTag.innerHTML += `
                    <div class="mx-auto d-flex align-items-center justify-content-between d-history mb-2 pb-2" onclick='showReceipt(${index})'>
                        <div class='d-flex align-items-center'>
                            <div class='me-2 t-image-g rounded-circle text-center'>
                                <img src='../images/bankeasep-1.png' / class='w-50'>
                            </div>
                            <div>
                                <div class='t-type'>${element.transactionType}</div>
                                <div class='d-flex align-items-center t-name-date'>
                                    <div>${element.senderAccountName}</div>
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
                } else if (element.transactionType == "Money Sent") {
                    displayHistoryTag.innerHTML += `
                    <div class="mx-auto d-flex align-items-center justify-content-between d-history mb-2 pb-2" onclick='showReceipt(${index})'>
                        <div class='d-flex align-items-center'>
                            <div class='me-2 t-image rounded-circle text-center'>
                                <img src='../images/bankeasep-1.png' / class='w-50'>
                            </div>
                            <div>
                                <div class='t-type'>${element.transactionType}</div>
                                <div class='d-flex align-items-center t-name-date'>
                                    <div>${element.receipientAccountName}</div>
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
                else {
                    displayHistoryTag.innerHTML += `
                    <div class="mx-auto d-flex align-items-center justify-content-between d-history mb-2 pb-2" onclick='showReceipt(${index})'>
                    <div class='d-flex align-items-center'>
                        <div class='me-2 t-image rounded-circle text-center'>
                            <img src='../images/bankeasep-1.png' / class='w-50'>
                        </div>
                        <div>
                            <div class='t-type'>${element.transactionType}</div>
                            <div class='d-flex align-items-center t-name-date'>
                                <div>${element.rechargedNumber}</div>
                                <span class='mx-1'>-</span>
                                <div>${element.transactionTime}</div>
                            </div>
                        </div>
                        </div>
                        <div>
                            <div class='t-amount text-end'>-${'₦'}${Number(element.rechargedAmount).toLocaleString()}</div>
                            <div class='t-status'>Successful</div>
                        </div>
                    </div>
                    `
                }
            });
        }
    }, 2000);
}

allTransactionHistory();

function gotoDashboard() {
    window.location.href = "../Dashboard/dashboard.html";
}

let showReceiptTag = document.getElementById("receipt-content");
showReceiptTag.style.display = "none";

function showReceipt(index) {
    showReceiptTag.style.display = "block";
    let found = currentUser.transactionHistory[index];
    console.log(found);
    if (found.transactionType == "Money Sent" || found.transactionType == "Money Received") {
        showReceiptTag.innerHTML = `
        <div class="w-100 aa">
            <div class="receipt-header-div w-100 pb-2 mb-2" id="receipt-header">
                <div class="receipt-header mx-auto d-flex align-items-center justify-content-between py-3">
                    <div class="w-25">
                        <img src="../images/material-symbols_arrow-back-ios-new-rounded.png" alt="" class="w-25"
                            onclick="closeReceiptModal()">
                    </div>
                    <div class="w-50 text-center">
                        <h5 class="mt-1">Share Receipt</h5>
                    </div>
                    <div class="w-25 text-end">
                        <img src="../images/BellFill.png" alt="" class="w-25">
                    </div>
                </div>
            </div>
            <div class="receipt-content-div mx-auto bg-white">
                <div class="c-header d-flex align-items-center justify-content-between">
                    <div class="w-25">
                        <img src="../images/bankease.png" alt="" class="w-100">
                    </div>
                    <h6 class="mt-3">Transaction Receipt</h6>
                </div>
                <h1 class="w-100 text-center mt-4">₦<span>${Number(found.transferAmount).toLocaleString()}</span></h1>
                <h6 class="w-100 text-center">SUCCESS</h6>
                <h5 class="w-100 text-center">${found.transactionTime}</h5>
                <hr class="w-100 mt-4 mb-3">
                <div class="d-flex align-items-center justify-content-between mb-4">
                    <h5>Transaction Type</h5>
                    <h3>${found.transactionType}</h3>
                </div>
                <div class="d-flex align-items-center justify-content-between mb-4">
                    <h5>Recipient Details</h5>
                    <div class="text-end">
                        <h3>${found.receipientAccountName}</h3>
                        <h5>${found.receipientAccountNumber}</h5>
                    </div>
                </div>
                <div class="d-flex align-items-center justify-content-between mb-4">
                    <h5>Sender Details</h5>
                    <div class="text-end">
                        <h3>${found.senderAccountName}</h3>
                        <h5>${found.senderAccountNumber}</h5>
                    </div>
                </div>
                <div class="d-flex align-items-center justify-content-between mb-4">
                    <h5>Transaction Reference</h5>
                    <h3>${found.transactionReference}</h3>
                </div>
                <h3 class="w-100 text-center mt-5">Support</h3>
                <p class="w-100 text-center">customerservice@bankease-inc.com</p>
            </div>
        </div>
        <div class="btns-div mx-auto" id="btn-line">
            <button type="submit" class="w-100 rounded mb-4"></button>
        </div>
        <div class="share-btn-div mx-auto" id="share-btn-div">
            <button type="submit" class="w-100 py-3 rounded text-white" onclick="openPDFImageModal()">Share Receipt</button>
        </div>
        `        
    } else {
        showReceiptTag.innerHTML = `
        <div class="w-100 aa">
            <div class="receipt-header-div w-100 pb-2 mb-2" id="receipt-header">
                <div class="receipt-header mx-auto d-flex align-items-center justify-content-between py-3">
                    <div class="w-25">
                        <img src="../images/material-symbols_arrow-back-ios-new-rounded.png" alt="" class="w-25"
                            onclick="closeReceiptModal()">
                    </div>
                    <div class="w-50 text-center">
                        <h5 class="mt-1">Share Receipt</h5>
                    </div>
                    <div class="w-25 text-end">
                        <img src="../images/BellFill.png" alt="" class="w-25">
                    </div>
                </div>
            </div>
            <div class="receipt-content-div mx-auto bg-white">
                <div class="c-header d-flex align-items-center justify-content-between">
                    <div class="w-25">
                        <img src="../images/bankease.png" alt="" class="w-100">
                    </div>
                    <h6 class="mt-3">Transaction Receipt</h6>
                </div>
                <h1 class="w-100 text-center mt-4">₦<span>${Number(found.rechargedAmount).toLocaleString()}</span></h1>
                <h6 class="w-100 text-center">SUCCESS</h6>
                <h5 class="w-100 text-center">${found.transactionTime}</h5>
                <hr class="w-100 mt-4 mb-3">
                <div class="d-flex align-items-center justify-content-between mb-4">
                    <h5>Transaction Type</h5>
                    <h3>${found.transactionType}</h3>
                </div>
                <div class="d-flex align-items-center justify-content-between mb-4">
                    <h5>Network Operator</h5>
                    <div class="text-end">
                        <h3>${found.rechargeNetwork}</h3>
                    </div>
                </div>
                <div class="d-flex align-items-center justify-content-between mb-4">
                    <h5>Phone Number</h5>
                    <div class="text-end">
                        <h3>${found.rechargedNumber}</h3>
                    </div>
                </div>
                <div class="d-flex align-items-center justify-content-between mb-4">
                    <h5>Transaction Reference</h5>
                    <h3>${found.transactionReference}</h3>
                </div>
                <h3 class="w-100 text-center mt-5">Support</h3>
                <p class="w-100 text-center">customerservice@bankease-inc.com</p>
            </div>
        </div>
        <div class="btns-div mx-auto" id="btn-line">
            <button type="submit" class="w-100 rounded mb-4"></button>
        </div>
        <div class="share-btn-div mx-auto" id="share-btn-div">
            <button type="submit" class="w-100 py-3 rounded text-white" onclick="openPDFImageModal()">Share Receipt</button>
        </div>
        `
    }
}

let PDFImageModal = document.getElementById("pdfImageModal");
PDFImageModal.style.display = "none";

function openPDFImageModal() {
    PDFImageModal.style.display = "block"
}

let content = document.getElementById("receipt-content");
content.style.display = "none";    

function closeReceiptModal() {
    content.style.display = "none";    
}

function openReceiptContent() {
    content.style.display = "block";    
}

function generateImage() {
    document.getElementById("share-btn-div").style.display = "none";
    document.getElementById("btn-line").style.display = "block";
    document.getElementById("receipt-header").style.display = "none";
    PDFImageModal.style.display = "none";
    setTimeout(() => {
        html2canvas(content)
            .then(function (canvas) {
                const image = canvas.toDataURL('image/png');
                const link = document.createElement('a');
                link.href = image;
                link.download = 'BankEaseTransaction_Receipt.png';
                link.click();
            });        
    }, 1500);
}

function generatePDF() {

    html2canvas(content)
        .then(function (canvas) {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF();
            pdf.addImage(imgData, 'PNG', 0, 0);
            pdf.save('page_document.pdf');
        });
}