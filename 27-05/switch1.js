// Criando um menu

let opcao = 'd'

console.log("Escolha:\n\n(s) - Solteire\n(c) - Casade\n(d) - Divorciade\n")

switch (opcao) {
    case 's':
        console.log("Solteire")
        break
    case 'c':
        console.log("Casade!")
        break
    case 'd':
        console.log("Divorciade!")
        break
    default:
        console.log("Inexistente")
        break
}