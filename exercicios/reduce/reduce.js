//solução 1:
let elementos = [2, 5, 1, 4, 6, 7]
let vals = elementos.reduce((acc, valor) => valor % 2 === 0 ? [acc[0]+1, acc[1] + valor] : acc, [0,0])

console.log(vals[1]/vals[0])

//solução 2:
let elements = [2, 5, 1, 4, 6, 7]
var counter = 0
let media = elements.reduce((acc, valor) => {
    if (valor % 2 === 0) {
        ++counter;
        return acc+valor
    }
    return acc
}, 0) / counter

console.log(media)

//4