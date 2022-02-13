const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below
const smallNumbers = randomNumbers.filter(el => {
  return el <250
})

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];

// Call .filter() on favoriteWords below
 
const longFavoriteWords = favoriteWords.filter(el => {
  if(el.length > 7){return el}
});

