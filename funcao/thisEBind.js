const pessoa = {
    saudade: 'Bom dia',
    falar() {
        console.log(this.saudade)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // conflito entre paradigmas: funcional e 00

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()