"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");

//lager tabell
const part1Array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]; //hardkoder betyr at verdiene er faste(legger inn selv)
let part1Text = ""; //lager tom tekst variabel som skal fylles med tabellen

for (let i = 0; i < part1Array.length /*20*/; i++) /*i = i + 1*/ {
  //for løkke som går gjennom tabellen (kunne skrevet 20 i stedet)
  const value = part1Array[i]; //henter ut verdien i tabellen

  if (i === part1Array.length - 1) {
    //sjekker om det er siste verdi i tabellen
    part1Text += value.toString() + "."; //gjør tall til tekst(ikke nødvendig) legger til verdien i tekst variabelen og et punktum
  } else {
    part1Text += value.toString() + ", "; //gjør tall til tekst(ikke nødvendig) legger til verdien i tekst variabelen og et komma og mellomrom
  }
}

printOut(part1Text); //skriver ut teksten som inneholder tabellen

printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");

const fruits = ["Apple", "Banana", "Cherry", "Mango", "Tomato"]; //lager tabell med frukt navn
const fruitText = fruits.join(", "); //lager tekst variabel som inneholder fruktene i tabellen separert med komma og mellomrom
printOut(fruitText); //skriver ut teksten som inneholder tabellen

printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");

const part3Greeting = "Hello there, how are you?"; // lager tekstvariabel med hilsen
const greetingArray = part3Greeting.split(" "); // deler opp teksten i en tabell ved hvert mellomrom

let part3Text = ""; // lager tom tekstvariabel (må være let siden vi skal endre den)
for (let i = 0; i < greetingArray.length; i++) {
  const word = greetingArray[i]; // henter ut ordet med indeks i tabellen
  part3Text += "Index:  " + i.toString() + " = " + word + newLine; // legger til ordet og linjeskift
}

printOut(part3Text); // skriver ut teksten som inneholder ordene med indekser

printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");

const jentenavnArray = ["Anne", "Inger", "Kari", "Marit", "Ingrid", "Liv", "Eva", "Berit", "Astrid", "Bjørg", "Hilde", "Anna", "Solveig", "Marianne", "Randi", "Ida", "Nina", "Maria", "Elisabeth", "Kristin"]; //lager tabell med jentenavn
function removeNameFromArray(aArray, aName) {
  //lager funksjon som fjerner navn fra tabell
  let deleteIndex = -1; //lager variabel for å lagre indeksen til navnet som skal fjernes
  //bruker -1 fordi det er en ugyldig indeks. ingen gyldig indeks kan være negativ
  for (let i = 0; i < aArray.length; i++) {
    //går gjennom tabellen
    const name = aArray[i]; //henter ut navnet i tabellen ved indeks i
    if (name === aName) {
      //sjekker om navnet er likt det som skal fjernes
      //her fjerner vi navnet ved å bruke splice funksjonen, men dette gjør vi ikke her
      //her løper vi igjenom, og må slette senere for å unngå problemer med indekser
      // vi må heller lagre indeksen til navnet i en variabel som skal fjernes senere
      deleteIndex = i; //lagrer indeksen til navnet som skal fjernes
    }
  }
  //tester om vi kan slette
  if (deleteIndex >= 0) {
    //sjekker om indeksen er gyldig
    aArray.splice(deleteIndex, 1); //fjerner navnet fra tabellen ved å bruke splice funksjonen. Deleteindex er indexen, 1 er antall elementer som skal fjernes
    printOut(aName + " is found, and deleted."); //skriver ut at navnet er funnet og slettet
  } else {
    printOut(aName + " is not found in the list."); //skriver ut at navnet ikke er funnet
  }
}

removeNameFromArray(jentenavnArray, "Hilde"); //kaller funksjonen for å fjerne "Hilde"
removeNameFromArray(jentenavnArray, "Guro"); //kaller funksjonen for å fjerne "Guro"
printOut(jentenavnArray.join(", ")); //skriver ut tabellen med jentenavn etter fjerning

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");

const guttenavnArray = ["Jakob", "Lucas", "Emil", "Oskar", "Oliver", "William", "Filip", "Noah", "Elias", "Isak", "Henrik", "Aksel", "Kasper", "Mathias", "Jonas", "Tobias", "Liam", "Håkon", "Theodor", "Magnus"];
let allNamesArray = guttenavnArray.concat(jentenavnArray); //lager ny tabell som er en sammenslåing av guttenavn og jentenavn tabellene
printOut(allNamesArray.join(", ")); //skriver ut den nye tabellen med alle navn

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");

class TBook {
  //lager klasse for bok objekt
  #title;
  #author;
  #ISBN;
  constructor(aTitle, aAuthor, aISBN) {
    //konstruktør som tar inn tittel, forfatter og ISBN
    this.#title = aTitle;
    this.#author = aAuthor;
    this.#ISBN = aISBN;
  }

  toString() {
    //metode som returnerer bok objektet som tekst
    return "Title: " + this.#title + ", Author: " + this.#author + ", ISBN: " + this.#ISBN;
  }
}

//lager tabell med 3 bok objekter
let bookList = [new TBook("The Great Gatsby", "F. Scott Fitzgerald", "9780743273565"), new TBook("To Kill a Mockingbird", "Harper Lee", "9780061120084"), new TBook("Pride and Prejudice", "Jane Austen", "9781503290563")];

for (let i = 0; i < bookList.length; i++) {
  //går gjennom tabellen med bok objekter
  const book = bookList[i]; //henter ut bok objektet ved indeks i
  printOut(book.toString()); //skriver ut bok objektet som tekst ved å kalle toString metoden
}

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");

const EWeekDays = {
  //lager objekt som representerer ukedager
  Weekday1: { value: 0x01, name: "Mandag" },
  Weekday2: { value: 0x02, name: "Tirsdag" },
  Weekday3: { value: 0x04, name: "Onsdag" },
  Weekday4: { value: 0x08, name: "Torsdag" },
  Weekday5: { value: 0x10, name: "Fredag" },
  Weekday6: { value: 0x20, name: "Lørdag" },
  Weekday7: { value: 0x40, name: "Søndag" },

  Workdays: { value: 0x01 + 0x02 + 0x04 + 0x08 + 0x10, name: "Arbeidsdager" },
  Weekend: { value: 0x20 + 0x40, name: "Helg" },
};

const keys = Object.keys(EWeekDays); //"Lager" en tabell med "nøklene" i EWeekDays objektet

for (let i = 0; i < keys.length; i++) {
  //går gjennom tabellen med nøklene
  const key = keys[i]; //henter ut nøkkelen ved indeks i
  const item = EWeekDays[key]; //henter ut verdien i EWeekDays objektet ved nøkkelen
  printOut("Key: " + key + ", Value: " + item.value + ", Name: " + item.name); //skriver ut nøkkelen, verdien og navnet
}

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");

let randomNumbers = []; //lager tom tabell for å lagre tilfeldige tall

for (let i = 0; i < 35; i++) {
  //lager for løkke som går 35 ganger
  randomNumbers.push(Math.floor(Math.random() * 20) + 1); //legger til et tilfeldig tall mellom 1 og 20 i tabellen
}

printOut("Original list of random numbers: " + randomNumbers.join(", ") + newLine); //skriver ut tabellen med tilfeldige tall

//stigende rekkefølge(callback funksjon som sammenligner to tall)
let ascendingNumbers = randomNumbers.slice().sort((a, b) => a - b); //sorterer tabellen i stigende rekkefølge
printOut("Stigende rekkefølge: " + ascendingNumbers.join(", ") + newLine); //skriver ut den sorterte tabellen i stigende rekkefølge

//synkende rekkefølge(callback funksjon som sammenligner to tall)
let descendingNumbers = randomNumbers.slice().sort((a, b) => b - a); //sorterer tabellen i synkende rekkefølge
printOut("Synkende rekkefølge: " + descendingNumbers.join(", ") + newLine); //skriver ut den sorterte tabellen i synkende rekkefølge

printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");

let frequency = {};

for (let num of randomNumbers) {
  //looper gjennom tallene i randomNumbers tabellen
  if (frequency[num]) {
    //sjekker om tallet allerede finnes i frequency objektet. Om det finns, øker vi frekvensen med 1
    frequency[num]++;
  } else {
    //om tallet ikke finnes, legger vi det til i frequency objektet med frekvens 1
    frequency[num] = 1;
  }
}

printOut("Number → Frequency:");
let sortedNumbers = Object.keys(frequency).sort((a, b) => a - b); //henter ut nøklene (tallene) fra frequency objektet og sorterer dem i stigende rekkefølge

for (let num of sortedNumbers) {
  //looper gjennom de sorterte tallene og teller frekvensen
  printOut(num + " occurs " + frequency[num] + " times");
}

printOut(newLine);

let freqArray = [];

for (let num in frequency) {
  //for hver nøkkel (tall) i frequency objektet, legger vi til et objekt i freqArray som inneholder tallet og dets frekvens
  freqArray.push({ number: Number(num), freq: frequency[num] });
}

freqArray.sort(function (a, b) {
  //sorterer freqArray basert på frekvensen
  if (b.freq === a.freq) {
    //hvis frekvensen er lik, sorterer vi etter tallet i stigende rekkefølge
    return a.number - b.number;
  }
  return b.freq - a.freq; //sorterer etter frekvens i synkende rekkefølge. b.freq - a.freq betyr at høyere frekvens kommer først
});

printOut("Frequency → Numbers:");

for (let item of freqArray) {
  //looper gjennom freqArray og skriver ut frekvensen og tallet
  printOut(item.freq + " occurrences: number " + item.number);
}

printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");

let table = [];

for (let row = 0; row < 5; row++) {
  //lager 5 rader

  table[row] = []; //lager en tom tabell for hver rad

  for (let col = 0; col < 9; col++) {
    //lager 9 kolonner

    table[row][col] = "Row " + (row + 1) + ", Col " + (col + 1); //fyller hver celle med tekst som indikerer rad og kolonne
  }
}

for (let row = 0; row < table.length; row++) {
  //går gjennom hver rad i tabellen
  let line = ""; //lager tom tekst variabel for å bygge opp linjen

  for (let col = 0; col < table[row].length; col++) {
    //går gjennom hver kolonne i raden
    line += table[row][col] + "  |  "; //legger til celleinnholdet i linjen med mellomrom for å skille kolonnene
  }

  printOut(line + newLine);
}

printOut(newLine);
