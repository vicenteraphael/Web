//Trabalhando com array

const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4]) //não tem esse índice

valores[4] = 10 //incluindo valor
console.log(valores[4]) //exibindo o valor

valores[10] = 20
console.log(valores[10])
console.log(valores)

console.log(valores.length) //varre o array

//inserindo mais valores no array
valores.push({id:3}, false, null, 'teste')
console.log(valores)

//inserindo mais valores no array
console.log(valores.pop())
delete valores[0]
console.log(valores)

console.log(typeof valores)