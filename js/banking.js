// deposit event handler
document.getElementById("deposit-btn").addEventListener("click", function(){
    // get dipositted amount
    const depositAmountInput = document.getElementById("deposit-amount-input");
    const depositAmountText = depositAmountInput.value;
    const depositAmount = parseFloat(depositAmountText);
    // console.log(depositAmount);

    // update total diposit 
    const totalDeposit = document.getElementById("total-deposit");
    // console.log(totalDeposit.innerText);
    const previousDepositAmountText = totalDeposit.innerText;
    const previousDepositAmount = parseFloat(previousDepositAmountText);
    // console.log(previousDepositAmount);

    const updatedTotalDeposit = depositAmount + previousDepositAmount;

    totalDeposit.innerText = updatedTotalDeposit;

    // update total balance
    const totalBalance = document.getElementById("total-balance");
    const previousBalanceAmountText = totalBalance.innerText;
    const previousBalanceAmount = parseFloat(previousBalanceAmountText);
    // console.log(previousBalanceAmount);

    const updatedTotalBalance = depositAmount + previousBalanceAmount;

    totalBalance.innerText = updatedTotalBalance;

    // clear deposit input field
    depositAmountInput.value = "";
});

// withdraw event handler
document.getElementById("withdraw-btn").addEventListener("click", function(){
    // console.log("Clicked");
    // get withdraw amount
    const withdrawAmountInput = document.getElementById("withdraw-amount-input");
    const withdrawAmountText = withdrawAmountInput.value;
    const withdrawAmount = parseFloat(withdrawAmountText);
    // console.log(withdrawAmount);

    // update total withdraw
    const totalWithdraw = document.getElementById("total-withdraw");
    const previousWithdrawAmountText = totalWithdraw.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawAmountText);
    // console.log(previousWithdrawAmount);

    const updatedTotalWithdraw = withdrawAmount + previousWithdrawAmount;

    totalWithdraw.innerText = updatedTotalWithdraw;

    // update total balance
    const totalBalance = document.getElementById("total-balance");
    const previousBalanceAmountText = totalBalance.innerText;
    const previousBalanceAmount = parseFloat(previousBalanceAmountText);
    // console.log(previousBalanceAmount);

    const updatedTotalBalance = previousBalanceAmount - withdrawAmount;

    totalBalance.innerText = updatedTotalBalance;

    // clear withdraw input field
    withdrawAmountInput.value = "";
});