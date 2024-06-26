'use strict';


//constanti per operazioni
const numeroOre = 10;
const backendOra = 20.50;
const frontendOra = 15.30;
const projectOra = 33.60;



//prezzo
let backPrezzo = numeroOre * backendOra;
let frontPrezzo = numeroOre * frontendOra;
let projectPrezzo = numeroOre * projectOra;

//promo
const promoUno = 'YHDNU32';
const promoDue = 'JANJC63';
const promoTre = 'PWKCN25';
const promoQuattro = 'SJDPO96';
const promoCinque = 'POCIE24';



const bottone = document.getElementById('bottone');
const codicePromo = document.getElementById('codice-promo');
const selezione = document.getElementById('selezione');

const prezzoFinale = document.getElementById('prezzo-finale');
console.log(prezzoFinale);






//operazioni calcolo

bottone.addEventListener('click', function (event) {
    event.preventDefault();

    if (selezione.value === 'backend development') {
        if (codicePromo.value === promoUno || codicePromo.value === promoDue || codicePromo.value === promoTre || codicePromo.value === promoQuattro || codicePromo.value === promoCinque) {
            backPrezzo -= (backPrezzo * 25) / 100;

        } else if (codicePromo.value !== '') {
            alert('Il codice inserito non è valido!');
        }
        console.log(backPrezzo);
        prezzoFinale.innerHTML = `${backPrezzo.toFixed(2)} €`;


    } else if (selezione.value === 'frontend development') {
        if (codicePromo.value === promoUno || codicePromo.value === promoDue || codicePromo.value === promoTre || codicePromo.value === promoQuattro || codicePromo.value === promoCinque) {
            frontPrezzo -= (frontPrezzo * 25) / 100;

        } else if (codicePromo.value !== '') {
            alert('Il codice inserito non è valido!');
        }
        console.log(frontPrezzo);
        prezzoFinale.innerHTML = `${frontPrezzo.toFixed(2)} €`;


    } else if (selezione.value === 'project analysis') {
        if (codicePromo.value === promoUno || codicePromo.value === promoDue || codicePromo.value === promoTre || codicePromo.value === promoQuattro || codicePromo.value === promoCinque) {
            projectPrezzo -= (projectPrezzo * 25) / 100;

        } else if (codicePromo.value !== '') {
            alert('Il codice inserito non è valido!');
        }
        console.log(projectPrezzo);
        prezzoFinale.innerHTML = `${projectPrezzo.toFixed(2)} €`;

    }
});

