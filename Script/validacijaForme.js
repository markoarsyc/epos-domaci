let forma = document.getElementsByTagName("form");
console.log(forma);
forma[0].addEventListener('submit', ()=> {
    let imePrezime = document.getElementById("IME").value;
    let telefon = document.getElementById("TELEFON").value;
    let mail = document.getElementById("MAIL").value;
    let grad = document.getElementById("GRAD").value;
    let ulica = document.getElementById("ULICABROJ").value;
    let ljubimacCB = document.getElementById("LJUBIMAC");
    let prodavnicaCB = document.getElementById("PRODAVNICA");

    let razlog = (ljubimacCB.checked && prodavnicaCB.checked ? "Prodavnica i usvajanje ljubimaca"
        : ljubimacCB.checked ? "Usvajanje ljubimaca" : "Prodavnica");

    let alertMessage = `
        USPEŠNO STE SE REGISTROVALI! \n
        Vaše ime: ${imePrezime} \n
        Telefon: ${telefon} \n
        Mejl: ${mail} \n
        Grad: ${grad} \n
        Ulica: ${ulica} \n
        Razlog registracije: ${razlog}`;

    
    alert(alertMessage);

})





