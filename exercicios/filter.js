/*
faça um código que percorra um array
contendo os números inteiros
de 1 a 100 e gere um novo
array contendo apenas os números 
divisíveis por 7.
*/

let arr = new Array(100)
for (let i = 1; i < 100; ++i) arr.push(i)
let newArr = arr.filter(value => value % 7 === 0)
console.log(newArr)