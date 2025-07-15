/*
faça um código que percorra um
array de caracteres e faça com que:
1) os caracteres em índices pares
    fiquem com letra maiúscula
2) os caracteres em índices ímpares
    fiquem com letra minúscula
use o método map para alterar o array original
e exiba a string final usando a função join
*/

let palavra = ['a', 'd', 'e', 'i', 'l', 't', 'o', 'n']
palavra.map((valor, i, arr) => i % 2 === 0 ? arr[i] = valor.toUpperCase() : arr[i] = valor.toLowerCase())

console.log(palavra.join(''))