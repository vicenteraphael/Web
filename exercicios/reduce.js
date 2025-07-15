//qual a saída?

let elementos = [2, 5, 1, 4, 6, 7]
let algo = elementos.reduce((acc, valor) => valor % 2 === 0 ? acc + valor : acc, 0) / elementos.length

console.log(algo)