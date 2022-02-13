let listaDePessoasAprovadas = [
    'ada.lovelace@example.com',
    'maria.curie@example.com',
    'margaret.hamilton@example.com',
    'alan.turing@example.com'
];

const enviarEmail = (email) => {
    console.log(`Email para ${email} foi enviado com sucesso!`);
};

listaDePessoasAprovadas.forEach((item, posicao, array) => {
    enviarEmail(item);
    console.log(`Sua posição é a de: ${posicao}`);
    console.log(`A quantidade de pessoas no processo seletivo é: ${array.length}`);
    
})



