//Crea una función que calcule el factorial de un número usando un bucle.
const factorial = (num) => {
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i;
    }
    return result;
}
console.log("El factorial es: " + factorial(5));