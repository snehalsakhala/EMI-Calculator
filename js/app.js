function calculate() {
    var loanAmount = document.getElementById('loanAmount').value;
    var interestRate = document.getElementById('interestRate').value;
    var duration = document.getElementById('duration').value;

    if (isNaN(loanAmount) || loanAmount <= 0) {
        alert(" Please enter valid values");
    }

    if (isNaN(interestRate) || interestRate <= 0) {
        alert(" Please enter valid values");
    }

    if (isNaN(duration) || duration <= 0) {
        alert(" Please enter valid values");
    }

    interestRate = interestRate / (12 * 100);
    duration = duration * 12;
    emi = loanAmount * interestRate * Math.pow(1 + interestRate, duration) / (Math.pow(1 + interestRate, duration) - 1);

    document.getElementById('emi').innerHTML = emi.toFixed(2);

    var totalPayment = emi * duration;
    document.getElementById('totalPayment').innerHTML = totalPayment.toFixed(2);

    var totalInterest = totalPayment - loanAmount;
    document.getElementById('totalInterest').innerHTML = totalInterest.toFixed(2);




}
calculate();