const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

const secretMessage = animals.map(el => {return el[0]});

console.log(secretMessage.join(''));

const bigNumbers = [100, 200, 300, 400, 500];

const smallNumbers = bigNumbers.map(el => {
  return el/100
});

console.log(smallNumbers);