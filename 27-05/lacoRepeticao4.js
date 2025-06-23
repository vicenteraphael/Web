/*Utilizando o laço de repetição do...while,
imprima o primeiro número divisível por 19.
Leve em consideração o valor do primeiro número 100
e o segundo número 200
*/

let val1 = 100;

do {
    if (val1 % 19 == 0) {
        console.log(val1)
        break
    }
    ++val1
} while (val1 <= 200)