//qual será a saída?

let map = new Map([
    ["Marcos", 1],
    ["Daniel", 2],
    ["Pedro", 3],
    ["marcos", 4],
])
let compara = "Marcos"
for (const [nome, id] of map)
    console.log((nome === compara)+": "+id)