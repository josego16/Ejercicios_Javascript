//Desestructura día, mes y año e imprime la fecha dado el array ['06', 'Octubre','2021'];
const fecha = ['06', 'Octubre', '2021'];
const [dia, mes, anno] = fecha;
console.log(`${dia} de ${mes} del ${anno}`);

//Dado un array de números, desestructura los números en posiciones impares.
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const [, , tercer, , quinto, , septimo, , noveno] = numeros;
console.log(tercer, quinto, septimo, noveno);

//Desestructura el primer número, el segundo y el resto en otra variable.
const [num1, num2, ...resto] = numeros;
console.log(num1, num2, resto);

//Desestructura nombre, apellidos y teléfono del siguiente objeto.
const person = {
    nombre: 'Luis', apellidos: 'Molina', telefono: '+34666554433'
};
const {nombre, apellidos, telefono} = person;
console.log(nombre, apellidos, telefono);

//Cambia el siguiente bucle para desestructurar cada entrada e imprimir llave,valor por separado.
for (const propertie of Object.entries(person)) {
    console.log(propertie);
}
for (const [key, value] of Object.entries(person)) {
    console.log(key, value);
}

//Dado [{x: 1, y: 2}, {x: 3, y: 4}], desestructura los puntos en las variables x1, y1, x2, y2.
const array = [{x: 1, y: 2}, {x: 3, y: 4}];
const [{x: x1, y: y1}, {x: x2, y: y2}] = array;
console.log(x1, y1, x2, y2);

//Crea una función a la que le pasas un único objeto como parámetro con 5 propiedades cualquiera incluida la propiedad nombre y apellidos.
// Desestructura en la función la propiedad nombre y apellidos e imprime el nombre completo.
const persona = {
    nombre: 'Jose Maria', apellidos: 'Gomez Liñan', edad: 23, pueblo: 'Arroyo del Ojanco', provincia: 'Jaen'
};
const nombreCompleto = ({nombre, apellidos}) => console.log(`${nombre} ${apellidos}`);
nombreCompleto(persona);

//Dados dos objetos, combínalos en uno solo utilizando el operador spread.
// Después elimina alguna de las propiedades.
const coche1 = {
    nombre: 'Aston Martin', fabricado: 'Inglaterra', fabrica: 'Aston Martin'
};
const coche2 = {
    piloto: 'Fernando Alonso', fecha: 2023, nacionalidad: 'Español'
};
const coche3 = {...coche1, ...coche2};
delete coche3.fecha;
console.log(coche3);

//Crea una función que retorna un array con 3 valores. Usa la función y desestructura los valores.
const funcion = (a, b, c) => [a, b, c];
const [valor1, valor2, valor3] = funcion(1, 2, 3);
console.log(valor1, valor2, valor3);

//Realiza una clonación profunda de un objeto que contiene otros objetos o arrays como propiedades.
const comic = {
    titulo: 'Batman', personajes: ['Batman', 'Joker', 'Robin', 'Gordon'], autor: {
        nombre: 'Frank', apellidos: 'Miller'
    }
};
const comic2 = {...comic};
console.log(comic2);
comic2.autor.nombre = 'Alan';
console.log(comic2);