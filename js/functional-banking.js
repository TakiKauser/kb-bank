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
    /* 
    const previousTotalBalanceAmountText = previousTotalBalance.innerText;
    const previousTotalBalanceAmount = parseFloat(previousTotalBalanceAmountText); 
    */
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
    /* 
    const depositAmountInput = document.getElementById("deposit-amount-input");
    const depositAmountText = depositAmountInput.value;
    const depositAmount = parseFloat(depositAmountText);
    */

    // get previous total deposit

    const previousTotalDepositAmount = previousTotalAmount("total-deposit", depositAmount);
    /* 
    const previousTotalDeposit = document.getElementById("total-deposit");
    const previousTotalDepositAmountText = previousTotalDeposit.innerText;
    const previousTotalDepositAmount = parseFloat(previousTotalDepositAmountText);

    // update total deposit
    const updatedTotalDepositAmount = depositAmount + previousTotalDepositAmount;

    previousTotalDeposit.innerText = updatedTotalDepositAmount; 
    */
     
    // get previous total balance

    updateTotalBalance(depositAmount, true);
    /*
    const previousTotalBalance = document.getElementById("total-balance");
    const previousTotalBalanceAmountText = previousTotalBalance.innerText;
    const previousTotalBalanceAmount = parseFloat(previousTotalBalanceAmountText);

    // update previous total balance
    const updatedTotalBalanceAmount = previousTotalBalanceAmount + depositAmount;

    previousTotalBalance.innerText = updatedTotalBalanceAmount;
     */

    // clear input field
    /*
    depositAmountInput.value = "";
    */
});

// withdraw event handler
document.getElementById("withdraw-btn").addEventListener("click", function(){
    // get withdraw amount

    const withdrawAmount = inputtedAmount("withdraw-amount-input");
    /*
    const withdrawAmountInput = document.getElementById("withdraw-amount-input");
    const withdrawAmountText = withdrawAmountInput.value;
    const withdrawAmount = parseFloat(withdrawAmountText);
    */

    // get previous total withdraw

    const previousTotalWithdrawAmount = previousTotalAmount("total-withdraw", withdrawAmount);
    /*
    const previousTotalWithdraw = document.getElementById("total-withdraw");
    const previousTotalWithdrawAmountText = previousTotalWithdraw.innerText;
    const previousTotalWithdrawAmount = parseFloat(previousTotalWithdrawAmountText);

    // update total withdraw
    updatedTotalWithdrawAmount = previousTotalWithdrawAmount + withdrawAmount;

    previousTotalWithdraw.innerText = updatedTotalWithdrawAmount;
    */

    // get previous total balance
    
    updateTotalBalance(withdrawAmount, false);
    /* 
    const previousTotalBalance = document.getElementById("total-balance");
    const previousTotalBalanceAmountText = previousTotalBalance.innerText;
    const previousTotalBalanceAmount = parseFloat(previousTotalBalanceAmountText);

    // update previous total balance
    const updatedTotalBalanceAmount = previousTotalBalanceAmount - withdrawAmount;

    previousTotalBalance.innerText = updatedTotalBalanceAmount;
     */

    // clear input field
    /*
    withdrawAmountInput.value = "";
    */
});