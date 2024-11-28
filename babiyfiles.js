const fs = require('node:fs');

const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

fs.readFile('1.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
});


const lastLetters = lorem.split(' ')
    .map(word => {

        const cleanWord = word.replace(/[^\w]/g, '');

        return cleanWord.slice(-1).toUpperCase();
    })
    .filter(letter => letter) 
    .join(''); 


fs.writeFile('lastLetters.txt', lastLetters, 'utf8', (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('Файл lastLetters.txt успішно створено!');
});