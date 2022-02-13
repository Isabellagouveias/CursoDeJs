let temDinheiro = true;
let estaEnsolarado = false;
let carroEstaNaGaragem = true;

let resultadoE = '#1 (AND) - Vai pro Shopping?';
resultadoE += temDinheiro && estaEnsolarado;

console.log(resultadoE)

let resultadoOU = '#2 (OR) - Vai pro Shopping?';
resultadoOU += estaEnsolarado || carroEstaNaGaragem;
console.log(resultadoOU);

console.log(true ^ false);

const t1 = false;
const t2 = false;

let comprarTV50 = t1 && t2; // AND
console.log('Vamos comprar a TV 50"?' , comprarTV50); 

let comprarTV32 = t1 && t2; // XOR
console.log('Vamos comprar a TV 32"?' , comprarTV32);  

let tomarSorvete = t1 && t2; // OR
console.log('Vamos comprar sorvete"?' , tomarSorvete); 

let ficarEmCasa = !tomarSorvete; // NOT
console.log('Vamos ficar em casa"?' , ficarEmCasa); 






