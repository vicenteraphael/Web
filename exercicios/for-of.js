/*
faça um código que percorra um array de strings
e concatene o 1º caractere de cada string desse array
a uma outra variavel string esta string final
*/

let nomes = [
    "MariaFernanda", "Samuel", "Tatiana"
]
let str = new String()
for (nome of nomes) str += nome[0]
console.log(str)