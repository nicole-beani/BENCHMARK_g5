interface ISmartphone {
    carica: number;
    numeroChiamate: number;
    costoMinuto: number;

    ricarica(euro: number): void;
    numero404(): string;
    getNumeroChiamate(): number;
    chiamata(min: number): void;
    azzeraChiamate(): void;
  }

  class Smartphone implements ISmartphone {

    carica: number;
    numeroChiamate: number;
    costoMinuto: number = 0.2;

    constructor(euro: number, numero: number = 0) {
      this.carica = euro;
      this.numeroChiamate = numero;
    }

    ricarica(euro: number): void {
      this.carica += euro;
    }

    numero404(): string {
      return this.carica + "€";
    }

    getNumeroChiamate(): number {
      return this.numeroChiamate;
    }

    chiamata(min: number): void {
      if (this.carica > 0) {
        this.carica -= min * this.costoMinuto;
        this.numeroChiamate += 1;
      } else {
        console.log("Avviso! credito insufficente");
      }
    }

    azzeraChiamate(): void {
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