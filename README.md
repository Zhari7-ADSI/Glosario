# FOR EACH

For each es un bloque de lenguajes para recorrer elementos de una colección.

`arr.forEach(function callback(currentValue, index, array) {
    // tu iterador
}[, thisArg]);`

# MAP

Es un conjunto de claves, colección de valores y pares de entradas. Representa diccionarios o propiedades, almacenar en memoria tablas de bases de datos, cachés, etc.

```js
// Declaración de un Map (un HashMap) con clave "Integer" y Valor "String". Las claves pueden ser de cualquier tipo de objetos, aunque los más utilizados como clave son los objetos predefinidos de Java como String, Integer, Double ... !!!!CUIDADO los Map no permiten datos atómicos
Map<Integer, String> nombreMap = new HashMap<Integer, String>();
nombreMap.size(); // Devuelve el numero de elementos del Map
nombreMap.isEmpty(); // Devuelve true si no hay elementos en el Map y false si si los hay
nombreMap.put(K clave, V valor); // Añade un elemento al Map
nombreMap.get(K clave); // Devuelve el valor de la clave que se le pasa como parámetro o 'null' si la clave no existe
nombreMap.clear(); // Borra todos los componentes del Map
nombreMap.remove(K clave); // Borra el par clave/valor de la clave que se le pasa como parámetro
nombreMap.containsKey(K clave); // Devuelve true si en el map hay una clave que coincide con K
nombreMap.containsValue(V valor); // Devuelve true si en el map hay un Valor que coincide con V
nombreMap.values(); // Devuelve una "Collection" con los valores del Map
```

# FILTER

Es un método que toma una función posllamada *<u>(es una función que se pasa a otra con un argumento para luego invocarse dentro de una función externa y así completar una rutina o acción</u>)* para que cada elemento el que repite dentro de un arreglo.

`let greaterTen = numbers.filter(number => { number > 10 }); 3console.log(greaterTen); // [] 4 5// with return 6let greaterTen = numbers.filter(number => number > 10 ); // return implicito 7console.log(greaterTen); // [23, 12, 45, 78, 11, 10.1, 84] 8 9// ES5 10var greaterTen = numbers.filter(function(){  11  number > 10  12}); 13console.log(greaterTen); // [] 14 15// with return 16var greaterTen = numbers.filter(function(){  17  return number > 10  18}); 19console.log(greaterTen);  // [23, 12, 45, 78, 11, 10.1, 84]`

# SEARCH

Es un método que ejecuta una búsqueda que encaje entre una expresión regular y el objeto(texto).

`str.search(expresionregular)`

# ITERACIÓN

Es repetir varias veces un proceso con el objetivo de alcanzar un propósito.

```js
let n = 0;
let x = 0;
while (n < 3) {
  n++;
  x += n;
}
```

# CICLO

Son instrucciones de códigos que se ejecuta varias veces, hasta que la condición asignada a dicho bucle deje de cumplirse.

`var i = 100;
while (i > 0) {
  console.log(i);
  i--;
}`

# FUNCIÓN LIMPIA

Es una función que vamos a utilizar varias veces.

```js
var x = 0;
while (x < 10) { // "x < 10" es la condición del bucle
   // hacer cosas
   x++;
}
```

# FUNCIÓN SUCIA

Es una función que no vamos a utilizar varias veces.

```js
var myFunc;
if (num === 0) {
  myFunc = function(theObject) {
    theObject.make = 'Toyota';
  }
}
```

#  NIVEL DE SCOPE

Es el alcance de una variable en varios niveles: global, de una función, de bloque:

```js
function holis(a) {
    console.log(a); // 2
}
holis(2); 
```

# CLAUSULA

Es una función que tiene acceso al ámbito de su función padre, incluso después de que la función padre haya terminado de ejecutar.

```js
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
```

# FUNCIONES

Es un conjunto de instrucciones que realiza una tarea o calcula un valor. Este debe  tomar alguna entrada y devolver una salida donde hay alguna relación obvia entre la entrada y la salida.

```js
function map(f, a) {
  let result = []; // Crea un nuevo arreglo
  let i; // Declara una variable
  for (i = 0; i != a.length; i++)
    result[i] = f(a[i]);
  return result;
}
const f = function(x) {
   return x * x * x;
}
let numbers = [0, 1, 2, 5, 10];
let cube = map(f,numbers);
console.log(cube);
```