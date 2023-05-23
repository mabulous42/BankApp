//fetching the registered customers from the local storage
let registeredCustomer = JSON.parse(localStorage.getItem('customers'));

//getting the array index of the current registered customer
let currentRegisteredCustomer = registeredCustomer.length - 1;


//displaying the name of the current registered customer
document.getElementById('account-holder-name').innerHTML = registeredCustomer[currentRegisteredCustomer].firstName;

let accountDigit;

//tis function generates the account number
function generateAccount() {
    accountDigit = Math.floor(Math.random() * (3030999999 - 3030000000 + 1)) + 3030000000;
    //displaying the account number for the user to see so it can be noted down
    document.getElementById('account-number').innerHTML = accountDigit;
}
//self invoking function
generateAccount();

//showing all the registered customer on console
console.log(registeredCustomer);

//this function saves the modified customer data back to the local storage and then proceed to the next page
function gotoSignIn() {
    //checking if the generated account already exist in the registerCustomer array
    let found = registeredCustomer.find(acc => acc.accountNumber == accountDigit);
    if (found) {
        //generating another account
        generateAccount();
    } else {
        //setting the index of the current registered customers to update their data by adding account number to their data
        registeredCustomer[currentRegisteredCustomer].accountNumber = accountDigit;

        //saving into the local storage with the updated customer details
        localStorage.setItem('customers', JSON.stringify(registeredCustomer));

        //navigating to the login page
        window.location.href = "../TransactionPin/transactionPin.html";
    }
}