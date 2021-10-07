// Função construtora 

// Expressão new
// Criar um novo objeto
// This keyword

function Person(name) {
    this.name = name
    this.walk = function () {
        return this.name + " esta andando"
    }
}
const arnon = new Person("Arnon")
const joao = new Person("João")
console.log(arnon)
console.log(joao.walk())

const name1 = new String("joao")

console.log(name1)

let data = new Date("2021-10-07")
console.log(data)
