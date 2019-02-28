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
        stadtKennungKontainer.style.left = 115 + 'px';
        stadtKennungKontainer.style.width = 145 + 'px';
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
        aUhUcontainer.style.left = 120 + 'px';
        aUhUcontainer.style.width = 120 + 'px';
        aUhUcontainer.style.height = 300 + 'px';
        aUhUcontainer.style.backgroundColor = 'cyan';
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
        buchstabenKennung.style.
        buchstabenKennung.style.
        buchstabenKennung.style.
        buchstabenKennung.style.
        buchstabenKennung.style.
        buchstabenKennung.style.
        buchstabenKennung.style.
    }
}

function aktualisiereSchild(){
    let schild = new nummernschild(); 
}

setInterval(aktualisiereSchild, 100);
