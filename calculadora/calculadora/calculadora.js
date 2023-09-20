let operador = '';
let value1 = '';
let value2 = '';
let result = false;

function addNumber(number) {
    if (result) {
        document.getElementById('result').value = number;
        result = false;
    } else {
        document.getElementById('result').value += number;
    }
}

function addOperator(operator) {

    value1 = document.getElementById('result').value;
    operador = operator;
    document.getElementById('result').value = '';
    
}

function calculate() {
    if (value1 !== '' && value2 === '') {
        value2 = document.getElementById('result').value;
    }

    switch (operador) {
        case '+':
            document.getElementById('result').value = parseFloat(value1) + parseFloat(value2);
            break;
        case '-':
            document.getElementById('result').value = parseFloat(value1) - parseFloat(value2);
            break;
        case 'x':
            document.getElementById('result').value = parseFloat(value1) * parseFloat(value2);
            break;
        case '/':
            document.getElementById('result').value = parseFloat(value1) / parseFloat(value2);
            break;
    }

    value1 = document.getElementById('result').value;
    value2 = '';
    result = true;
}

function clear() {
    document.getElementById('result').value = '0';
    value1 = '';
    value2 = '';
    operador = '';
    result = false;
}
