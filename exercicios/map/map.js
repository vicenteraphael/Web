let palavra = ['a', 'd', 'e', 'i', 'l', 't', 'o', 'n']
palavra.map((valor, i, arr) => i % 2 === 0 ? arr[i] = valor.toUpperCase() : arr[i] = valor.toLowerCase())

console.log(palavra.join(''))