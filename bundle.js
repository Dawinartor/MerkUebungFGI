(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
    }
}





},{}],2:[function(require,module,exports){
//create all elements:
const ofFuSchilder = require('./FunktionsSchilder.js');
const schwarzerRahmen = document.createElement("div");
const autohausSchriftzug = document.createElement("p");
const weißeInnenflaeche = document.createElement("div");
const blauesLandZeichen = document.createElement("div");
const unionZeichen = document.createElement("div");//contents YellowStars picture
const landBuchstabe = document.createElement("h1");
const stadtKennungKontainer = document.createElement("div");
const stadtKennungBuchstabe = document.createElement("h1");
const aUhUcontainer = document.createElement("div");
const aUsiegel = document.createElement("div");
const hUsiegel = document.createElement("div");
const buchstabenKennungContainer = document.createElement("div");
const buchstabenKennung = document.createElement("h1");
const nummerContainer = document.createElement("div");
const nummer = document.createElement("h1");
const eingabeForm = document.getElementById("EingabeFORM");
const eingabeFeld = document.getElementById("EingabeFELD");
const eingabeButton = document.getElementById("EingabeButton");
const errateneSchilder = document.createElement("div");
var Count = 0;
//To check da because I need a timer for three minutes:
var myCounter = 0;
const maxCounter = 29;//Equal to three minutes.
//Array for my Signs:
var gatheringCarsigns = [];
//Append to document:
document.body.append(schwarzerRahmen);
schwarzerRahmen.appendChild(weißeInnenflaeche);
schwarzerRahmen.appendChild(autohausSchriftzug);
weißeInnenflaeche.appendChild(blauesLandZeichen);
weißeInnenflaeche.appendChild(stadtKennungKontainer);
stadtKennungKontainer.appendChild(stadtKennungBuchstabe);
weißeInnenflaeche.appendChild(aUhUcontainer);
aUhUcontainer.appendChild(aUsiegel);
aUhUcontainer.appendChild(hUsiegel);
weißeInnenflaeche.appendChild(blauesLandZeichen);
blauesLandZeichen.appendChild(unionZeichen);
blauesLandZeichen.appendChild(landBuchstabe);
weißeInnenflaeche.appendChild(buchstabenKennungContainer);
buchstabenKennungContainer.appendChild(buchstabenKennung);
weißeInnenflaeche.appendChild(nummerContainer);
nummerContainer.appendChild(nummer);
document.body.appendChild(errateneSchilder);
//Add clickFunction to my button:
eingabeButton.addEventListener("click", checkInputWithSign);
//Configure the Input-Form:
//eingabeFeld.style.margin = 0;
//The whole numbersign
class nummernschild {
    constructor(){
        //Styling of black borderbackground sign:
        schwarzerRahmen.style.position = 'absolute';
        schwarzerRahmen.style.cssFloat = 'left';
        var a = ((window.innerHeight / 2) - 250) + "px";
        var b = ((window.innerWidth / 2) - 350) + "px";
        schwarzerRahmen.style.top = a;
        schwarzerRahmen.style.left = b; //if sign will move -> every div will move too.
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
        stadtKennungKontainer.style.left = 115 + 'px';
        stadtKennungKontainer.style.width = 145 + 'px';
        stadtKennungKontainer.style.height = 300 + 'px';
        stadtKennungKontainer.style.backgroundColor = 'white';
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
        aUhUcontainer.style.left = 120 + 'px';
        aUhUcontainer.style.width = 120 + 'px';
        aUhUcontainer.style.height = 300 + 'px';
        aUhUcontainer.style.backgroundColor = 'white';
        //First circle -> Au <- for HuAu-Container:
        aUsiegel.style.position = 'relative';
        aUsiegel.style.cssFloat = 'left'; //Optional
        aUsiegel.style.top = 25 + 'px';
        aUsiegel.style.left = 10 + 'px';
        aUsiegel.style.width = 100 + 'px';
        aUsiegel.style.height = 100 + 'px';
        const tuevPlakette = ["Hu_Au/HauptuntersuchungPlakette/TUEV_14.png","Hu_Au/HauptuntersuchungPlakette/TUEV_15.png","Hu_Au/HauptuntersuchungPlakette/TUEV_16.png","Hu_Au/HauptuntersuchungPlakette/TUEV_17.png","Hu_Au/HauptuntersuchungPlakette/TUEV_18.png","Hu_Au/HauptuntersuchungPlakette/TUEV_19.png","Hu_Au/HauptuntersuchungPlakette/TUEV_20.png"];
        aUsiegel.style.backgroundImage = 'url(' + tuevPlakette[ofFuSchilder.getTuevNummber()] + ')'; 
        aUsiegel.style.backgroundSize = 425 + '%';
        aUsiegel.style.backgroundPositionX = -165 + 'px';
        aUsiegel.style.backgroundPositionY = -90 + 'px';
        aUsiegel.style.backgroundRepeat = 'no-repeat';
        //Second circle -> Hu <- for HuAu-Container:
        hUsiegel.style.position = 'relative';
        hUsiegel.style.cssFloat = 'left'; //Optional
        hUsiegel.style.top = 75 + 'px';
        hUsiegel.style.left = 7 + 'px';
        hUsiegel.style.width = 100 + 'px';
        hUsiegel.style.height = 100 + 'px';
        const auPlakette = ["Hu_Au/AuPlakette/Bayern00.png","Hu_Au/AuPlakette/Bayern01.png","Hu_Au/AuPlakette/Bayern02.png","Hu_Au/AuPlakette/Bayern03.png",]
        hUsiegel.style.backgroundImage = 'url(' + auPlakette[ofFuSchilder.getAuNummber()] + ')'; 
        hUsiegel.style.backgroundSize = 1500 + '%';
        hUsiegel.style.backgroundPositionX = -700 + 'px';
        hUsiegel.style.backgroundPositionY = -370 + 'px';
        hUsiegel.style.backgroundRepeat = 'no-repeat';
        //Add Container for last Letters befor numbers come:
        buchstabenKennungContainer.style.position = 'relative';
        buchstabenKennungContainer.style.cssFloat = 'left';
        buchstabenKennungContainer.style.bottom = 300 + 'px';
        buchstabenKennungContainer.style.left = 0 + 'px' ;
        buchstabenKennungContainer.style.height = 300 + 'px';
        buchstabenKennungContainer.style.width = 145 + 'px';
        buchstabenKennungContainer.style.backgroundColor = 'white';
        //Add Letter to buchstabenKennungContainer:
        buchstabenKennung.style.position = 'relative';
        buchstabenKennung.style.cssFloat = 'left';
        buchstabenKennung.style.bottom = 50 + 'px';
        buchstabenKennung.style.left = 10 + 'px';
        buchstabenKennung.style.color = 'black' ;
        buchstabenKennung.style.fontFamily = 'sans-serif';
        buchstabenKennung.style.fontSize = 1000 + '%';
        buchstabenKennung.style.height = 200 + 'px';
        buchstabenKennung.style.width = 140 + 'px';
        buchstabenKennung.innerHTML = ofFuSchilder.getRandomLetter();
        //Add Container for nummbers:
        nummerContainer.style.position = 'relative';
        nummerContainer.style.cssFloat = 'left';
        nummerContainer.style.bottom = 300 + 'px';
        nummerContainer.style.left = 0 + 'px' ;
        nummerContainer.style.height = 300 + 'px';
        nummerContainer.style.width = 225 + 'px';
        nummerContainer.style.backgroundColor = 'white';
        nummerContainer.style.borderRadius =  0 + ' ' + 3 + '%' + ' ' + 3 + '%' + ' ' + 0;
        //Add number in nummerContainer:
        nummer.style.position = 'relative';
        nummer.style.cssFloat = 'left';
        nummer.style.bottom = 50 + 'px';
        nummer.style.left = 20 + 'px';
        nummer.style.color = 'black' ;
        nummer.style.fontFamily = 'sans-serif';
        nummer.style.fontSize = 1000 + '%';
        nummer.style.height = 200 + 'px';
        nummer.style.width = 140 + 'px';
        nummer.innerHTML = ofFuSchilder.getRandomNumber();
        //Add autohausSchriftzug to SchwarzerRahmen:
        autohausSchriftzug.style.position = 'relative';
        autohausSchriftzug.style.cssFloat = 'left';
        autohausSchriftzug.style.bottom = 287 + 'px';
        autohausSchriftzug.style.height = 15 + 'px';
        autohausSchriftzug.style.width = 700 + 'px';
        autohausSchriftzug.style.color = 'yellow';
        autohausSchriftzug.style.textAlign = 'center';
        const autoheuser = ["Autohaus Utbremen Schmidt + Koch GmbH","Autohaus Keyssler GmbH & Co. KG","Autohaus Fritz GmbH","Woltmann Italo GmbH","Autohaus Neustadt Schmidt + Koch GmbH","AUTO DOMICIL BREMEN","Stern Autohaus Bremen","Autohaus Lemke GmbH","Dello Bremen am Flughafen","Carsburg Group","Autohaus Brandt Stuhr GmbH","Autohaus Schneider GmbH","Autohaus Weider + Sohn GmbH","Autohaus Reinsch GmbH","Autohaus Hinrichsen GmbH","Autohaus A&K Bremen","Auto-Müssemann GmbH","Autohaus Carsten Abbes","Autohaus Schmidtke Gmbh","Dello Bremen Georg-Bitter-Quartier","SIEGFRIED ISBRECHT Automobile...seit 1978! Kraftfahrzeug-Meisterbetrieb für alle Marken!","Becker & Vit - Automobile GmbH","DAT AUTOHUS AG","Autoservice Walter GmbH","Point S Kfz.-Meisterbetrieb Christoph Bremer","Autohaus Werner GmbH","Novo Automobile","Bobrink-Carstream GmbH Bremen Nord","Scar Automobile","Bobrink & Co. GmbH","Rivkin Automobile & Pflege GmbH und KFZ-Werkstatt"];
        autohausSchriftzug.innerHTML = autoheuser[ofFuSchilder.getAutohaus()];
        //Add a Class that will output a new Object of shown sign to create a check{N}play-Prompt
        var signAtMoment =  landBuchstabe.innerHTML + " " + stadtKennungBuchstabe.innerHTML + " " + buchstabenKennung.innerHTML + " " + nummer.innerHTML;
        gatheringCarsigns.push(signAtMoment);
    }
}

    class AutoschilderErratenKontainer{
        constructor(){
            errateneSchilder.style.background = 'white';
            errateneSchilder.style.width = window.innerWidth;
            errateneSchilder.style.height = 400 + 'px';
            errateneSchilder.style.top = 80 + 'px';
        }
    }

    const foundSign = document.createElement("div");
    errateneSchilder.appendChild(foundSign);

    class DasErrateneSchild{
        constructor(){
            foundSign.innerHTML = eingabeFeld.value;
        }
    }

function checkInputWithSign(){
    console.log(eingabeFeld.value);
    console.log(Count);
    if (eingabeFeld.value == gatheringCarsigns[Count]){
        console.log("This is right!");
        document.innerHTML = "Thats it Bitch!";
        const erraten = new DasErrateneSchild();
        Count++;
    } else {
        console.log("Try it again!");
    }
}

function secondsCounter(){
    myCounter += 1;
    return myCounter;
}

function showArrayWithSigns(){
    console.log("Schild Nummer: " + myCounter + ", " + gatheringCarsigns[myCounter]);
}

function aktualisiereSchild(){
    let schild = new nummernschild(); 
}

function theGame(){
    if (myCounter <= maxCounter){
        aktualisiereSchild();
        showArrayWithSigns();
        } else {
        schwarzerRahmen.style.opacity = 0;
        weißeInnenflaeche.style.opacity = 0;
        blauesLandZeichen.style.opacity = 0;
        landBuchstabe.style.opacity = 0;
        stadtKennungBuchstabe.style.opacity = 0;
        buchstabenKennung.style.opacity = 0;
        nummer.style.opacity = 0;
        const die_Anzeige = new AutoschilderErratenKontainer();
        }
}

var schild = new nummernschild(); //To start the website with a sign.
setInterval(theGame, 1000);
setInterval(secondsCounter, 1000);



},{"./FunktionsSchilder.js":1}]},{},[2]);
