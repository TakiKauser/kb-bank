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