"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");

//counting up and down to 10 in two separate lines.
let txtLine1 = "";
let txtLine2 = "";

// i goes 1 → 10
// j goes 10 → 1
for (let i = 1, j = 10; i <= 10; i++, j--) {
  txtLine1 += " " + i.toString();
  txtLine2 += " " + j.toString();
}

printOut(txtLine1); // 1 2 3 4 5 6 7 8 9 10
printOut(txtLine2); // 10 9 8 7 6 5 4 3 2 1

printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
//number guessing game

let myNumber = 27; // velger mitt tall
let guess = 0; //lager en variabel for å holde på gjetningen

while (guess !== myNumber) {
  //programmet skal kjøre så lenge myNumber ikke er 27
  guess = Math.floor(Math.random() * 60) + 1; //velger et random tall mellom 1 og 60
}

printOut("Guessed number is: " + guess); //printer ut tallet når det er gjettet riktig
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
// guessing game - level up!

let myNumber3 = 20000; // tallet som skal gjettes
let guess3 = 0; //variabel for å holde på gjetningen
let guesses3 = 0;

let startTime3 = Date.now(); // starter timeren

while (guess3 !== myNumber3) {
  // programmet kjører så lenge myNumber3 ikke er 20000
  guess3 = Math.floor(Math.random() * 1000000) + 1; // velger et random tall mellom 1 og 1.000.000
  guesses3++; // teller antall gjetninger (legger til 1 for hver gang loopen kjører)
}

let endTime3 = Date.now(); // timer stopper
let elapsed3 = endTime3 - startTime3; // regner ut tid brukt i ms

printOut("Guessed number: " + guess3); //printer ut tallet når det er gjettet riktig
printOut("Number of guesses: " + guesses3); //printer ut antall gjetninger
printOut("Time taken (ms): " + elapsed3); //printer ut tid brukt i ms

printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");

//Part 4 - Prime Number Hunter
//Find all prime numbers greater than 1 and less than 200
let primNumString = "";

for (let num = 2; num < 200; num++) {
  let isPrime = true;
  let i = 2; // i er tallet vi deler num på for å se om tallet num er et prim tall
  let SquareOfNum = Math.sqrt(num); // vi trenger bare å sjekke opp til kvadratroten av num

  while (i <= SquareOfNum) {
    //sjekker alle tall (i) opptil kvadratroten av num

    if (num % i === 0) {
      // hvis num er delelig på i, så er det ikke et prim tall
      isPrime = false;
      break;
    }

    i++;
  }

  if (isPrime) {
    if (primNumString !== "") {
      primNumString += ", ";
    }
    primNumString += num;
  }
}

printOut(primNumString);

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");

// nested loops and patterns
//Two loops that print 9 columns and 7 rows

let rowLimit = 7; //setter en grense for hvor mange rader vi skal ha
let colLimit = 9; //setter en grense for hvor mange kolonner vi skal ha

for (let row = 1; row <= rowLimit; row++) {
  // ytre loop for rader
  let textInRow = ""; //lager en tom streng for å holde på teksten i hver rad
  for (let col = 1; col <= colLimit; col++) {
    // indre loop for kolonner
    textInRow += "K" + col + "R" + row + " "; //bygger opp teksten i hver rad
  }
  printOut(textInRow);
}

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
// Grade simulator & Sorting challenge
let listOfGrades = []; //lager en tom liste for å holde på karakter poeng summene
const maksSum = 236;
let numberOfStudents = 5; //setter antall studenter til 5

for (let i = 1; i <= numberOfStudents; i++) {
  let randomGrade = Math.floor(Math.random() * maksSum) + 1; //genererer en tilfeldig karakter poeng sum fra 1-236 (inklusivt)
  listOfGrades.push(randomGrade); //legger den tilfeldige karakter poeng summen inn i listen listOfGrades
}

function convertToPercentageGrade(number, maksSum) {
  if (maksSum === 0) {
    return "N/A"; // unngå deling på null
  }
  return (number / maksSum) * 100; // konverterer karakter poeng sum til bokstavkarakter i prosent
}

function convertToLetterGrade(percentage) {
  if (percentage > 88) {
    return "A";
  } else if (percentage > 76) {
    return "B";
  } else if (percentage > 64) {
    return "C";
  } else if (percentage > 52) {
    return "D";
  } else if (percentage > 40) {
    return "E";
  } else {
    return "F";
  }
}

for (let i = 0; i < listOfGrades.length; i++) {
  let number = listOfGrades[i]; //henter karakter poeng summen fra listen listOfGrades
  let percentage = convertToPercentageGrade(number, maksSum); //konverterer karakter poeng summen til prosent
  let letter = convertToLetterGrade(percentage); //konverterer prosent til bokstavkarakter

  printOut("Student " + (i + 1) + " scored " + number + " points, which is " + percentage.toFixed(2) + "% and a letter grade of " + letter + ".");
}

printOut(newLine);
printOut("--- Part 7 ----------------------------------------------------------------------------------------------");

//Function to roll 6 dice and return the results as an array
function rollDice() {
  let diceResults = []; //lager en tom liste for å holde på terning kastene

  for (let i = 0; i < 6; i++) {
    diceResults.push(Math.floor(Math.random() * 6) + 1); //genererer et tilfeldig tall mellom 1 og 6 (inklusivt) og legger det inn i listen diceResults
  }
  return diceResults;
}

//FULL STRAIGHT-------------------------------------------------------------------------------------------------
function isFullStraight(diceResults) {
  //Function to check if the roll is a full straight (1,2,3,4,5,6)

  const counts = [0, 0, 0, 0, 0, 0, 0]; //lager en liste for å holde på antall forekomster av hvert tall (indeks 0 er ikke brukt)

  for (let value of diceResults) {
    counts[value]++; //teller antall forekomster av hvert tall
  }

  for (let face = 1; face <= 6; face++) {
    if (counts[face] !== 1) {
      return false; //hvis et tall ikke forekommer nøyaktig en gang, så er det ikke en full straight
    }
  }
  return true; //returnerer true hvis alle tallene fra 1 til 6 forekommer nøyaktig en gang
}

let attempts = 0;
let result = rollDice();

//Loop until the full straight is rolled
do {
  attempts++;
  result = rollDice();
} while (!isFullStraight(result));

printOut("Full straight: It took " + attempts + " attempts to roll a full straight: " + result.join(", "));
printOut(newLine);

//3 PAIRS---------------------------------------------------------------------------------------------------------------------
function is3Pairs(diceResults) {
  let counts = [0, 0, 0, 0, 0, 0, 0]; //lager en liste for å holde på antall forekomster av hvert tall (indeks 0 er ikke brukt)

  for (let value of diceResults) {
    counts[value]++; //teller antall forekomster av hvert tall
  }

  let pairs = 0; //lager en variabel for å holde på antall par

  for (let face = 1; face <= 6; face++) {
    if (counts[face] === 2) {
      pairs++; //hvis et tall forekommer 2 ganger, så er det et par
    }
  }
  return pairs === 3; //returnerer true hvis det er 3 par
}

attempts = 0; //resetter antall forsøk
do {
  attempts++;
  result = rollDice();
} while (!is3Pairs(result));

printOut("3 Pairs: It took " + attempts + " attempts to roll 3 pairs: " + result.join(", "));
printOut(newLine);

//TOWER - 2 fo a kind and 4 of a kind----------------------------------------------------------------------------------------------
function isTower(diceResults) {
  let counts = [0, 0, 0, 0, 0, 0, 0]; //lager en liste for å holde på antall forekomster av hvert tall (indeks 0 er ikke brukt)

  for (let value of diceResults) {
    counts[value]++; //teller antall forekomster av hvert tall
  }

  let hasTwoOfAKind = false;
  let hasFourOfAKind = false;

  for (let face = 1; face <= 6; face++) {
    if (counts[face] === 2) {
      hasTwoOfAKind = true; //hvis et tall forekommer 2 ganger, så har vi et par
    } else if (counts[face] === 4) {
      hasFourOfAKind = true; //hvis et tall forekommer 4 ganger, så har vi fire like
    }
  }
  return hasTwoOfAKind && hasFourOfAKind; //returnerer true hvis vi har både et par og fire like
}

attempts = 0; //resetter antall forsøk
do {
  attempts++;
  result = rollDice();
} while (!isTower(result));

printOut("Tower (2+4): It took " + attempts + " attempts to roll a tower (2 of a kind and 4 of a kind): " + result.join(", "));
printOut(newLine);

//YATZY - 5 of a kind------------------------------------------------------------------------------------------------
function isYahtzee(diceResults) {
  let counts = [0, 0, 0, 0, 0, 0, 0];

  for (let value of diceResults) {
    counts[value]++; //teller antall forekomster av hvert tall
  }

  let hasSixOfAKind = false;

  for (let face = 1; face <= 6; face++) {
    if (counts[face] === 6) {
      hasSixOfAKind = true; //hvis et tall forekommer 6 ganger, så har vi en Yahtzee
    }
  }
  return hasSixOfAKind;
}

attempts = 0; //resetter antall forsøk
do {
  attempts++;
  result = rollDice();
} while (!isYahtzee(result));

printOut("Yahtzee: It took " + attempts + " attempts to roll a yahtzee " + result.join(", "));
