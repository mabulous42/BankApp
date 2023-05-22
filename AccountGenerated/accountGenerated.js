

let registeredCustomer = JSON.parse(localStorage.getItem('customers'));
// registeredCustomer.accountNumber = 1123;

registeredCustomer.forEach(element => {
    element.accountNumber = Math.floor(Math.random() * 10000000000);
    console.log(element.firstName);
    document.getElementById('account-number').innerHTML = element.accountNumber;

});

localStorage.setItem('customer', JSON.stringify(registeredCustomer));

console.log(registeredCustomer);


function gotoSignIn() {
    window.location.href = "../Signin/signin.html";
}