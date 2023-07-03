const calculate = document.querySelector('.calculate');
const resetBtm = document.querySelector('.reset');

calculate.addEventListener('click', (e) => {
    e.preventDefault();

    let billAmt = document.getElementById('amount').value;
    let percentage = document.getElementById('discount_percentage').value;
    let discountAmt = document.getElementById('discount_amount');
    let finalPay = document.getElementById('pay');

    discountAmt.value = billAmt * percentage / 100;
    finalPay.value = billAmt  - discountAmt.value

});

resetBtm.addEventListener('click', () =>{
    window.location.reload();
});