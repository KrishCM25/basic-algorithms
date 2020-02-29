 * Cuántas veces se repite una palabra en una frase?
 *
 * Entrada: Frase, palabra que se repite
 * Salida: número de veces que se repite la palabra
*/
function repeat(phrase, word){
    return (phrase.split(word).length-1);
}
console.log(repeat("Hola GranMundoMundial","a"));
