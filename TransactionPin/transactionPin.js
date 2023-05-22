

function moveToNext(currentInput, nextInputId) {
    var inputValue = currentInput.value;
  
    if (inputValue.length === 1) {
      document.getElementById(nextInputId).focus();
    }
  }