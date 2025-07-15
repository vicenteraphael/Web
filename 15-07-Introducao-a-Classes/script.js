/*
UML:

|-----------------|
|      Carro      |
|-----------------|
| +marca          |
| +modelo         |
| +ano            |
|-----------------|
| detalhesDoCarro |
|-----------------|

*/


class Carro {
    constructor(marca, modelo, ano) {
        this.marca =  marca
        this.modelo = modelo
        this.ano = ano
    }
    detalhesDoCarro() {
        return `CARRO:\nMarca: ${this.marca}\nModelo: ${this.modelo}\nAno: ${this.ano}`
    }
}

let carrin = new Carro("Renault", "Sandero", 2015)
console.log(carrin.detalhesDoCarro())