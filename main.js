const form = document.querySelector('form');
const result = document.getElementById('result');
const btn = document.getElementById('btn');


let calc = () => {
    let sum = 0;
    const startPrice = document.getElementById('startingPrice');
    const auction = document.getElementById('auction');
    const serviceType = document.getElementsByName('type'); // массив
    const fuel = document.getElementsByName('fuel'); // массив
    const engine = document.getElementById('engine');
    const age = document.getElementsByName('age'); // массив
    const fixedValueCheckboxes = document.querySelectorAll('.wrapper .form input[type="checkbox"][data-value]');
    const percentageValueCheckboxes = document.querySelectorAll('.wrapper .form input[type="checkbox"][data-percent]');

    const errMess = document.querySelector('.errMess');

    sum = Number(startPrice.value) + Number(auction.value) + engine.value*200;

    let radios = document.querySelectorAll('.wrapper .form input[type="radio"]');
    for (let radio of radios) {
        if(radio.checked) {
            sum += Number(radio.value);
            errMess.innerHTML = ``;
        } else {
            errMess.innerHTML = "Пожалуйста, выберите варианты в полях со * ";
        }
    }

    for(let checkbox of fixedValueCheckboxes) {
        if(checkbox.checked) {
            sum += Number(checkbox.attributes['data-value'].value);    
        } 
    }

    let percentResult = 0;
    for(let checkbox of percentageValueCheckboxes) {
        if(checkbox.checked) {
            percentResult += Number(checkbox.attributes['data-percent'].value);
        }
    }

    sum = sum * (1 + percentResult / 100);

    /*
    var form = document.querySelectorAll('.wrapper .form')[0];
    var formData = new FormData(form);
    var type = formData.get('type');
    */

    result.innerHTML = `Итоговая сумма $${sum}`;
}

btn.addEventListener('click', calc);
