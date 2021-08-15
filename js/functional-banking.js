// deposit event handler
document.getElementById("deposit-btn").addEventListener("click", function(){
    // get depositted amount
    const depositAmountInput = document.getElementById("deposit-amount-input");
    const depositAmountText = depositAmountInput.value;
    const depositAmount = parseFloat(depositAmountText);

    // get previous total deposit
    const previousTotalDeposit = document.getElementById("total-deposit");
    const previousTotalDepositAmountText = previousTotalDeposit.innerText;
    const previousTotalDepositAmount = parseFloat(previousTotalDepositAmountText);

    // update total deposit
    const updatedTotalDepositAmount = depositAmount + previousTotalDepositAmount;

    previousTotalDeposit.innerText = updatedTotalDepositAmount;

    // get previous total balance
    const previousTotalBalance = document.getElementById("total-balance");
    const previousTotalBalanceAmountText = previousTotalBalance.innerText;
    const previousTotalBalanceAmount = parseFloat(previousTotalBalanceAmountText);

    // update previous total balance
    const updatedTotalBalanceAmount = previousTotalBalanceAmount + depositAmount;

    previousTotalBalance.innerText = updatedTotalBalanceAmount;

    // clear input field
    depositAmountInput.value = "";
});

// withdraw event handler
document.getElementById("withdraw-btn").addEventListener("click", function(){
    // get withdraw amount
    const withdrawAmountInput = document.getElementById("withdraw-amount-input");
    const withdrawAmountText = withdrawAmountInput.value;
    const withdrawAmount = parseFloat(withdrawAmountText);

    // get previous total withdraw
    const previousTotalWithdraw = document.getElementById("total-withdraw");
    const previousTotalWithdrawAmountText = previousTotalWithdraw.innerText;
    const previousTotalWithdrawAmount = parseFloat(previousTotalWithdrawAmountText);

    // update total withdraw
    updatedTotalWithdrawAmount = previousTotalWithdrawAmount + withdrawAmount;

    previousTotalWithdraw.innerText = updatedTotalWithdrawAmount;

    // get previous total balance
    const previousTotalBalance = document.getElementById("total-balance");
    const previousTotalBalanceAmountText = previousTotalBalance.innerText;
    const previousTotalBalanceAmount = parseFloat(previousTotalBalanceAmountText);

    // update previous total balance
    const updatedTotalBalanceAmount = previousTotalBalanceAmount - withdrawAmount;

    previousTotalBalance.innerText = updatedTotalBalanceAmount;

    // clear input field
    withdrawAmountInput.value = "";
});