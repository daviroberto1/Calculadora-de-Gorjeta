const button_1 = document.getElementById('button_1');
const button_2 = document.getElementById('button_2');
const button_3 = document.getElementById('button_3');
const button_4 = document.getElementById('button_4');
const button_5 = document.getElementById('button_5');
const button_6 = document.getElementById('button_6');
const button_reset = document.getElementById('button_reset');
let result_total = document.getElementById('result_total')
let result_amount = document.getElementById('result_amount');

button_1.addEventListener('click', calcula5);
button_2.addEventListener('click', calcula10);
button_3.addEventListener('click', calcula15);
button_4.addEventListener('click', calcula20);
button_5.addEventListener('click', calcula25);
button_6.addEventListener('click', calcula50);
button_reset.addEventListener('click', reset);

function mostraResultado(porcentagem) {
    let bill = document.getElementById('bill').value;
    let numOfPeople = document.getElementById('numOfPeople').value;
    if (bill !== '' && numOfPeople !== '') {
        let amount = (bill / numOfPeople) * porcentagem;
        let total = (bill / numOfPeople) + amount;
        result_amount.innerHTML = (`${amount.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`);
        result_total.innerHTML = (`${total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`);
        return
    }
    window.alert("Preencha todos os campos!");
}

function defineCor() {
    button_1.style.background = '#4b244a';
    button_2.style.background = '#4b244a';
    button_3.style.background = '#4b244a';
    button_4.style.background = '#4b244a';
    button_5.style.background = '#4b244a';
    button_6.style.background = '#4b244a';
}

function calcula5() {

    mostraResultado(0.05);
    defineCor();
    button_1.style.background = '#533A7B';
}

function calcula10() {
    mostraResultado(0.10);
    defineCor();
    button_2.style.background = '#533A7B';
}

function calcula15() {
    mostraResultado(0.15);
    defineCor();
    button_3.style.background = '#533A7B';

}

function calcula20() {
    mostraResultado(0.20);
    defineCor();
    button_4.style.background = '#533A7B';
}

function calcula25() {
    mostraResultado(0.25);
    defineCor();
    button_5.style.background = '#533A7B';

}

function calcula50() {
    mostraResultado(0.50);
    defineCor();
    button_6.style.background = '#533A7B';

}

function reset() {
    bill.value = '';
    numOfPeople.value = '';
    result_total.innerHTML = '';
    result_amount.innerHTML = '';
    defineCor();
}