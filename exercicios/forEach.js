/**
faça um código em javascript que
percorre um array de números inteiros
e que, para cada elemento, exiba
a distância entre si mesmo e o
e seu oposto na reta real (usando
o método forEach)
*/

let numeros = Array(1, -2, 3, 4, -5)
numeros.forEach((numero) => console.log(Math.abs(numero*2)))
