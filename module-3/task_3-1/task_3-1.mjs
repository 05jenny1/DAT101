"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1, 2, 3 ----------------------------------------------------------------------------------------");

let wakeUpTime = 8; /*Lagrer en verdi i wakeUpTime og printer ut verdien. */
printOut("Wake up time:  " + wakeUpTime);

/*Kjører gjennom en if else statement og printer ut korresponderende output */
if (wakeUpTime === 7) {
  printOut("If I wake up at exactly " + wakeUpTime + ", I can take the bus to school.");
} else if (wakeUpTime === 8) {
  printOut("If I wake up at exactly " + wakeUpTime + ", I can take the train to school");
} else {
  printOut("If I wake up at exactly " + wakeUpTime + ", I have to take the car to school.");
}

printOut(newLine);

printOut("--- Part 4, 5 --------------------------------------------------------------------------------------------");

let number = 2; /*Setter en verdi for number og printer ut */
printOut("Value:  " + number);

/*Kjører en if else statement for å se om verdien er positiv, negativ eller lik null.  */
if (number > 0) {
  /*er verdien større enn null? */
  printOut("The number " + number + " is positive. ");
} else if (number < 0) {
  /*er verdien mindre enn null? */
  printOut("The number " + number + " is negative.");
} else {
  printOut("The number is zero.");
}

printOut(newLine);

printOut("--- Part 6, 7 --------------------------------------------------------------------------------------------");

let imageSize = Math.floor(Math.random() * 8) + 1; /* ganger med 8 for range (0-7.9999), legger på en +1 for å få range (1-8.99999). Bruker .floor til å runde ned til nærmeste heltall */
printOut("ImageSize:  " + imageSize + " MP."); /*printer ut ImageSize */

if (imageSize >= 4 && imageSize < 6) {
  /*Ser om verdien ImageSize holder er mer eller lik fire OG mindre enn 6 */
  printOut("Thank you.");
} else if (imageSize < 4) {
  /*Ser om verdien ImageSize holder er mindre enn 4 */
  printOut("The image is too small. ");
} else {
  printOut("The image is too Large."); /*Ser om verdien ImageSize holder er mer enn 6, eller bare ikke verdiene over */
}

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");

const monthList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]; /*Lager en liste med alle de 12 månedene i et år */

const noOfMonth = monthList.length; /*Ser hvor mange strings vi har i listen monthList */
const monthIndex = Math.floor(Math.random() * noOfMonth); /*Gir oss ett random tall mellom 0-11 fordi listen monthList inneholder 12 måneder.  */
const monthName = monthList[monthIndex]; /*Gir oss teksten som korresponderer med det tilfeldige monthIndex tallet */

printOut("Current month:  " + monthName); /*printer ut en tilfeldig måned */

/*kjører en if else statement for å se om måneden inneholder en r, og om man så må ta vitamin D tilskudd */
if (monthName.toLowerCase().includes("r")) {
  /*gjør om alle bokstavene i måneden til små bokstaver og ser om det er en bokstav lik r i måneden */
  printOut("You must take vitamin D");
} else {
  printOut("You do not need to take vitamin D.");
}

printOut(newLine);

/* Task 9*/
printOut("--- Part 9 ---------------------------------------------------------------------------------------------");

const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; /*Lager en liste med antall i dager i månedene (ikke skuddår), indexen her matcher med samme måned i monthList i Part 8 */
const monthDays = daysInMonth[monthIndex]; /*Gir oss tallet som korresponderer med det tilfeldige monthIndex tallet */

printOut("Current month:  " + monthName); /*printer ut en tilfeldig måned */
printOut("There is " + monthDays + " days in this month. "); /*printer ut hvor mange dager det er i den tilfeldig valgte måneden. */

printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");

printOut("Current month:  " + monthName); /*printer ut en tilfeldig måned */

/*kjører en if else statement for å se om vi får månedene March, May eller April og printer ut et svar om det er tilfellet.  */
if (monthName === "March" || monthName === "May") {
  /*er måneden lik March ELLER May? */
  printOut("We are closed. ");
} else if (monthName === "April") {
  /*er måneden lik April? */
  printOut("We have temporary premises in the building next door. ");
} else {
  printOut("We are open. ");
}

printOut(newLine);
