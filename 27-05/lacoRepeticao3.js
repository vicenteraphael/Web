// Validação de sexo

do {
    let texto = "Feminino"
    let sexo = texto.charAt(0)

    if (sexo != 'F' && sexo != 'M') console.log("Erro")

} while (sexo != 'F' && sexo != 'M')

console.log("Sexo confirmado")