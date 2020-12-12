$(function() {
  // Creiamo array di oggetti per le icone con le seguenti proprieta: name, prefix, type, family
const iconsArray = objectCreator();
// console.log(iconsArray);
// identifico family ricorrenti per determinare categorie
const categorie = arrayCategories(iconsArray);
// console.log(categorie);
// genero nuovo vettore suddiviso per family
const newIconsArray = [];
categorie.forEach(e =>{
  const newArray = estraiPerKeyword(iconsArray, e);
  const randomColor = coloreRandom()
  // attribuisco colore random in base a categorie
  // COME INSERIRE DAL FONDO ?
  //////////////////////////////////
  newArray.forEach(element=>{
    element.color = randomColor;
  });
  newIconsArray.push(newArray)
});
console.log(newIconsArray);
// genero nuovo array di riferimento contenente tutte le iocone non suddivise per categoria
let margedIcons = [];
for (let i = 0; i < newIconsArray.length; i++) {
  margedIcons = margedIcons.concat(newIconsArray[i])

}
console.log(margedIcons);
// seleziono target contenitore nella dom
const mainTarget = document.querySelector('main');
// stampo nel contenitore
margedIcons.forEach(e =>{
  printElement(e, mainTarget);
});
// seleziono il tag select nella DOM
const selectTarget = document.querySelector('select');
// genero un opzione per categoria
categorie.forEach(e => {
  const markup = `
    <option id="${e}" value="${e}">${e}</option>
    `;
  selectTarget.insertAdjacentHTML('beforeend', markup);
});
// genero un event listener per ogni option
selectTarget.addEventListener('change', event =>{
  const categoryValue = event.target.value;
  console.log(categoryValue);
  mainTarget.innerHTML = '';
  // stampo card in base a family filtrate con categoryValue
  margedIcons.forEach(e =>{
    if (categoryValue === 'tutte') {
      printElement(e, mainTarget);
    }
    if (e.family === categoryValue) {
      printElement(e, mainTarget);
    }
  });
});














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
  contenitore.push(new icon('linux', 'fab', 'fa-linux','geek'));
  contenitore.push(new icon('ubuntu', 'fab', 'fa-ubuntu','geek'));
  contenitore.push(new icon('suse', 'fab', 'fa-suse','geek'));
  contenitore.push(new icon('redhat', 'fab', 'fa-redhat','geek'));
  contenitore.push(new icon('fedora', 'fab', 'fa-fedora','geek'));
  contenitore.push(new icon('centos', 'fab', 'fa-centos','geek'));
  return contenitore;
}

function arrayCategories(arrayTarget){
  const categories = ['tutte'];
  arrayTarget.forEach(function(element){
    if (!categories.includes(element.family)) {
      categories.push(element.family);
    }
  });
  return categories;
}

function estraiPerKeyword (arrayInput, keyword){

  const arrayOutpu = arrayInput.filter(element =>{
    return element.family === keyword;
  });
  return arrayOutpu;
}

function coloreRandom(){
  const num1 = Math.floor(Math.random() * (255 - 0 + 1) ) + 0;
  const num2 = Math.floor(Math.random() * (255 - 0 + 1) ) + 0;
  const num3 = Math.floor(Math.random() * (255 - 0 + 1) ) + 0;
  const color =`rgb(${num1}, ${num2}, ${num3})`
  return color;
}

function printElement(element, target){
  const {name,color,prefix,type,family} = element;
  const markup = `
    <div class="card ${family}">
    <div class="card_wrap">
    <i class="${prefix} ${type}"style="color:${color};"></i>
    <h3>${name}</h3>
    </div>
    </div>
    `;
  target.insertAdjacentHTML('beforeend', markup);
  }

});
