var resultado = document.getElementById('result');

function addNumber(numero) {
    if (resultado.value === '0' || resultado.value === 'Erro') {
        resultado.value = numero;
    } else {
        resultado.value += numero;
    }
}

function addOperator(operador) {
    resultado.value += operador;
}

function calculate() {
    let expressao = resultado.value;
    let numeros = [];
    let operadores = [];
    let numeroAtual = '';


    for (let i = 0; i < expressao.length; i++) {
        let caractere = expressao.charAt(i);
        if ('0123456789.'.includes(caractere)) {
            numeroAtual += caractere;
        } else {
            if (numeroAtual !== '') {
                numeros.push(parseFloat(numeroAtual));
                numeroAtual = '';
            }
            if ('+-*/'.includes(caractere)) {
                operadores.push(caractere);
            }
        }
    }

    if (numeroAtual !== '') {
        numeros.push(parseFloat(numeroAtual));
    }


    while (operadores.length > 0) {
        let operador = operadores.shift();
        let numero1 = numeros.shift();
        let numero2 = numeros.shift();

        switch (operador) {
            case '*':
                numeros.unshift(numero1 * numero2);
                break;
            case '/':
                numeros.unshift(numero1 / numero2);
                break;
            case '+':
                numeros.unshift(numero1 + numero2);
                break;
            case '-':
                if (numero2 !== 0) {
                    numeros.unshift(numero1 - numero2);
                } else {
                    resultado.value = 'Erro';
                    return;
                }
                break;
        }
    }

    if (numeros.length === 1) {
        resultado.value = numeros[0];
    } else {
        resultado.value = 'Erro';
    }


    let historico = document.getElementById('historic');
    historico.innerHTML += `<p>${expressao} = ${resultado.value}</p>`;

}

function NotAvaliable(){
    resultado.value = 'not available'
}


function clean() {
    resultado.value = '0';
}



