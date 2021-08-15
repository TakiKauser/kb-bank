function inputtedAmount(inputtedAmountID){
    // get amount
    const amountInput = document.getElementById(inputtedAmountID);
    const amountText = amountInput.value;
    const amount = parseFloat(amountText);

    // clear input field
    amountInput.value = "";

    return amount;
}
function previousTotalAmount(previousTotalAmountID, inputAmount){
    // get previous total
    const previousTotal = document.getElementById(previousTotalAmountID);
    const previousTotalAmountText = previousTotal.innerText;
    const previousTotalAmount = parseFloat(previousTotalAmountText);

    // update total
    const updatedTotalAmount = inputAmount + previousTotalAmount;

    previousTotal.innerText = updatedTotalAmount;
}

function getPreviousTotalBalanceAmount(){
    // get previous total balance
    const previousTotalBalance = document.getElementById("total-balance");
    const previousTotalBalanceAmountText = previousTotalBalance.innerText;
    const previousTotalBalanceAmount = parseFloat(previousTotalBalanceAmountText);

    return previousTotalBalanceAmount;
}

function updateTotalBalance(inputAmount, isAddition){
    // get previous total balance 
    const previousTotalBalance = document.getElementById("total-balance");
    const previousTotalBalanceAmount = getPreviousTotalBalanceAmount();

    // update previous total balance
    if (isAddition == true){
        previousTotalBalance.innerText = previousTotalBalanceAmount + inputAmount;
    }
    else{
        previousTotalBalance.innerText = previousTotalBalanceAmount - inputAmount;
    }
}

// deposit event handler
document.getElementById("deposit-btn").addEventListener("click", function(){
    // get depositted amount
    const depositAmount = inputtedAmount("deposit-amount-input");

    // get and update previous total deposit
    const previousTotalDepositAmount = previousTotalAmount("total-deposit", depositAmount);

    // update total balance
    updateTotalBalance(depositAmount, true);

});

// withdraw event handler
document.getElementById("withdraw-btn").addEventListener("click", function(){
    // get withdraw amount
    const withdrawAmount = inputtedAmount("withdraw-amount-input");
 
    // get previous total withdraw
    const previousTotalWithdrawAmount = previousTotalAmount("total-withdraw", withdrawAmount);
 
    // update total balance
    updateTotalBalance(withdrawAmount, false);
});