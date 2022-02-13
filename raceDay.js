let raceNumber = Math.floor(Math.random() * 1000);
let status = true;
let age = 16;

if (age > 18 && status === true) {
    raceNumber += 1000;
}

if (age > 18 && status === true) {
    console.log('Your race begins at 9:30am and your race number is:' + raceNumber);
} else if (age > 18 && status === false) {
  console.log('Your race begins at 11:00 am and your race number is:' + raceNumber);
} else if (age < 18) {
  console.log('Your race begins at 12:30am and your race number is:' + raceNumber);
} else { 
  console.log('Please register first!');
}
