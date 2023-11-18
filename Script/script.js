//Za index.html

//funkcije za redirekciju na druge stranice sajta
function ljubimci() {
    window.location.href = 'ljubimci.html'
}
function prodavnica() {
    window.location.href = 'prodavnica.html'
}
function registracija() {
    window.location.href = 'registracija.html'
}

//Ljubmici

function dona() {
    let donaOpis = document.querySelector("#DONA");
    donaOpis.style.display = "block";
    let slika = document.querySelector("#DONA-SLIKA");
    slika.style.display = "none";
    //vrati Cicka
    let cickoOpis = document.querySelector("#CICKO");
    cickoOpis.style.display = "none";
    let slikaCicka = document.querySelector("#CICKO-SLIKA");
    slikaCicka.style.display = "block";
    //vrati Milu
    let milaOpis = document.querySelector("#MILA");
    milaOpis.style.display = "none";
    let slikaMila = document.querySelector("#MILA-SLIKA");
    slikaMila.style.display = "block";
}

function cicko() {
    let cickoOpis = document.querySelector("#CICKO");
    cickoOpis.style.display = "block";
    let slika = document.querySelector("#CICKO-SLIKA");
    slika.style.display = "none";
    //vrati Donu
    let donaOpis = document.querySelector("#DONA");
    donaOpis.style.display = "none";
    let slikaDona = document.querySelector("#DONA-SLIKA");
    slikaDona.style.display = "block";
    //vrati Milu
    let milaOpis = document.querySelector("#MILA");
    milaOpis.style.display = "none";
    let slikaMila = document.querySelector("#MILA-SLIKA");
    slikaMila.style.display = "block";
}

function mila() {
    let milaOpis = document.querySelector("#MILA");
    milaOpis.style.display = "block";
    let slika = document.querySelector("#MILA-SLIKA");
    slika.style.display = "none";
    //vrati Cicka
    let cickoOpis = document.querySelector("#CICKO");
    cickoOpis.style.display = "none";
    let slikaCicka = document.querySelector("#CICKO-SLIKA");
    slikaCicka.style.display = "block";
    //vrati Donu
    let donaOpis = document.querySelector("#DONA");
    donaOpis.style.display = "none";
    let slikaDona = document.querySelector("#DONA-SLIKA");
    slikaDona.style.display = "block";
}

//Prodavnica

let opcije = document.querySelectorAll(".slika-i-opis p")
for(let i = 0; i < opcije.length; i++) {
    opcije[i].addEventListener('click', ()=>alert("Stranica u pripremi"));
}