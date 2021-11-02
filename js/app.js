/* (function () { */
let num1, num2, operando, resultado;
let enOperacion = false;


const pantalla = document.querySelector('.pantalla-num');
const calculadora = document.getElementById('grid-container');
const igual = document.querySelector('.igual');
const borrar = document.querySelector('.del');

function clear() {
    pantalla.innerHTML = ''
    if (pantalla.textContent === '') pantalla.innerHTML = '0';
};

function borrarNum() {
    pantalla.innerHTML = pantalla.innerText.substring(0, pantalla.innerText.length - 1); //substring recibe 2 parámetros, el primero indica a partir de que posición copiar la cadena y el segundo cuantos caracteres tomar
    if (pantalla.textContent === '') pantalla.innerHTML = '0';
}

function reset() {
    num1 = '';
    num2 = '';
    operando = '';
    clear();
}

function operacion(operador) {
    switch (operador) {
        case '+':
            return pantalla.innerHTML = parseFloat(num1) + parseFloat(num2);
            break;

        case '-':
            return pantalla.innerHTML = parseFloat(num1) - parseFloat(num2);
            break;

        case 'x':
            pantalla.innerHTML = parseFloat(num1) * parseFloat(num2);
            break;

        case '/':
            return pantalla.innerHTML = parseFloat(num1) / parseFloat(num2);
            break;

        default:
            break;
    }
}


calculadora.addEventListener('click', (e) => {
    if (e.target.classList.contains('num')) {
        if (pantalla.textContent === '0') { //Esta validacion es para luego de presionar un numero no se concatene con el 0 que tiene por defecto
            pantalla.innerHTML = '';
            pantalla.innerHTML += e.target.textContent;
        } else if (enOperacion) {
            pantalla.innerHTML = '';
            pantalla.innerHTML += e.target.textContent;
            enOperacion = false;
        } else {
            pantalla.innerHTML += e.target.textContent;
        }
    }

    else if (e.target.classList.contains('signo')) {
        operando = e.target.textContent;
        num1 = pantalla.textContent;
        enOperacion = true;
        //clear();
    }

    else if (e.target.classList.contains('del')) {
        borrarNum();
    }

    else if (e.target.classList.contains('reset')) {
        clear();
    }
})


igual.addEventListener('click', (e) => {
    if (pantalla.textContent === '') return
    num2 = pantalla.textContent;
    operacion(operando);
    enOperacion = false;
});

/* })(); */