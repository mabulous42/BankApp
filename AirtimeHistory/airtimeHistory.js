let loader = document.getElementById("loader");
let displayHistoryTag = document.getElementById("show-transaction-history");

let currentUser = JSON.parse(localStorage.getItem('CU'));

function displayHistory() {
    setTimeout(() => {
        loader.style.display = "none";
        let filteredArray = currentUser.transactionHistory.filter(item => item.transactionType == "Airtime");
        console.log(filteredArray);
        if (filteredArray == "") {
            displayHistoryTag.innerHTML = `
            <div class='d-flex align-items-center justify-content-center'>
                <h3>No recent transaction</h3>
            </div>
            `
        } else {
            filteredArray.forEach(element => {
                displayHistoryTag.innerHTML += `
                <div class="mx-auto d-flex align-items-center justify-content-between d-history mb-2 pb-2">
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
            });

        }


    }, 2000);



}

displayHistory();

function gotoAirtimeRecharge() {
    window.location.href = "../AirtimeRecharge/airtimeRecharge.html";
}