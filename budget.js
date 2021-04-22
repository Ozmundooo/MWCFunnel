function toggle() {
    var montly = document.getElementById('monthly');
    var biweekly = document.getElementById('biweekly');

    var typeOfPayment = document.getElementById('typeOfPayment');
    if (typeOfPayment.value=="Monthly") {
        montly.style.display = 'block';
        biweekly.style.display = 'none';
    }
    else{
        montly.style.display = 'none';
        biweekly.style.display = 'block';
    }

}
