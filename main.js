$(function() {
  // Creiamo array di oggetti per le icone con le seguenti proprieta: name, prefix, type, family
class icon {
  constructor(name, prefix, type, family) {
    this.name = name;
    this.prefix = prefix;
    this.type = type;
    this.family = family
  }
}
const iconsArray = [];
iconsArray.push(new icon('cane', 'fas', 'fa-dog','animali'));
iconsArray.push(new icon('gatto', 'fas', 'fa-cat','animali'));
iconsArray.push(new icon('colomba', 'fas', 'fa-dove','animali'));
iconsArray.push(new icon('cavallo', 'fas', 'fa-horse','animali'));
iconsArray.push(new icon('pesce', 'fas', 'fa-fish','animali'));
iconsArray.push(new icon('ippopotamo', 'fas', 'fa-hippo','animali'));
iconsArray.push(new icon('mela', 'fas', 'fa-apple-alt','cibo'));
iconsArray.push(new icon('pizza', 'fas', 'fa-pizza-slice','cibo'));
iconsArray.push(new icon('hamburger', 'fas', 'fa-hamburger','cibo'));
iconsArray.push(new icon('hotdog', 'fas', 'fa-hotdog','cibo'));
iconsArray.push(new icon('ninja', 'fas', 'fa-user-ninja','utenti'));
iconsArray.push(new icon('impiegato', 'fas', 'fa-user-tie','utenti'));
iconsArray.push(new icon('spia', 'fas', 'fa-user-secret','utenti'));
iconsArray.push(new icon('dottore', 'fas', 'fa-user-md','utenti'));
iconsArray.push(new icon('rider', 'fas', 'fa-user-injured','utenti'));
iconsArray.push(new icon('studente', 'fas', 'fa-user-graduate','utenti'));
console.log(iconsArray);
  // Semezioniamo il container icons
const mainTarget = $('main');

 //aggiungiamo dei colori usando una funzione
  iconsArray.forEach(colorForFamily);

 //inseriamo le icone nel container (possiamo creare una funzione tipo print() per inserire gli elementi e richiamarla qui)

 iconsArray.forEach(printElement);

/* ---- FUNCTIONS ----*/


function printElement(element){
  let name = element.name;
  let colore = element.colore;
  let prefix = element.prefix;
  let type = element.type;
  let family = element.family;
  mainTarget.append(`
    <div class="card ${family}">
    <i class="${prefix} ${type}"style="color:${colore};"></i>
    <h3>${name}</h3>
    </div>
    `);
  }

  function colorForFamily (element){
    // definiamo dei colori per le icone (blue, orange, purple)
    var blu = 'blue';
    var arancione = 'orange';
    var viola = 'purple';
    if (element.family == 'animali') {
      element.colore = blu;
    }else if (element.family == 'cibo') {
      element.colore = arancione;
    }else if (element.family == 'utenti') {
      element.colore = viola;
    }

  }
});
