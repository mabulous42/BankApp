//fetching the registered customers from the local storage
let registeredCustomer = JSON.parse(localStorage.getItem('customers'));

let currentRegisteredCustomer = registeredCustomer.length - 1;

let accountDigit;
function generateAccount() {
    accountDigit = Math.floor(Math.random() * (3030999999 - 3030000000 + 1)) + 3030000000;
    //displaying the account number for the user to see so it can be noted down
    document.getElementById('account-number').innerHTML = accountDigit;
}
generateAccount();

//showing all the registered customer on console
console.log(registeredCustomer);

//this function saves the modified customer data back to the local storage and then proceed to the next page
function gotoSignIn() {
    let found = registeredCustomer.find(acc => acc.accountNumber == accountDigit);
    if (found) {
        generateAccount();
    } else {
        console.log("Available for use");
        //setting the index of the current registered customers to update their data by adding account number to their data
        registeredCustomer[currentRegisteredCustomer].accountNumber = accountDigit;
        localStorage.setItem('customers', JSON.stringify(registeredCustomer));
        window.location.href = "../TransactionPin/transactionPin.html";
    }
}