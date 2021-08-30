const valores = [7.7, 8.9, 6.3, 9.2];
console.log(valores[0], valores[3]);
console.log(valores[4]);

valores[4] = 10;
console.log(valores);
console.log(valores.length) // .length da o valor de quantos elementos o array tem.

valores.push({id: 3}, false, null, 'teste'); //adicionando elementos em um array com push.
console.log(valores);

console.log(valores.pop()); //retirar  o valor do array
delete valores[0];

console.log(typeof valores);