// get the html elements
let firstNumberElement = document.querySelector('#firstNumber');
let secondNumberElement = document.querySelector('#secondNumber');
let operatorButton = document.querySelector('#operator');
let equalsButton = document.querySelector('#equals-button');
let resultButton = document.querySelector('#result-button');
let plusButton = document.querySelector('#plus-button');
let minusButton = document.querySelector('#minus-button');
let divideButton = document.querySelector('#divide-button');
let multiplyButton = document.querySelector('#multiply-button');
let clearButton = document.querySelector('#clear-button');

// click om minus button
minusButton.addEventListener('click',function() {
    operatorButton.innerText = this.innerText;
    calculate();
});

// click om plus button
plusButton.addEventListener('click',function() {
    operatorButton.innerText = this.innerText;
    calculate();
});

// click om divide button
divideButton.addEventListener('click',function() {
    operatorButton.innerText = this.innerText;
    calculate();
});

// click om multiply button
multiplyButton.addEventListener('click',function() {
    operatorButton.innerText = this.innerText;
    calculate();
});

// click on equals button
equalsButton.addEventListener('click',function() {
    calculate();
});

// calculate
let calculate = function() {
    let firstNumber = firstNumberElement.value;
    let secondNumber = secondNumberElement.value;
    let operator = operatorButton.innerText.trim();
    let result = 0;
    if(firstNumber !== '' && secondNumber !== ''){
        let num1 = Number.parseFloat(firstNumber);
        let num2 = Number.parseFloat(secondNumber);

        switch(operator) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '/':
                result = num1 / num2;
                break;
            case '*':
                result = num1 * num2;
                break;
        }
        resultButton.innerText = result;
    }
};

// click on clear button
clearButton.addEventListener('click',function() {
   firstNumberElement.value = '';
   secondNumberElement.value = '';
   operatorButton.innerText = '+';
   resultButton.innerText = 'RESULT';
});
