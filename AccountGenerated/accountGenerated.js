//fetching the registered customers from the local storage
let registeredCustomer = JSON.parse(localStorage.getItem('customers'));

//looping through the list of registered customers to update their data by adding account number to their data
registeredCustomer.forEach(element => {
    //generating a unique account number with Math.Random() minimum and maximum value and updating the local storage
    element.accountNumber = Math.floor(Math.random() * (3030999999 - 3030000000 + 1)) + 3030000000;

    //displaying thr account number for the user to see so it can be noted down
    document.getElementById('account-number').innerHTML = element.accountNumber;
});

//showing all the registered customer on console
console.log(registeredCustomer);

//this function saves the modified customer data back to the local storage and then proceed to the next page
function gotoSignIn() {
    localStorage.setItem('customer', JSON.stringify(registeredCustomer));
    window.location.href = "../Signin/signin.html";
}