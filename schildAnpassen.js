var aEins = require('./FunktionsSchilder.js');

function showLetter(){
    console.log(aEins.getRandomLetter());
}

setInterval(showLetter, 1000);