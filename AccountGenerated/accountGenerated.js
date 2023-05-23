//fetching the registered customers from the local storage
let registeredCustomer = JSON.parse(localStorage.getItem('customers'));

let currentRegisteredCustomer = registeredCustomer.length-1;

//setting the index of the current registered customers to update their data by adding account number to their data
registeredCustomer[currentRegisteredCustomer].accountNumber = Math.floor(Math.random() * (3030999999 - 3030000000 + 1)) + 3030000000;

//passing the account number of the current registered customer to a new varaible
let accountNo = registeredCustomer[currentRegisteredCustomer].accountNumber;

//displaying the account number for the user to see so it can be noted down
document.getElementById('account-number').innerHTML = accountNo;

//showing all the registered customer on console
console.log(registeredCustomer);

//this function saves the modified customer data back to the local storage and then proceed to the next page
function gotoSignIn() {
    localStorage.setItem('customers', JSON.stringify(registeredCustomer));
    window.location.href = "../TransactionPin/transactionPin.html";
}