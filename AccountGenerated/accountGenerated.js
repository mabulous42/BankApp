

let registeredCustomer = JSON.parse(localStorage.getItem('customers'));
// registeredCustomer.accountNumber = 1123;

registeredCustomer.forEach(element => {
    element.accountNumber = Math.floor(Math.random() * (3030999999 - 3030000000 + 1)) + 3030000000;
    console.log(element.firstName);
    document.getElementById('account-number').innerHTML = element.accountNumber;
});


console.log(registeredCustomer);


function gotoSignIn() {
    localStorage.setItem('customer', JSON.stringify(registeredCustomer));
    window.location.href = "../Signin/signin.html";
}