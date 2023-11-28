//Crea un array llamado "datos" vacío con un literal.
const datos = [];

//Añade a "datos" los números del 1 al 50 con un bucle for.
for (let i = 1; i <= 50; i++) {
    datos.push(i);
}

//Usa el operador spread para hacer una copia del array anterior.
const copiaDatos = [...datos];

//Crea un array de tamaño 50 con el constructor Array.
const array = new Array(50);

//Copia el array anterior a otro con la factoría from.
const copiaArray = Array.from(datos);

//Crea un array multidimensional de 10 filas (i) y 10 columnas (j). Inicializa cada celda con el valor i*j.
const arrayMultidimensional = [];
for (let i = 0; i < 10; i++) {
    arrayMultidimensional[i] = [];
    for (let j = 0; j < 10; j++) {
        arrayMultidimensional[i][j] = i * j;
    }
}

//Crea un array con la factoría of con los números del 1 al 5. Después añade un elemento en la posición 10 y otro en la 50.
// Recorre el array con for imprimiendo valores y después con forEach. ¿Cuál es la diferencia? ¿Cuál es el tamaño del array?.
const arrayOf = Array.of(1, 2, 3, 4, 5);
arrayOf[10] = 10;
arrayOf[50] = 50;
/*for (let i = 0; i < arrayOf.length; i++) {
    console.log(arrayOf[i]);
}
arrayOf.forEach((element) => {
    console.log(element);
});*/

//Elimina dos elementos con delete.
delete arrayOf[10];
delete arrayOf[50];

//Calcula el producto de todos los números del array "datos" con forEach.
let producto = 1;
datos.forEach(function (elemento) {
    producto *= elemento;
});
console.log(producto);

//Crea un nuevo array con map recorriendo cada elemento x de "datos", donde cada elemento sea un string "El valor es: x". Usa template string.
const nuevoArray = datos.map(function (elemento) {
    return `El valor es: ${elemento}`;
});
console.log(nuevoArray);

// Crea un array nuevo mediante map que incremente cada elemento de "datos" en 5 unidades.
const arrayIncrementado = datos.map(function (elemento) {
    return elemento + 5;
});
console.log(arrayIncrementado);

//Mediante filter quédate con los números impares en un nuevo array impares.
const impares = datos.filter(function (elemento) {
    return elemento % 2 !== 0;
});
console.log(impares);

//Usa find para buscar el número 13.
const buscarNum = datos.find(function (elemento) {
    return elemento === 13;
});

//Usa every para comprobar si todos los números son positivos.
const numPositivos = datos.every(function (elemento) {
    return elemento > 0;
});
console.log(numPositivos);

//Calcula la sumatoria del array datos mediante reduce.
const suma = datos.reduce(function (acumulador, elemento) {
    return acumulador + elemento
}, 0);
console.log(suma);

//Calcula el valor más pequeño del array mediante reduce.
const minimoValor = datos.reduce(function (acumulador, elemento) {
    return Math.min(acumulador, elemento)
}, 0);

//Usa flat para aplanar el array multidimensional que creaste anteriormente.
const aplanar = arrayMultidimensional.flat();
console.log(aplanar.flat());

//Tenemos la cadena: "Vamos a usar flatMap. Es igual que map. Pero aplana los arrays".
// Separa mediante split las distintas frases. Después mediante map quita los espacios sobrantes (trim).
// A continuación usa flatMap para extraer todas las palabras de cada frase en un único array.
const cadena = "Vamos a usar flatMap. Es igual que map. Pero aplana los arrays";
cadena.split(" ").map(function (elemento) {
    return elemento.trim();
}).flatMap(function (elemento) {
    return elemento.split(" ");
});

//Crea el array a [1,2,3,4,5] y b [6,7,8,9,10] con literales. Concatena los arrays a y b con concat.
// Después con operador spread. Crea una variable const cola.
// Usa unshift y shift para añadir y quitar elementos.
// Dado el array resultante de la concatenación de a y b, obten el subarray desde el índice 2 al penúltimo elemento (slice).
// Usa splice para quitar los 2 últimos elementos de un array.
const a = [1, 2, 3, 4, 5];
const b = [6, 7, 8, 9, 10];
const concat = a.concat(b);
const spread = [...a, ...b];
const cola = [];
cola.unshift(1);
cola.unshift(2);
cola.unshift(3);
cola.unshift(4);
cola.unshift(5);
cola.shift();
cola.shift();
const subArray = concat.slice(2, concat.length - 1);
concat.splice(concat.length - 2, 2);
console.log(concat);

//Rellena con fill un array de 100 elementos con -1.
const arrayElementos = new Array(100).fill(-1)
console.log(arrayElementos);

//Crea un array de cadenas, Busca con indexOf una cadena.
const arrayString = ["Diseño", "Interfaces", "2Dam"];
arrayString.indexOf("Interfaces");

//Comprueba si la cadena "hola" está dentro del array anterior.
console.log(arrayString.includes("hola"));

//Ordena la lista de cadenas anterior de forma alfabética con sort.
arrayString.sort();
console.log(arrayString);

//Crea un array vacío de 50 posiciones. Con forEach asigna valores aleatorios entre 0 y 100. Después ordena con sort de menor a mayor. Cambia y ordena de mayor a menor.
const arrayVacio = new Array(50);
arrayVacio.forEach(function (elemento) {
    elemento = Math.floor(Math.random() * 100);
});
console.log(arrayVacio.sort());

//Usa reverse para invertir el array anterior.
console.log(arrayVacio.reverse());
