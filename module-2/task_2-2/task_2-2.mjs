"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";


printOut("--- Part 1 ----------------------------------------------------------------------------------------------");

  const a = 2 + 3 * 2 - 4 * 6 ;
  const b = 2 + 3 * (2 - 4) * 6 ; /*using parentheses to get -34 as answer*/

printOut("Original expression:  " + a + "<br>" + "Modified expression:  " + b);
printOut(newLine);




printOut("--- Part 2 ----------------------------------------------------------------------------------------------");

const lengthMm = (25 * 1000) + (34 *10);        /*Omgjør lengden til mm*/

const mmPerInch = 25.4;                         /*mm i en inch*/

const total = lengthMm / mmPerInch ;            /*Regner total inches*/

printOut("25 m and 34 cm = " + total.toFixed(2) + " mm");
printOut(newLine);





printOut("--- Part 3 ----------------------------------------------------------------------------------------------");

const days3 = 3;
const hours3 = 12;
const minutes3 = 14; 
const seconds3 = 45; 

/*Konverterer til minutter*/
const daysToMin3 = days3 * 24 * 60 ;                                             /*ganger dager med antall minutter i en dag */
const hoursToMin3 = hours3 * 60 ;                                                /*ganger timer med antall minutter i en time */
const secondsToMin3 = seconds3 / 60 ;                                            /*deler sekunder med antall sekunder i ett minutt */

const totalMinutter3 = daysToMin3 + hoursToMin3 + minutes3 + secondsToMin3;      /*regner ut totalen, ved å addere alle minuttene */


printOut("3 days, 12 hours, 14 minutes and 45 seconds = " + totalMinutter3 +" min");
printOut(newLine);





printOut("--- Part 4 ----------------------------------------------------------------------------------------------");

const totalMinutes = 6322.52;                            

const minutesInDay = 24 *60 ;                                    /*Minutt i en dag*/
const days = Math.floor(totalMinutes / minutesInDay);            /*Antall dager*/

let remainingMinutes = totalMinutes - (days * minutesInDay);     /*Min igjen i dagen vi ikke har konvertert*/

const hours = Math.floor (remainingMinutes / 60 );               /*Antall timer*/
remainingMinutes = remainingMinutes - (hours * 60);              /*Min igjen i dagen vi ikke har konvertert*/

const minutes = Math.floor(remainingMinutes) ;                   /*Antall minutter */
const seconds = (remainingMinutes -minutes) * 60;                /*Antall sekunder*/

printOut(totalMinutes + " minutes is =  " + days + " days " + hours + " hours " + minutes + " minutes and " + seconds.toFixed(2) + " seconds. ");
printOut(newLine);





printOut("--- Part 5 ----------------------------------------------------------------------------------------------");


const usdToNokRate = 76 / 8.6;                                      /*NOK per USD */
const nokToUsdRate = 8.6 / 76;                                      /*USD per NOK */

const totalDollars = 54;                                            /*antall dollar vi starter med */

/*Konverterer 54 USD til NOK */
const totalNOK = Math.floor(totalDollars * usdToNokRate)            /*bruker Math.floor for å runde nedover til nærmeste hele dollar */

/*Konverterer totalNOK til DOllars */
const secondaryTotalDollars = Math.round(totalNOK * nokToUsdRate)   /*Bruker math.round fordi svaret blir 53.9. Derfor vil det være misvisende ved å runde nedover med floor */


printOut( "54 dollars is:  " + totalNOK + " kroner. " + "<br>" + totalNOK + " Nok is:  " + secondaryTotalDollars+ " dollars.");
printOut(newLine);





printOut("--- Part 6 ----------------------------------------------------------------------------------------------");


const text = "There is much between heaven and earth that we do not understand.";

printOut("Numbers of characters in the text:  " + text.length);

printOut("The character at the position 19 in the text:  " + text[19]);

printOut("The characters at position number 35 and 8 characters forward:  " + text.slice (35, 35 + 8));

printOut("Index of which the word earth starts:  " + text.indexOf("earth"));

printOut(newLine);


printOut("--- Part 7 ----------------------------------------------------------------------------------------------");


/*Printing out the different statements made */
printOut("1. Is 5 greater than 3?  " + (5 > 3)); 


printOut("2. Is 7 greater than or equal to 7?  " + ( 7 >= 7 ));                               /* >= greater or equal */


printOut("3. Is a greater than b?  " + ('a' > 'b'));                                          /*Bokstaver blir validert alfabetisk, derfor har b en høyere verdi enn a */


printOut("4. Is 1 less than a?  " + ( 1 < 'a')); 


printOut("5. Is 2500 less than abcd?  " + ( '2500' < 'abcd'));


printOut("6. arne is not equal to thomas.  " + ('arne' != 'thomas'));                         /* ser om ordene IKKE (!) er like*/


printOut("7. (2 equals 5) is this statement true?  " + ( 2 == 5 ));                           /* ser om 2 og 5 er LIKE (==)*/


printOut("8. abcd is greater than bcd, is this statement false?  " + ( 'abcd' > 'bcd'));      /* Javascript ser på den første bokstaven først. b har høyere verdi enn a*/


printOut(newLine);





printOut("--- Part 8 ----------------------------------------------------------------------------------------------");


/* fra tekst "254" til et tall */
const number1 = Number("254");                  /* NUmber gjør hele stringen til et tall. Funker for både integers og floats */
printOut('254 =  ' + number1);


/* fra tekst "57.23" til et tall*/
const number2 = Number("57.23");                /*gjør om til et float /desimaltall */
printOut('57.23 =  ' + number2);


/* fra tekst 25 kroner til et nummer*/
const number3 = parseInt("25 kroner");          /*analyserer tallet til det kommer til en bokstav */
printOut('25 kroner =  ' + number3)


printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
                                                    
let r = Math.ceil(Math.random()* 360 ) ;            /*Math.random gir oss et desimalttall mellom 0 og 1, Math.random() *360 gir et desimaltall mellom 0 og 359,9999*/
printOut("Random number r:  " + r);                 /*Math.ceil runder opp nærmeste heltall (1-360)*/


printOut(newLine);


/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");

const totalDays = 131;
const Weeks = Math.floor(totalDays / 7);      /*deler på 7 for å få antall uker, math.floor for å få det nederste heltallet */
const remainingDays = totalDays % 7;          /*gir oss det som er igjen ETTER at programmet har delt totalDAys på 7 */

printOut("There is a total of  " + Weeks + " weeks and  " + remainingDays + " days in " + totalDays + "days.")


printOut(newLine);