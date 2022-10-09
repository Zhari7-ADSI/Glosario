arr.forEach(function callback(currentValue, index, array) {
    // tu iterador
}[thisArg]);

// Declaración de un Map (un HashMap) con clave "Integer" y Valor "String". Las claves pueden ser de cualquier tipo de objetos, aunque los más utilizados como clave son los objetos predefinidos de Java como String, Integer, Double ... !!!!CUIDADO los Map no permiten datos atómicos
Map < Integer, String > nombreMap = new HashMap < Integer, String > ();
nombreMap.size(); // Devuelve el numero de elementos del Map
nombreMap.isEmpty(); // Devuelve true si no hay elementos en el Map y false si si los hay
nombreMap.put(K clave, V valor); // Añade un elemento al Map
nombreMap.get(K clave); // Devuelve el valor de la clave que se le pasa como parámetro o 'null' si la clave no existe
nombreMap.clear(); // Borra todos los componentes del Map
nombreMap.remove(K clave); // Borra el par clave/valor de la clave que se le pasa como parámetro
nombreMap.containsKey(K clave); // Devuelve true si en el map hay una clave que coincide con K
nombreMap.containsValue(V valor); // Devuelve true si en el map hay un Valor que coincide con V
nombreMap.values(); // Devuelve una "Collection" con los valores del Map

let greaterTen = numbers.filter(number => { number > 10 });
console.log(greaterTen); // []

// with return
let greaterTen = numbers.filter(number => number > 10); // return implicito
console.log(greaterTen); // [23, 12, 45, 78, 11, 10.1, 84]

// ES5
var greaterTen = numbers.filter(function () {
    number > 10
});
console.log(greaterTen); // []

// with return
var greaterTen = numbers.filter(function () {
    return number > 10
});
console.log(greaterTen);  // [23, 12, 45, 78, 11, 10.1, 84]

str.search(expresionregular)

let n = 0;
let x = 0;
while (n < 3) {
    n++;
    x += n;
}

var i = 100;
while (i > 0) {
    console.log(i);
    i--;
}

var x = 0;
while (x < 10) { // "x < 10" es la condición del bucle
    // hacer cosas
    x++;
}

var myFunc;
if (num === 0) {
    myFunc = function (theObject) {
        theObject.make = 'Toyota';
    }
}

function holis(a) {
    console.log(a); // 2
}
holis(2);

const miFuncion = () => {
    let miValor = 2;
    console.log(miValor);

    const funcionHija = () => {
        console.log(miValor += 1);
    }

    return funcionHija;
}

const resultado = miFuncion();
console.log(resultado);
resultado();
resultado();
resultado();

function map(f, a) {
    let result = []; // Crea un nuevo arreglo
    let i; // Declara una variable
    for (i = 0; i != a.length; i++)
        result[i] = f(a[i]);
    return result;
}
const f = function (x) {
    return x * x * x;
}
let numbers = [0, 1, 2, 5, 10];
let cube = map(f, numbers);
console.log(cube);

let str = "¡Si, Tu puedes hacerlo!";

console.log(str[0]); // ¡
console.log(str[1]); // S
console.log(str[2]); // i
console.log(str[3]); // ,
...
console.log(str[10]); // e

function ask(question, yes, no) { 
    if (confirm(question)) yes(); 
    else no(); 
} 
ask(
    "Do you agree?",
    () => alert("You agreed."), 
    () => alert("You canceled the execution.")
);