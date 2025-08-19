//Raphael e Lucas Novais
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form')
    const number = parseInt(Math.random() * 20)
    const output = document.getElementById('output')
    const counter = document.getElementById('counter')
    const trials = document.getElementById('trials')
    let history = []
    let mark = []
    let tentatives = 1

    for (let i = 0; i < 100; ++i) mark[i] = false

    form.addEventListener('submit', function(event) {
        event.preventDefault() 

        let input = Number(document.getElementById("number").value)

        if (mark[input]) {
            output.textContent = "Você já escolheu esse número!"
            return
        } 
    
        if (!(input >= 1 && input <= 100)) {
            output.textContent = "Número inválido!"
            return
        } 
        
        mark[input] = true
        if (input === number) output.textContent = "Acertou, o número era: " + number
        else if (input < number) output.textContent = "Muito baixo"
        else output.textContent = "Muito Alto"
        
        counter.textContent = "Número de tentativas: " + tentatives
        ++tentatives

        history.push(input)
        trials.textContent = "Palpites anteriores: " + history.join(', ')

    })

})