$(function() {
  // Creiamo array di oggetti per le icone con le seguenti proprieta: name, prefix, type, family
const iconsArray = objectCreator();
console.log(iconsArray);
const categorie = arrayCategories(iconsArray);
console.log(categorie);
 //aggiungiamo dei colori usando una funzione
iconsArray.forEach(colorForFamily);

// Semezioniamo il container icons
const mainTarget = $('main');
 //inseriamo le icone nel container (possiamo creare una funzione tipo print() per inserire gli elementi e richiamarla qui)

iconsArray.forEach(printElement);


 const tutti = $('#tutti');
 const animali = $('#animali');
 const cibo = $('#cibo');
 const utenti = $('#utenti');
 const card = $('.card');
// riscrivere con sintassi es6 e con funzione unica
 animali.click(function(){
   card.each(function(){
     $(this).addClass('hide');
     if ($(this).hasClass('animali')) {
      $(this).removeClass('hide');
     }
   })
 })
 cibo.click(function(){
   card.each(function(){
     $(this).addClass('hide');
     if ($(this).hasClass('cibo')) {
      $(this).removeClass('hide');
     }
   })
 })
 utenti.click(function(){
   card.each(function(){
     $(this).addClass('hide');
     if ($(this).hasClass('utenti')) {
      $(this).removeClass('hide');
     }
   })
 })
 tutti.click(function(){
   card.each(function(){
     $(this).removeClass('hide');
   })
 })


/* ---- FUNCTIONS ----*/
function objectCreator(){
  class icon {
    constructor(name, prefix, type, family) {
      this.name = name;
      this.prefix = prefix;
      this.type = type;
      this.family = family
    }
  }

  const contenitore = [];
  contenitore.push(new icon('cane', 'fas', 'fa-dog','animali'));
  contenitore.push(new icon('gatto', 'fas', 'fa-cat','animali'));
  contenitore.push(new icon('colomba', 'fas', 'fa-dove','animali'));
  contenitore.push(new icon('cavallo', 'fas', 'fa-horse','animali'));
  contenitore.push(new icon('pesce', 'fas', 'fa-fish','animali'));
  contenitore.push(new icon('ippopotamo', 'fas', 'fa-hippo','animali'));
  contenitore.push(new icon('mela', 'fas', 'fa-apple-alt','cibo'));
  contenitore.push(new icon('pizza', 'fas', 'fa-pizza-slice','cibo'));
  contenitore.push(new icon('hamburger', 'fas', 'fa-hamburger','cibo'));
  contenitore.push(new icon('hotdog', 'fas', 'fa-hotdog','cibo'));
  contenitore.push(new icon('ninja', 'fas', 'fa-user-ninja','utenti'));
  contenitore.push(new icon('impiegato', 'fas', 'fa-user-tie','utenti'));
  contenitore.push(new icon('spia', 'fas', 'fa-user-secret','utenti'));
  contenitore.push(new icon('dottore', 'fas', 'fa-user-md','utenti'));
  contenitore.push(new icon('rider', 'fas', 'fa-user-injured','utenti'));
  contenitore.push(new icon('studente', 'fas', 'fa-user-graduate','utenti'));
  return contenitore;
}

function arrayCategories(arrayTarget){
  const categories = [];
  arrayTarget.forEach(function(element){
    if (!categories.includes(element.family)) {
      categories.push(element.family);
    }
  });
  return categories;
}

function printElement(element){
  // utilizzare destructuring
  const {name,colore,prefix,type,family} = element;
  // const name = element.name;
  // const colore = element.colore;
  // const prefix = element.prefix;
  // const type = element.type;
  // const family = element.family;
  mainTarget.append(`
    <div class="card ${family}">
    <div class="card_wrap">
    <i class="${prefix} ${type}"style="color:${colore};"></i>
    <h3>${name}</h3>
    </div>
    </div>
    `);
  }

  function colorForFamily (element){
    // definiamo dei colori per le icone (blue, orange, purple)
    //da rivedere con destrutturazione
    const blu = 'blue';
    const arancione = 'orange';
    const viola = 'purple';
    //implementare switch
    if (element.family == 'animali') {
      element.colore = blu;
    }else if (element.family == 'cibo') {
      element.colore = arancione;
    }else if (element.family == 'utenti') {
      element.colore = viola;
    }

  }
});
