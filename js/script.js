const overskrift = document.querySelector("h1");
overskrift.textContent;
console.log(overskrift.textContent);
overskrift.textContent = "Billeder";
console.log(overskrift.textContent);

const artikel1p = document.querySelector("article:nth-child(1) p");
artikel1p.textContent = "Her er et billede.";

const artikel1overskrift = document.querySelector("article:nth-child(1) h2");
artikel1overskrift.textContent = "Vandfald";

const artikel2p = document.querySelector("article:nth-child(2) p");
artikel2p.textContent = "Her er et billede.";

const artikel2overskrift = document.querySelector("article:nth-child(2) h2");
artikel2overskrift.textContent = "Ørken";

const pic1 = document.querySelector("article:nth-child(1) img");
console.log(pic1);
pic1.src = "img/placeimg_640_480_nature_3.jpg";
pic1.alt = "Nyt vandfald";

const pic2 = document.querySelector("article:nth-child(2) img");
console.log(pic2);
pic2.src = "img/placeimg_640_480_nature_4.jpg";
pic2.alt = "Ny ørken med blå sten";

let mainSection = document.querySelector("section");
// nyt article element
let newArticle = document.createElement("article");
// nyt H3 element

let billede1 = document.createElement("img");
billede1.src = "img/placeimg_640_480_nature_1.jpg";
newArticle.appendChild(billede1);

let overskrift1 = document.createElement("h2");
// Tekst til overskriften
let overskriftText = document.createTextNode("Stenbrud");
// indsæt tekst i overskriften
overskrift1.appendChild(overskriftText);
// tilføj overskrift til article
newArticle.appendChild(overskrift1);
// tilføj article til section

let p1 = document.createElement("p");
let p1Indhold = document.createTextNode("Her er et billede.");
p1.appendChild(p1Indhold);
newArticle.appendChild(p1);

mainSection.appendChild(newArticle);
