const escola = "Cod3r";

console.log(escola.charAt(4)); // CharAt(0) indice do character começando do 0.
console.log(escola.charAt(5)); //Gerando um erro
console.log(escola.charCodeAt(3)); //Tabela Ask ou unicode
console.log(escola.indexOf('3')); //Saber em que indice o caracter esta.

console.log(escola.substring(1)); //inclui a String do indice 1 ate o ultimo.
console.log(escola.substring(0, 3)); //inclui a String do indice 0 vai ate o indice 3 e não inclui o indice 3;

console.log('Escola '.concat(escola).concat("!")); // ou poderia ter subtituido por console.log('Escola '+ escola + "!");
console.log(escola.replace(3, 'e')); //Regex

console.log('Ana,Maira,Pedro'.split(',')) //split gera um Array de acordo com o seperador (',')