"use strict";
class Smartphone {
    constructor(euro, numero = 0) {
        this.costoMinuto = 0.2;
        this.carica = euro;
        this.numeroChiamate = numero;
    }
    ricarica(euro) {
        this.carica += euro;
    }
    numero404() {
        return this.carica + "€";
    }
    getNumeroChiamate() {
        return this.numeroChiamate;
    }
    chiamata(min) {
        if (this.carica > 0) {
            this.carica -= min * this.costoMinuto;
            this.numeroChiamate += 1;
        }
        else {
            console.log("Avviso! credito insufficente");
        }
    }
    azzeraChiamate() {
        this.numeroChiamate = 0;
    }
}
let profilo1 = new Smartphone(5);
let profilo2 = new Smartphone(10);
let profilo3 = new Smartphone(0);
console.log(profilo1);
console.log(profilo2);
profilo1.chiamata(3);
console.log(profilo1);
profilo2.chiamata(10);
console.log(profilo2);
console.log(profilo3.numero404());
profilo3.azzeraChiamate;
console.log(profilo3);
