//All of my generators
//My global variables:
var schild_mit_ein_ziffer = 0;

//Function for random number:
module.exports.getRandomNumber = function randomNumber(){//between 1 and 9999
    let minZufall = 1, maxZufall = 99;
    let zufaelligeZahl = Math.floor(Math.random() * (maxZufall - minZufall)) + minZufall;
    return zufaelligeZahl;
}

module.exports.getTuevNummber = function TuevNummber(){
    let minTUEV = 0, maxTUEV = 6;
    let randomZahl = Math.floor(Math.random() * (maxTUEV - minTUEV)) + minTUEV;
    return randomZahl;
}

module.exports.getAuNummber = function AuNummber(){
    let minAU = 0, maxAU = 3;
    let randomZahl = Math.floor(Math.random() * (maxAU - minAU)) + minAU;
    return randomZahl;
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

module.exports.getAutohaus = function Autohaus(){
    let min = 0, max = 31, random = 0;
    random = Math.floor(Math.random() * (max - min)) + min;
    return random;
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




