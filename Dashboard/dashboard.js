let currentUser = JSON.parse(localStorage.getItem('CU'));

console.log(currentUser);
let customerName = currentUser.firstName;
console.log(customerName);

document.getElementById("customer-name").innerHTML = customerName;