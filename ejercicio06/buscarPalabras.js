const buscarPalabras = (texto, palabra) => {
    let result = [];
    let pos = texto.indexOf(palabra);
    while (pos !== -1) {
        result.push(pos);
        pos = texto.indexOf(palabra, pos + 1);
    }
    return result;
}
console.log(buscarPalabras("Hola mundo. Adios mundo.", "mundo"));