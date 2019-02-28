(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
//All of my generators
//My global variables:
var schild_mit_ein_ziffer = 0;

//Function for random number:
module.exports.getRandomNumber = function randomNumber(){//between 1 and 9999
    let minZufall = 1, maxZufall = 9999;
    let zufaelligeZahl = Math.floor(Math.random() * (maxZufall - minZufall)) + minZufall;
    return zufaelligeZahl;
}

//Function to get random Letter:
module.exports.getRandomLetter = function randomLetter(){
    let anfangAlphaBet = 1, endeAlphaBet = 25;//Vom ersten Buchstaben bis zum letzten Buchstaben des deutschen Alphabets (Ohne "W").
    let zufaelligerBuchstabenWert = Math.floor(Math.random() * (endeAlphaBet - anfangAlphaBet)) + anfangAlphaBet;
    //With switch-case get a Letter:
    switch (zufaelligerBuchstabenWert){
        case 1:
         let aA = "A";
         return aA;
        case 2:
         let bB = "B";
         return bB;
        case 3:
         let cC = "C";
         return cC;
        case 4:
         let dD = "D";
         return dD;
        case 5:
         let eE = "E";
         return eE;
        case 6:
         let fF = "F";
         return fF;
        case 7:
         let gG = "G";
         return gG;
        case 8:
         let hH = "H";
         return hH;
        case 9:
         let iI = "I";
         return iI;
        case 10:
         let jJ = "J";
         return jJ;
        case 11:
         let kK = "K";
         return kK;
        case 12:
         let lL = "L";
         return lL;
        case 13:
         let mM = "M";
         return mM;
        case 14:
         let nN = "N";
         return nN;
        case 15:
         let oO = "O";
         return oO;
        case 16:
         let pP = "P";
         return pP;
        case 17:
         let qQ = "Q";
         return qQ;
        case 18:
         let rR = "R";
         return rR;
        case 19:
         let sS = "S";
         return sS;
        case 20:
         let tT = "T";
         return tT;
        case 21:
         let uU = "U";
         return uU;
        case 22:
         let vV = "V";
         return vV;
        case 23: //Insteat of W
         let oeOE = "Ö";
         return oeOE;
        case 24:
         let xX = "X";
         return xX;
        case 25:
         let yY = "Y";
         return yY;
        case 26:
         let zZ = "Z";
         return zZ;
        }
}

module.exports.getCountryletter = function landZeichen(){
    const kuerzelLaenderEU = ["D","B","F","I","L","M","A","H","E","S","L","BG","DK","EST","FIN","GR","IRL","HR","LV","LT","NL","PL","RO","SK","SLO","CZ","CY"];
    const kuerzelLaenderEU01 = ["D","B","F","I","L","M","A","H","E","S","L"];
    let euLandZero = 0, euLandLast = kuerzelLaenderEU01.length;
    let zufaelligerBuchstabenWert = Math.floor(Math.random() * (euLandLast - euLandZero)) + euLandZero;
    console.log(kuerzelLaenderEU01[zufaelligerBuchstabenWert]);
    return kuerzelLaenderEU01[zufaelligerBuchstabenWert];
}



//Function to check how often appear signs with only one number on it:
function erstelleSchild(){
    var letzterWert = randomNumber();
    var nummernSchild = "FD " + randomLetter() + randomLetter() + " " + letzterWert;
    if (letzterWert <= 9 ){
        schild_mit_ein_ziffer++;
        console.error("Schild Nummer: " + schild_mit_ein_ziffer + "Das Schild -> " + nummernSchild);
    } else {
        schild_mit_ein_ziffer += 0;
        console.log(nummernSchild);
    }
}





},{}],2:[function(require,module,exports){
//create all elements:
const ofFuSchilder = require('./FunktionsSchilder.js');
const schwarzerRahmen = document.createElement("div");
const weißeInnenflaeche = document.createElement("div");
const blauesLandZeichen = document.createElement("div");
const unionZeichen = document.createElement("div");//contents YellowStars picture
const landBuchstabe = document.createElement("h1");
const stadtKennungKontainer = document.createElement("div");
const stadtKennungBuchstabe = document.createElement("h1");
const aUhUcontainer = document.createElement("div");
const aUsiegel = document.createElement("div");
const hUsiegel = document.createElement("div");
const buchstabenKennung = document.createElement("div");
const nummer = document.createElement("div");
//Append to document:
document.body.append(schwarzerRahmen);
schwarzerRahmen.appendChild(weißeInnenflaeche);
weißeInnenflaeche.appendChild(blauesLandZeichen);
weißeInnenflaeche.appendChild(stadtKennungKontainer);
stadtKennungKontainer.appendChild(stadtKennungBuchstabe);
weißeInnenflaeche.appendChild(aUhUcontainer);
aUhUcontainer.appendChild(aUsiegel);
aUhUcontainer.appendChild(hUsiegel);
weißeInnenflaeche.appendChild(blauesLandZeichen);
blauesLandZeichen.appendChild(unionZeichen);
blauesLandZeichen.appendChild(landBuchstabe);
weißeInnenflaeche.appendChild(buchstabenKennung);
weißeInnenflaeche.appendChild(nummer);
//The whole numbersign
class nummernschild {
    constructor(){
        //Styling of black borderbackground sign:
        schwarzerRahmen.style.position = 'absolute';
        //schwarzerRahmen.style.left = 300 + 'px'; //if sign will move -> every div will move too.
        schwarzerRahmen.style.width = 800 + 'px';
        schwarzerRahmen.style.height = 350 + 'px';
        schwarzerRahmen.style.backgroundColor = 'black';
        schwarzerRahmen.style.borderRadius = 5 + '%';
        //Styling of white sign:
        weißeInnenflaeche.style.position = 'relative';
        //weißeInnenflaeche.style.cssFloat = 'left';
        weißeInnenflaeche.style.top = 25 + 'px';
        weißeInnenflaeche.style.left = 25 + 'px';
        weißeInnenflaeche.style.width = 750 + 'px';
        weißeInnenflaeche.style.height = 300 + 'px';
        weißeInnenflaeche.style.backgroundColor = 'white';
        weißeInnenflaeche.style.borderRadius = 3 + '%';
        //Styling of the country-tag:
        blauesLandZeichen.style.position = 'relative';
        blauesLandZeichen.style.cssFloat = 'left'; //Please check what happens with div's while Float!
        blauesLandZeichen.style.bottom = 300 + 'px';
        blauesLandZeichen.style.right = 265 + 'px'; //Special move
        blauesLandZeichen.style.width =  120 + 'px';
        blauesLandZeichen.style.height = 300 + 'px';
        blauesLandZeichen.style.backgroundColor = 'blue';
        blauesLandZeichen.style.borderRadius = 3 + '%' + ' ' + 0 + ' ' + 0 + ' ' + 3 + '%';
        //Add Union emblem to blauesLandZeichen:
        unionZeichen.style.position = 'relative';
        unionZeichen.style.top = 20 + 'px'; 
        unionZeichen.style.left = 7 + 'px';
        unionZeichen.style.width = 105 + 'px';
        unionZeichen.style.height = 105 + 'px';
        unionZeichen.style.backgroundImage = 'url(NummernschildBeispiele/300px-European_starss.png)';
        unionZeichen.style.backgroundSize = 100 + '%';
        //Add big letter to blauesLandZeichen:
        //Configure countryletters -> The first 11 have to be fit like at blue field like the last.
        landBuchstabe.style.position = 'relative';
        landBuchstabe.style.color = 'white';
        landBuchstabe.style.fontFamily = 'sans-serif';
        landBuchstabe.style.fontSize = 820 + '%';
        landBuchstabe.style.bottom = 35 + 'px';
        landBuchstabe.style.left = 10 + 'px';
        //Make change aviable with a funtion for all 12 European-countries.
        landBuchstabe.innerHTML = ofFuSchilder.getCountryletter();
        //Add Container for townLetter to weißeInnenflaeche:
        stadtKennungKontainer.style.position = 'relative';
        stadtKennungKontainer.style.left = 120 + 'px';
        stadtKennungKontainer.style.width = 150 + 'px';
        stadtKennungKontainer.style.height = 300 + 'px';
        stadtKennungKontainer.style.backgroundColor = 'tomato';
        //Add letter to townLetter-Container:
        stadtKennungBuchstabe.style.position = 'relative';
        stadtKennungBuchstabe.style.cssFloat = 'left';
        stadtKennungBuchstabe.style.bottom = 50 + 'px';
        stadtKennungBuchstabe.style.left = 10 + 'px';
        stadtKennungBuchstabe.style.color = 'black' ;
        stadtKennungBuchstabe.style.fontFamily = 'sans-serif';
        stadtKennungBuchstabe.style.fontSize = 1000 + '%';
        stadtKennungBuchstabe.style.height = 200 + 'px';
        stadtKennungBuchstabe.style.width = 140 + 'px';
        stadtKennungBuchstabe.innerHTML = ofFuSchilder.getRandomLetter();
        //Add Container for HuAu circles:
        aUhUcontainer.style.position = 'relative';
        aUhUcontainer.style.cssFloat = 'left';
        aUhUcontainer.style.bottom = 300 + 'px';
        aUhUcontainer.style.left = 130 + 'px';
        aUhUcontainer.style.width = 125 + 'px';
        aUhUcontainer.style.height = 300 + 'px';
        aUhUcontainer.style.backgroundColor = 'cyan';
        
    }
}

function aktualisiereSchild(){
    let schild = new nummernschild(); 
}

setInterval(aktualisiereSchild, 50);

},{"./FunktionsSchilder.js":1}]},{},[2]);
