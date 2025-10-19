"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");

function todaysDate() {
  //funksjon for dagens dato
  //ingen parametre som oppgaven spør om
  const today = new Date();
  const formattedDate = today.toLocaleDateString("nb-NB", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  printOut("Dagens dato:  " + formattedDate); //printer ut info istedenfor å returnere verdier som oppgaven ber om
  return today; // returnerer dagens dato som et Date-objekt
}

todaysDate(); // printer ut funksjonen printNorwegianDate

printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");

function DaysUntil2XKO(releaseDate, today) {
  // funksjon for å regne ut dager til 2XKO
  const timeDifference = releaseDate - today; // beregner tidsdifferansen i millisekunder
  const daysLeft = Math.ceil(timeDifference / (1000 * 60 * 60 * 24)); // konverterer millisekunder til dager
  return daysLeft; // returnerer antall dager
}

function showCountdownTo2XKO() {
  // funksjon for å vise nedtelling til 2XKO
  const today = todaysDate(); // henter dagens dato
  const releaseDate = new Date("2025-05-14"); // 2XKO dato
  const daysLeft = DaysUntil2XKO(releaseDate, today); // beregner dager igjen

  printOut("Bare " + daysLeft + " dager igjen til lanseringen av 2XKO! 💥"); // printer ut antall dager igjen. Eller siden det var lanseringsdag siden det allerede har skjedd.
}

showCountdownTo2XKO(); // printer ut funksjonen showCountdownTo2XKO

printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");

function circleInfo(circleRadius) {
  // funksjon for å regne ut sirkel info
  const circleDiameter = circleRadius * 2; // diameter
  const circleCircumference = 2 * Math.PI * circleRadius; // omkrets
  const circleArea = Math.PI * circleRadius ** 2; //areal

  printOut("Circle: ");
  printOut("radius: " + circleRadius);
  printOut("diameter: " + circleDiameter);
  printOut("circumference: " + circleCircumference.toFixed(2));
  printOut("area: " + circleArea.toFixed(2));
}

circleInfo(5); // kaller på funksjonen med radius 5

printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");

function rectangleInfo(rectangle) {
  // funksjon for å regne ut rektangel info
  const rectangleCircumference = 2 * (rectangle.width + rectangle.height); // omkrets
  const rectangleArea = rectangle.width * rectangle.height; // areal

  printOut("Rectangle:");
  printOut("width: " + rectangle.width + " Height:  " + rectangle.height);
  printOut("circumference: " + rectangleCircumference.toFixed(2));
  printOut("area:  " + rectangleArea.toFixed(2));
}

rectangleInfo({ width: 4, height: 3 }); // kaller på funksjonen med width 4 og height 3

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");

function convertTemperature(value, type) {
  // funksjon for å konvertere temperatur
  let celsius = 0;
  let fahrenheit = 0;
  let kelvin = 0;

  if (type === "C") {
    // hvis type er Celsius
    celsius = value;
    fahrenheit = (celsius * 9) / 5 + 32;
    kelvin = celsius + 273.15;
  } else if (type === "F") {
    // hvis type er Fahrenheit
    fahrenheit = value;
    celsius = ((fahrenheit - 32) * 5) / 9;
    kelvin = celsius + 273.15;
  } else {
    //hvis type er kelvin
    // type === "K"
    kelvin = value;
    celsius = kelvin - 273.15;
    fahrenheit = (celsius * 9) / 5 + 32;
  }

  printOut("Celsius: " + Math.round(celsius));
  printOut("Fahrenheit: " + Math.round(fahrenheit));
  printOut("Kelvin: " + Math.round(kelvin));
}
printOut("Converts 47 C: ");
convertTemperature(47, "C"); // kaller på funksjonen med 47 C
printOut(newLine);

printOut("Converts 100 F: ");
convertTemperature(100, "F"); // kaller på funksjonen med 100 F
printOut(newLine);

printOut("Converts 300 K: ");
convertTemperature(300, "K"); // kaller på funksjonen med 300 K
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");

function calculateTax(priceIncludingVAT, taxGroup) {
  // funksjon for å regne ut pris uten moms
  const lowerCTaxGroup = taxGroup.toLowerCase(); // gjør om taxGroup til små bokstaver for enklere sammenligning

  if (lowerCTaxGroup === "normal") {
    // sjekker om taxGroup er "normal"
    const vatRate = 0.25; // regner ut pris uten moms(VAT) (25%)
    const priceWithoutVAT = priceIncludingVAT / (1 + vatRate); // formelen for å finne pris uten moms
    printOut(priceIncludingVAT + " is " + priceWithoutVAT.toFixed(2) + " without tax. (normal)");
  } else if (lowerCTaxGroup === "food") {
    // sjekker om taxGroup er "food"
    const vatRate = 0.15; //regner ut pris uten moms(VAT) (15%)
    const priceWithoutVAT = priceIncludingVAT / (1 + vatRate);
    printOut(priceIncludingVAT + " is " + priceWithoutVAT.toFixed(2) + " without tax. (food)");
  } else if (lowerCTaxGroup === "hotel" || lowerCTaxGroup === "transport" || lowerCTaxGroup === "cinema") {
    // sjekker om taxGroup er "hotel", "transport" eller "cinema"
    const vatRate = 0.1; //regner ut pris uten moms(VAT) (10%)
    const priceWithoutVAT = priceIncludingVAT / (1 + vatRate);
    printOut(priceIncludingVAT + " is " + priceWithoutVAT.toFixed(2) + " without tax. (hotel, transport, cinema)");
  } else {
    printOut("Unknown tax group!"); //hvis taxGroup ikke er noen av de over
    return NaN;
  }
}

calculateTax(100, "normal");
calculateTax(150, "food");
calculateTax(50, "transport");
calculateTax(100, "goblins");

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");

function calculateSpeed(speed, distance, time) {
  // Funksjon for å regne ut fart, distanse eller tid
  let missingCount = 0; // variabel for å holde på antall manglende parametre

  // Teller antall parametre som mangler
  if (speed === undefined || speed === null) missingCount++;
  if (distance === undefined || distance === null) missingCount++;
  if (time === undefined || time === null) missingCount++;

  // Hvis mer enn ett parameter mangler, kan vi ikke regne det ut
  if (missingCount > 1) {
    printOut("NaN");
    printOut(newLine);
    return;
  }

  // Regner ut den manglende verdien og printer resultatet
  if (speed === undefined || speed === null) {
    // Hvis speed mangler
    speed = distance / time;
    printOut("Speed = " + speed.toFixed(2));
  } else if (distance === undefined || distance === null) {
    // Hvis distance mangler
    distance = speed * time;
    printOut("Distance = " + distance.toFixed(2));
  } else if (time === undefined || time === null) {
    // Hvis time mangler
    time = distance / speed;
    printOut("Time = " + time.toFixed(2));
  }

  // Uansett, print alltid sluttresultatet én gang
  printOut("Speed: " + speed.toFixed(2) + " km/h, " + "Distance: " + distance.toFixed(2) + " km, " + "Time: " + time.toFixed(2) + " h");
  printOut(newLine);
}

// Eksempler
calculateSpeed(75, 50, undefined); // Finn speed
calculateSpeed(60, undefined, 2.0); // Finn distance
calculateSpeed(undefined, 105, 1.5); // Finn time
calculateSpeed(undefined, 1000, undefined); // For mange mangler → NaN
calculateSpeed(80, 160, 2); // Ingen mangler print alle verdier

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");

function makeText(text, maxSize, character, paddingBefore) {
  // funksjon for å lage tekst med padding
  let newText = text; // variabel for å holde på den nye teksten

  text = String(text); // gjør text om til string

  // ser om vi skal ha "padding"
  if (text.length < maxSize) {
    // hvis teksten er kortere enn maxSize
    const padLength = maxSize - text.length;
    const padding = character.repeat(padLength); // repeat the character

    // legger til padding enten før eller etter teksten, avhengig av paddingBefore
    if (paddingBefore) {
      newText = padding + text; // legger til før teksten
    } else {
      newText = text + padding; // legger til etter teksten
    }
  }

  printOut(newText); // printer ut resultat
  return newText; // returnerer den nye linjen med tekst
}

// Example calls
makeText("This is a text", 50, "*", true); //legger til * før teksten
makeText("This is another text", 50, "*", false); //legger til * etter teksten

printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");

function testMathsFun(lines) {
  // funksjon for å teste "Maths fun"
  let currentNumber = 1; // starter på 1

  for (let line = 1; line <= lines; line++) {
    // går gjennom alle linjene
    const leftCount = line + 1; // numbers on left
    const rightCount = line; // numbers on right

    // Sum venstre side
    let leftSum = 0;
    for (let i = 0; i < leftCount; i++) {
      // legger sammen tallene på venstre side
      leftSum += currentNumber;
      currentNumber++;
    }

    // Sum høyre side
    let rightSum = 0;
    for (let i = 0; i < rightCount; i++) {
      // legger sammen tallene på høyre side
      rightSum += currentNumber;
      currentNumber++;
    }

    // Sjekk om summene er like
    if (leftSum !== rightSum) {
      // hvis de ikke er like, feiler testen
      printOut("Test failed on line " + line);
      return;
    }
  }

  // hvis alle linjene passerer testen
  printOut("Maths fun!");
}

// Kaller på funksjonen for å teste med 200 linjer
testMathsFun(200);

printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");

function factorial(x) {
  // funksjon for å regne ut fakultet av x

  if (x === 1) {
    // når x er 1, returnerer vi 1
    return 1;
  } else {
    // rekursivt kall (funksjonen kaller på seg selv) for å regne ut fakultet
    return x * factorial(x - 1); // x multiplisert med fakultet av (x-1)
  }
}

// Kaller på funksjonen for å regne ut fakultet av 9
let x = 9;
let result = factorial(x);
printOut("Factorial of " + x + " = " + result);

printOut(newLine);
