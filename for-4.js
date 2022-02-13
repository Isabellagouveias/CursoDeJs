// [1,1] [1,2] [1,3]
// [2,1] [2,2] [2,3]
// [3,1] [3,2] [3,3]

for (let i =1; i <=3; i++) {
   let linha = '';
    for(let j = 1; j<=3; j++){
        linha += `[${i}, ${j}]`;
    }
    console.log(linha);
}

for(let s = '#'; s != '#######'; s += '#') {
    console.log(s); // quando o valor chegou a 7 passou a ser falsa e saiu do laço FOR
}