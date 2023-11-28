//Crea una cadena multilínea con comillas dobles.
const array = " a ante bajo con contra\n de desde durante en entre hacia hasta\n mediante para por segun sin sobre tras";
console.log(array);

//Añade a la cadena algún retorno de carro y tabuladores con el símbolo de escape.
const arrayCarro = "\n È un mondo difficile\n E vita intensa";
const arrayConcatenada = "\n Jose maria" + " Gomez Liñan";
console.log(arrayCarro + "\n" + arrayConcatenada);

//Añade a la cadena el carácter \.
const arrayCaracter = "\n \\";
console.log(arrayCaracter);

//Concatena otra cadena con el operador +.
const template = ` El valor de pi es ${Math.PI}` + `\n y sirve para realizar operaciones matematicas`;
console.log("\n" + template)

//Separa un texto que tenga varias frases en un array que tenga cada frase por separado.
const texto = "El mundo es un lugar maravilloso";
const arrayTexto = texto.split(" ");
console.log(arrayTexto);

//Concatena cadenas usando una template string, muestra el valor de varias variables en el template string.
const nombre = "Jose Maria";
const apellido = "Gomez Liñan";
const edad = 21;
const templateV2 = `Mi nombre es ${nombre} ${apellido} y tengo ${edad} años`;
console.log("\n" + templateV2);

//Convierte un texto dado a minúsculas.
const textoMayus = " ESTOY CANSADO JEFE";
console.log("\n" + textoMayus.toLowerCase());

//Convierte un texto dado a mayúsculas.
const textoMinus = " mi primera chamba";
console.log("\n" + textoMinus.toLocaleUpperCase());

//Recorre con un bucle el texto caracter a caracter imprimiéndolo.
for (let index = 0; index < textoMayus.length; index++) {
    console.log(textoMayus[index]);
}

//Busca una subcadena en un texto.
const subcadena = textoMinus.substring(12, 18);
console.log(subcadena);

//Extrae en una variable la subcadena desde la posición 3 hasta el final del texto.
const subcadenaV2 = textoMinus.substring(3);
console.log(subcadenaV2)

//Reemplaza todos los espacios del texto por un -.
const reemplazar = textoMayus.replace(/\s+/g, "-");
console.log(reemplazar);

//Elimina los espacios antes y después del texto.
const replace = textoMayus.replace(/\s+/g, "");
console.log(replace);

//Cree una cadena que no tenga ningun espacio partiendo de otra cadena dada.
const cadena = "Diseño de interfaces 2Dam";
const cadenaSinEspacios = cadena.replace(/\s+/g, "");
console.log(cadenaSinEspacios);

//Crea una función que invierta una cadena de texto.

//Usa una expresión regular para comprobar que la cadena tiene números.
const cadenaNum = "123456789";
const cadenaNumV2 = "Jose Maria G0mez Liñan";
const regexNumeros = /\d+/;
console.log(regexNumeros.test(cadenaNum));
console.log(regexNumeros.test(cadenaNumV2));

//Usa una expresión regular para comprobar que la cadena termina en punto.
const cadenaPunto = "Hola Mundo.";
const cadenaPuntoV2 = "Hola Mundo";
const regexPunto = /\.$/;
console.log(regexPunto.test(cadenaPunto));
console.log(regexPunto.test(cadenaPuntoV2));

//Usa una expresión regular para comprobar que la cadena comienza por una mayúscula.
const cadenaMayus = "Hola Mundo";
const cadenaMayusV2 = "hola Mundo";
const regexMayus = /^[A-Z]/;
console.log(regexMayus.test(cadenaMayus));
console.log(regexMayus.test(cadenaMayusV2));

//Usa una expresión regular para comprobar si la cadena contiene un teléfono con código internacional.
const cadenaTelefono = "+34 687643290";
const cadenaTelefonoV2 = "687643290";
const regexTelefono = /^\+\d{2}\s\d{9}$/;
console.log(regexTelefono.test(cadenaTelefono));
console.log(regexTelefono.test(cadenaTelefonoV2));

//Reemplaza cualquier ocurrencia de un + seguido de números por la cadena SECRETO.
const cadenaSecreta = "+123456789";
const regexSecreta = /\+\d+/g;
console.log(cadenaSecreta.replace(regexSecreta, "SECRETO"));