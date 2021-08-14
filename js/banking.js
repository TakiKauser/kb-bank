document.getElementById("deposit-btn").addEventListener("click", function(){
    // get dipositted amount
    const depositAmountInput = document.getElementById("deposit-amount-input");
    const depositAmount = depositAmountInput.value;
    // console.log(depositAmount);

    const totalDeposit = document.getElementById("total-deposit");
    totalDeposit.innerText = depositAmount;

    // clear deposit input field
    depositAmountInput.value = "";
});