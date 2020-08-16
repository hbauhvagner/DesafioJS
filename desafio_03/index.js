function sum(number1, number2) {
    return number1 + number2;
}

let input1 = document.querySelector('#item1');
let input2 = document.querySelector('#item2');

let container = document.querySelector('#root');

function show() {
    
    let result = sum(parseInt(input1.value), parseInt(input2.value));

    container.innerHTML = `A soma entre ${input1.value} e ${input2.value} é ${result}`
}