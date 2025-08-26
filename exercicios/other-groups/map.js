//tanaka e bilibio
const lista = [
    {nome: 'Camiseta', preco: 50, imposto: 10},
    {nome: 'Calça', preco: 100, imposto: 15},
    {nome: 'Tênis', preco: 200, imposto: 20},
]
let newList = lista.map(({nome, preco, imposto}) => ({nome: nome, preco: preco+preco*imposto/100}))

console.log(newList);