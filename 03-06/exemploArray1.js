let aprovados

//Criando um array
aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados)

aprovados.splice(1, 1)
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados)

aprovados.splice(1, 2)
console.log(aprovados)

//inserir elementos
aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados)

aprovados.splice(1, 2, 'Elemento1', 'Elemento2')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados)

aprovados.splice(1, 0, 'Elemento1', 'Elemento2')
console.log(aprovados)