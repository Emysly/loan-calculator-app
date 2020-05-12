//listen for a submit
document.querySelector('#calculate').addEventListener('click', calculateResults);

function calculateResults(e) {
    const amount = document.querySelector('#amount');
    const interest = document.querySelector('#interest');
    const years = document.querySelector('#years');
    const month = document.querySelector('#month');const total = document.querySelector('#total');const totalInterest = document.querySelector('#total-interest');

    const principal = parseFloat(amount.value);
    const calculateInterest = parseFloat(interest.value)/100/12;
    const calculatePayment = parseFloat(years.value)*12;

    //compute monthly payment
    const value = Math.pow(1 + calculateInterest, calculatePayment);
    const monthly = (principal * value * calculateInterest)/(value - 1);

    if(isFinite(monthly)) {
        month.value = monthly.toFixed(2);
        total.value = (monthly * calculatePayment).toFixed(2);
        totalInterest.value = ((monthly * calculatePayment)-principal).toFixed(2);
    }else {
        showError('Please check your numbers')
    }
    setTimeout(clearDiv, 3000);
    e.preventDefault();
}

function showError(error) {
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');
    const errorDiv = document.createElement('div');
        errorDiv.className = 'alert alert-danger';
        errorDiv.appendChild(document.createTextNode(error));
        card.insertBefore(errorDiv, heading);

}

function clearDiv() {
    document.querySelector('.alert').remove();
}