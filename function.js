let balance = parseFloat(localStorage.getItem('balance')) || 0.00;

function updateBalance() {
    document.getElementById("balance").textContent = balance.toFixed(2);
    localStorage.setItem('balance', balance);
}

function addDeposit() {
    const depositAmount = parseFloat(document.getElementById("deposit").value);
    if (!isNaN(depositAmount)) {
        balance += depositAmount;
        updateBalance();

        const deposits = JSON.parse(localStorage.getItem('deposits')) || [];
        deposits.push({
            type: 'deposit',
            amount: depositAmount,
        });
        localStorage.setItem('deposits', JSON.stringify(deposits));
    }
    document.getElementById("deposit").value = "";
}

function makeWithdrawal() {
    const withdrawalAmount = parseFloat(document.getElementById("withdraw").value);
    if (!isNaN(withdrawalAmount)) {
        
        if (withdrawalAmount <= balance) {
            balance -= withdrawalAmount;
            updateBalance();
        } else {
            alert("Insufficient balance!");
        }
    }
    document.getElementById("withdraw").value = "";
}

updateBalance();