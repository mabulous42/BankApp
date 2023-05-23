//this function moves the focus from the current input to the nextinput on input event
function moveToNext(currentInput, nextInputId) {
    var inputValue = currentInput.value;

    if (inputValue.length === 1) {
        document.getElementById(nextInputId).focus();
    }
}

let bankEaseCustomer = JSON.parse(localStorage.getItem('customers'));

//showing all the registered customer on console
console.log(bankEaseCustomer);

//this function checks if all the inputs are filled and concatenate each input field value inside a variable
function gotoSignIn() {
    let pinDigits = '';
    let pinInputs = document.querySelectorAll('input[type="number"]');
  
    for (let i = 0; i < pinInputs.length; i++) {
      if (pinInputs[i].value === '') {
        // Empty field found, display an error message or handle the validation failure
        alert('Please fill in all PIN digits');
        return;
      }
      pinDigits += pinInputs[i].value;
    }
    
    bankEaseCustomer[bankEaseCustomer.length-1].transactionPin = pinDigits;
  
    // All PIN digits are filled, proceed with further actions
    console.log('PIN entered:', pinDigits);
    localStorage.setItem('customers', JSON.stringify(bankEaseCustomer));
    setTimeout(() => {
        window.location.href = "../Signin/signin.html";        
    }, 2000);
}