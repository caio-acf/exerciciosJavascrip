// par nome/valor
const saudacao = 'Opa'; // contexto léxico 1

function exec() {
    const saudacao = 'Falaaaa'; // ontexto léxico 2
    return saudacao;
};

// Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Caio',
    idade: 36,
    peso: 110,
    endereco: {
        logradouro: 'Rua Muito legal',
        numero: 123
    }
}

console.log(saudacao);
console.log(exec());
console.log(cliente);