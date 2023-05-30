let naira = document.getElementById("naira");
let payBtn = document.getElementById("pay-btn");
let inputAmount = document.getElementById("input-amount");
let placeHolder = inputAmount.placeholder;

console.log(placeHolder);

naira.style.display = "none"

function showNaira() {
    if (placeHolder == "") {
        naira.style.display = "block";        
    } else {
        naira.style.display = "none";        
    }
}

payBtn.addEventListener('click', function(){
})

inputAmount.addEventListener('input', ()=>{
    if (inputAmount.value.length != "") {
        payBtn.style.backgroundColor = "rgba(0, 168, 89, 1)";
    } else {
        payBtn.style.backgroundColor = "rgb(141, 216, 180)";
    }    
})