function generarNumeros() {
    let array = [];
    for (let i = 0; i < 1000; i++) {
        array.push(Math.floor(Math.random() * 100));
    }
    return array;
}

let array = generarNumeros();
console.log(array);

function mediaAritmetica(array) {
    let suma = 0;
    for (let i = 0; i < array.length; i++) {
        suma += array[i];
    }
    return suma / array.length;
}

console.log("La media arimetica es: " + mediaAritmetica(array));

function ordenar(array) {
    return array.sort(function (a, b) {
        return a - b;
    });
}

console.log(ordenar(array));
