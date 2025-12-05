"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

//definere kontotyper
const AccountType = {
  Normal: "Brukskonto",
  Saving: "Sparekonto",
  Credit: "Kredittkonto",
  Pension: "Pensjonskonto",
};

// vaultatyper og deres vekslingskurser i forhold til NOK
export const CurrencyTypes = {
  NOK: { value: 1.0, name: "Norske kroner", denomination: "kr" },
  EUR: { value: 0.0985, name: "Europeiske euro", denomination: "€" },
  USD: { value: 0.1091, name: "United States dollar", denomination: "$" },
  GBP: { value: 0.0847, name: "Pound sterling", denomination: "£" },
  INR: { value: 7.3809, name: "Indiske rupee", denomination: "₹" },
  AUD: { value: 0.1581, name: "Australske dollar", denomination: "A$" },
  PHP: { value: 6.5189, name: "Filippinske peso", denomination: "₱" },
  SEK: { value: 1.058, name: "Svenske kroner", denomination: "kr" },
  CAD: { value: 0.1435, name: "Canadiske dollar", denomination: "C$" },
  THB: { value: 3.3289, name: "Thai baht", denomination: "฿" },
};

// Universal Bankkonto klasse
class TAccount {
  #accountType;
  #balance;
  #withdrawCount;
  #currencyType = "NOK";

  constructor(aType, aAmount = 0) {
    this.#accountType = aType;
    this.#balance = aAmount;
    this.#withdrawCount = 0;
  }

  // privat metode for valutakonvertering
  #convertCurrency(fromType, toType, amount) {
    return amount * (CurrencyTypes[toType].value / CurrencyTypes[fromType].value);
  }

  //returnerer kontoinformasjon som tekst
  toString() {
    return "My Account = " + this.#accountType;
  }

  // endrer kontotype og resetter teller
  setType(aType) {
    printOut("Account is changed from " + this.#accountType + " to " + aType);
    this.#accountType = aType;
    this.#withdrawCount = 0;
  }

  // endrer kontovaluta og konverterer saldo
  setCurrencyType(aType) {
    if (this.#currencyType === aType) {
      //gjør ingenting hvis samme valuta
      return;
    }

    const oldName = CurrencyTypes[this.#currencyType].name; //lagrer gammel valutainfo for utskrift
    const oldDenom = CurrencyTypes[this.#currencyType].denomination; //lagrer gammel valutainfo for utskrift

    this.#balance = this.#convertCurrency(this.#currencyType, aType, this.#balance); //konverterer saldo til ny valuta
    this.#currencyType = aType; //setter ny valutatype

    const newName = CurrencyTypes[aType].name; //lagrer ny valutainfo for utskrift
    const newDenom = CurrencyTypes[aType].denomination; //lagrer ny valutainfo for utskrift

    printOut("The account currency has changed from " + oldName + " to " + newName + ". New balance is " + this.#balance.toFixed(2) + newDenom);
  }

  //returnerer kontosaldo
  getBalance() {
    return this.#balance;
  }

  //returnerer kontovaluta
  getCurrencyType() {
    return this.#currencyType;
  }

  //setter inn penger på konto med valgfri valuta
  deposit(aAmount, aType) {
    if (aType === undefined) aType = "NOK";
    const convertedAmount = this.#convertCurrency(aType, this.#currencyType, aAmount);
    this.#balance += convertedAmount;
    this.#withdrawCount = 0;

    const currencyName = CurrencyTypes[aType].name;
    const denom = CurrencyTypes[this.#currencyType].denomination;

    printOut("Deposit of " + aAmount.toFixed(2) + " " + currencyName + ", new balance is " + this.#balance.toFixed(2) + denom);
  }

  //tar ut penger fra konto med valgfri valuta og sjekker begrensninger
  withdraw(aAmount, aType) {
    if (aType === undefined) aType = "NOK";
    const convertedAmount = this.#convertCurrency(aType, this.#currencyType, aAmount);

    // pensjonskonto kan ikke ta ut penger
    if (this.#accountType === AccountType.Pension) {
      printOut("You can't withdraw from a pension account!");
      return;
    }

    //sparekonto kan ikke ta ut mer enn tre ganger
    if (this.#accountType === AccountType.Saving && this.#withdrawCount >= 3) {
      printOut("You can't withdraw from a savings account more than three times!");
      return;
    }

    this.#balance -= convertedAmount;
    this.#withdrawCount++;

    const currencyName = CurrencyTypes[aType].name;
    const denom = CurrencyTypes[this.#currencyType].denomination;

    printOut("Withdrawal of " + aAmount.toFixed(2) + " " + currencyName + ", new balance is " + this.#balance.toFixed(2) + denom);
  }

  //returnerer antall uttak
  getWithdrawCount() {
    return this.#withdrawCount;
  }
}

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");

printOut(Object.values(AccountType).join(", ")); //liste opp kontotyper på en linje

printOut(newLine);
printOut("--- Part 2 ----------------------------------------------------------------------------------------------");

const myAccount = new TAccount(AccountType.Normal, 0); //oppretter konto med startbeløp 0kr
printOut(myAccount.toString()); //skriver ut kontoinformasjon
myAccount.setType(AccountType.Saving); //endrer kontotype
printOut(myAccount.toString()); //skriver ut kontoinformasjon igjen

printOut(newLine);
printOut("--- Part 3 ----------------------------------------------------------------------------------------------");

myAccount.deposit(100); //setter inn 100kr
myAccount.withdraw(25); // tar ut 25kr
printOut("Final balance is: " + myAccount.getBalance().toFixed(2) + "kr"); //skriver ut sluttbalanse

printOut(newLine);
printOut("--- Part 4 ----------------------------------------------------------------------------------------------");

myAccount.setType(AccountType.Saving); //setter kontotype til sparekonto
myAccount.deposit(25); //setter inn 25kr
myAccount.withdraw(30); //tar ut 30kr
myAccount.withdraw(30); //tar ut 30kr
myAccount.withdraw(30); //tar ut 30kr
myAccount.withdraw(30); //forsøker å ta ut 30kr (skal feile pga uttaksbegrensning)
myAccount.setType(AccountType.Pension); //setter kontotype til pensjonskonto
myAccount.withdraw(30); //forsøker å ta ut 30kr (skal feile pga ingen uttak tillatt)
myAccount.setType(AccountType.Saving); //setter kontotype tilbake til sparekonto
myAccount.withdraw(10); //tar ut 10kr (skal fungere siden teller er resettet)

printOut(newLine);
printOut("--- Part 5 ----------------------------------------------------------------------------------------------");

myAccount.deposit(150); //setter inn 150kr

printOut(newLine);
printOut("--- Part 6 ----------------------------------------------------------------------------------------------");

myAccount.setCurrencyType("SEK"); //endrer valuta til SEK
myAccount.setCurrencyType("USD"); //endrer valuta til USD
myAccount.setCurrencyType("NOK"); //endrer valuta tilbake til NOK

printOut(newLine);
printOut("--- Part 7 ----------------------------------------------------------------------------------------------");

myAccount.deposit(12, "USD"); //setter inn 12 USD
myAccount.withdraw(10, "GBP"); //tar ut 10 GBP

myAccount.setCurrencyType("CAD"); //endrer valuta til CAD
myAccount.setCurrencyType("INR"); //endrer valuta til INR

//tar ut hele saldoen i SEK
const currentBalance = myAccount.getBalance(); //henter nåværende saldo i INR
const currentCurrencyValue = CurrencyTypes[myAccount.getCurrencyType()].value; //henter nåværende valutakurs
const SEKValue = CurrencyTypes["SEK"].value; //henter SEK valutakurs
const remainingBalanceInSEK = currentBalance * (SEKValue / currentCurrencyValue); //konverterer saldo til SEK

myAccount.withdraw(remainingBalanceInSEK, "SEK"); //tar ut hele saldoen i SEK

printOut("Final balance is: " + myAccount.getBalance().toFixed(2) + "kr"); //skriver ut sluttbalanse
printOut(newLine);
