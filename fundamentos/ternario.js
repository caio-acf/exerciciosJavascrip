const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'
// variavel = função => variavel >=(conparador) ? (verdadeiro ou falso) 'Aprovado' : 'Reprovado' (retorno de verdadeiro ou falso)

/* Outra forma de se ver a expressão acima
    const resultado = nota => {
        return nota >= 7 ? 'Aprovado' : 'Reprovado'
    }
*/

console.log(resultado(7.1))
console.log(resultado(6.7))