const names = ['Sina', 'Sam', 'Qoli', 'Ben', 'Zoe', 'Quentin', 'Ala']

names
    .filter(isNotQ);
    .filter(isMinimum5);
    .map(convertToEl);

function isNotQ(n) {
    return n[0] !== 'Q';
}

function isMinimum5(n) {
    return n.length >= 5;
}

function convertToEl(n) {
    const el = document.createElement('p');
    el.innerText = n;
    return el;
}