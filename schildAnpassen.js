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
const aUhUsiegel = document.createElement("h1");
const buchstabenKennung = document.createElement("div");
const nummer = document.createElement("div");
//Append to document:
document.body.append(schwarzerRahmen);
schwarzerRahmen.appendChild(weißeInnenflaeche);
weißeInnenflaeche.appendChild(blauesLandZeichen);
weißeInnenflaeche.appendChild(stadtKennungKontainer);
stadtKennungKontainer.appendChild(stadtKennungBuchstabe);
weißeInnenflaeche.appendChild(aUhUcontainer);
aUhUcontainer.appendChild(aUhUsiegel);
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
        blauesLandZeichen.style.bottom = 300 + 'px';
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
        stadtKennungKontainer.style.width = 170 + 'px';
        stadtKennungKontainer.style.height = 300 + 'px';
        stadtKennungKontainer.style.backgroundColor = 'red';
        //Add letter to townLetter-Container:
        stadtKennungBuchstabe.style.position = 'relative';
        stadtKennungBuchstabe.style.cssFloat = 'left';
        stadtKennungBuchstabe.style.bottom = 50 + 'px';
        stadtKennungBuchstabe.style.left = 15 + 'px';
        stadtKennungBuchstabe.style.color = 'black' ;
        stadtKennungBuchstabe.style.fontFamily = 'sans-serif';
        stadtKennungBuchstabe.style.fontSize = 1000 + '%';
        stadtKennungBuchstabe.style.height = 200 + 'px';
        stadtKennungBuchstabe.style.width = 140 + 'px';
        stadtKennungBuchstabe.innerHTML = ofFuSchilder.getRandomLetter();
        //Add Container for HuAu circles:
        stadtKennungKontainer.style.position = 'relative';
        stadtKennungKontainer.style.left = 120 + 'px';
        stadtKennungKontainer.style.width = 170 + 'px';
        stadtKennungKontainer.style.height = 300 + 'px';
        stadtKennungKontainer.style.backgroundColor = 'red';
        
    }
}

var nummernschild01 = new nummernschild();
