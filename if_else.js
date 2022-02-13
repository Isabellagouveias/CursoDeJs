/*if(true) {
    console.log('Exec...');
} else 
    console.log('Não exec...');

if(false) 
    console.log('Não exec..');
else {
    console.log('Exec...');
}*/

/*const hora = 23;
let saudacao;

if (hora < 12) {
    saudacao = 'Bom dia!'
} else {
    saudacao = 'Boa tarde';
}  

console.log(saudacao);*/

/*const hora = 23;
let saudacao;

if (hora < 12) {
    saudacao = 'Bom dia'
} else {
    if (hora < 18) {
        saudacao = 'Boa tarde';
    } else {
        if (hora < 23) {
            saudacao = 'Boa noite';
        } else {
            saudacao = 'Muito tarde!';
        }
    }

}
console.log(saudacao); // não é uma forma muito usual */ 

const a = 10;
const b = 28;
const operacao = '*'; // + - * / %

let resultado;

// if ... else if ... else
if(operacao === '+') {
    resultado = a + b;
} else if (operacao === '-') { 
    resultado = a - b;
} else if(operacao === '*'){
    resultado = a * b;
} else if(operacao === '%'){
    resultado = a % b;
}

console.log(resultado);
