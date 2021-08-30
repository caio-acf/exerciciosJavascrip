const peso1 = 1.0;
const peso2 = Number('2.0'); // Transforma em numero

console.log(peso1, peso2);
console.log(Number.isInteger(peso1)); // Pergunta se o numero é inteiro.
console.log(Number.isInteger(peso2));

const avalicao1 = 9.871
const avalicao2 = 6.871

const total = avalicao1 * peso1 + avalicao2 * peso2;
const media = total / (peso1 + peso2);

console.log(media.toFixed(2)); //Fixando o numero em 2 casa decimais.
// console.log(media.toString()); //Transforma variavel  const media em String
console.log(media.toString(2)); //Converter em número binario.
console.log(typeof media);
console.log(typeof Number);