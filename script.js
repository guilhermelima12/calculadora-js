//Variáveis utilizadas no programa
const number = document.querySelectorAll('.buttonN')
const display = document.querySelector('#display')
const buttonC = document.querySelector('.clean')
const buttonO = document.querySelectorAll('.operador')
const resultado = document.querySelector('.result')
const negative = document.querySelector('.neg')
const histButton = document.querySelector('.hist')
let haveNumber = false
let valueOne = '';
let valueTwo = '';
let result = '';
let operador = '';
let history = [];

//Execução das funções.
mapNumber()
oper()
clean()
calc()
inverse()
showHist()

// função que seleciona o número e verifica se já tem um valor de outra conta realizada anteriormente
function mapNumber() {
    number.forEach(numb => {
        numb.addEventListener('click', () => {
            if (haveNumber) {
                display.innerHTML = ''
                valueOne = ''
                result = ''
                display.innerHTML += numb.innerHTML
                valueOne += numb.innerHTML
                haveNumber = false
                history.push(numb.innerHTML)
            } else {
                display.innerHTML += numb.innerHTML
                valueOne += numb.innerHTML
                history.push(numb.innerHTML)
            }

        })
    });
}

// função que recebe o operador que será utilizado para o cálculo
function oper() {
    buttonO.forEach(arg => {
        arg.addEventListener('click', () => {
            if (valueOne !== '' && operador === '') {
                valueTwo = valueOne
                valueOne = ''
                display.innerHTML = ''
                operador = arg.innerHTML
                history.push(arg.innerHTML)
            } else {
                alert("Operação inválida!")
            }
        })
    })
}

//função que limpa o display e também os valores armazenados nas variáveis
function clean() {
    buttonC.addEventListener('click', () => {
        valueOne = ''
        valueTwo = ''
        display.innerHTML = ''
        result = ''
        operador = ''
        history = []
    })
}

//função que realiza o calculo e apresenta o resultado no display.
function calc() {
    resultado.addEventListener('click', () => {
        if (operador === '+') {
            sum(operador)
        }
        if (operador === '-') {
            minus(operador)
        }
        if (operador === '*') {
            mult(operador)
        }
        if (operador === '/') {
            div(operador)
        }

        display.innerHTML = result
        valueOne = result
        operador = ''
        valueTwo = ''
        haveNumber = true
        history.push('=')
        history.push(result)
    })
}

//Função que altera a escala dos botões dando a impressão que estamos realmente pressionando-os
function change(input) {
    const chan = document.querySelector(`.${input}`)
    chan.style.transform = 'scale(1.1)'
    setTimeout(() => {
        chan.style.transform = 'scale(1)'
    }, 100)
}

//Funções das operações
function sum(arg) {
    return result = parseInt(valueTwo) + parseInt(valueOne)
}

function minus(arg) {
    return result = parseInt(valueTwo) - parseInt(valueOne)
}

function mult(arg) {
    return result = parseInt(valueOne) * parseInt(valueTwo)
}

function div(arg) {
    return result = parseInt(valueTwo) / parseInt(valueOne)
}

// Função onde inverte o sinal do número apresentado no display
function inverse() {
    negative.addEventListener('click', () => {
        display.innerHTML *= (-1)
        valueOne *= (-1)
    })
}

//Função que mostra o histórico do cálculo anterior
function showHist() {
    histButton.addEventListener('click', () => {
        let hist = history.join('')
        if (haveNumber) {
            history = [];
            history[0] = result;
        }
        alert(hist.toString())
    })
}