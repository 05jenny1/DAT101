"use strict";

const CarTypes = [
  { value: 1, caption: "Aston Martin" },
  { value: 2, caption: "Bentley" },
  { value: 3, caption: "Alfa Romeo" },
  { value: 4, caption: "Ferrari" },
  { value: 5, caption: "Subaru" },
  { value: 6, caption: "Porsche" },
  { value: 7, caption: "Tesla" },
  { value: 8, caption: "Toyota" },
  { value: 9, caption: "Renault" },
  { value: 10, caption: "Peugeot" },
  { value: 11, caption: "Suzuki" },
  { value: 12, caption: "Mitsubishi" },
  { value: 13, caption: "Nissan" },
];

const GirlsNames = ["Anne", "Inger", "Kari", "Marit", "Ingrid", "Liv", "Eva", "Berit", "Astrid", "Bjørg", "Hilde", "Anna", "Solveig", "Marianne", "Randi", "Ida", "Nina", "Maria", "Elisabeth", "Kristin"];

const MovieGenre = [
  "Action",
  "Adventure",
  "Animation",
  "Biography",
  "Comedy",
  "Crime",
  "Documentary",
  "Drama",
  "Family",
  "Fantasy",
  "Film Noir",
  "History",
  "Horror",
  "Music",
  "Musical",
  "Mystery",
  "Romance",
  "Sci-Fi",
  "Short",
  "Sport",
  "Superhero",
  "Thriller",
  "War",
  "Western",
];

//--- Part 1 ----------------------------------------------------------------------------------------------

// DOMContentLoad - venter til DOM er lastet, hvis ikke vil ikke elementer finnes når programmet kjøres
document.addEventListener("DOMContentLoaded", () => {
  // "velger" calculate-knappen og legger på en "lytter" (event listener) som venter på klikket som starter funksjonen calculateRectangle
  document.getElementById("cmbTask1Calculate").addEventListener("click", calculateRectangle);

  function calculateRectangle() {
    //velger width input-feltet og henter verdien og ..........(.value)henter verdien
    let width = Number(document.getElementById("txtRectWidth").value);
    //velger height input-feltet og henter verdien og ..........(.value)henter verdien
    let height = Number(document.getElementById("txtRectHeight").value);

    // regner ut og lagrer verdien i variabler
    let circumference = 2 * (width + height);
    let area = width * height;

    // velger <p> elementet med samme id som txtTask1Output og skriver ut resultatet
    document.getElementById("txtTask1Output").textContent = "Circumference = " + circumference + ", Area = " + area;
  }
});

//--- Part 2 ----------------------------------------------------------------------------------------------

document.addEventListener("DOMContentLoaded", () => {
  // lager en tom array for å lagre ordene
  const task2Words = [];
  const inputWord = document.getElementById("txtTask2Word"); //velger input-feltet
  const output = document.getElementById("txtTask2Output"); //velger output <p>-elementet

  // venter på at brukeren trykker "Enter" i input-feltet
  inputWord.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      //kjører kun hvis "Enter" er trykket
      event.preventDefault(); //passer på at skjemaet ikke sendes inn

      const word = inputWord.value.trim(); //tar bort unødvendige mellomrom
      if (word !== "") {
        //sjekker at det ikke er tomt
        task2Words.push(word); //legger til ordet i arrayen
      }

      output.textContent = "Number of words = " + task2Words.length + ", Words: " + task2Words.join(", "); //oppdaterer output, skriver ut antall og ordene

      inputWord.value = ""; //tømmer input-feltet for neste ord
    }
  });
});

//--- Part 3 ----------------------------------------------------------------------------------------------

document.addEventListener("DOMContentLoaded", () => {
  //venter på at DOM er lastet
  const btnCheck = document.getElementById("cmbTask3CheckAnswer"); //velger "Check Answer"-knappen
  const output = document.getElementById("txtTask3Output"); //velger output <p>-elementet

  btnCheck.addEventListener("click", () => {
    //venter på klikk på knappen så kjører funksjonen
    const checkboxes = document.querySelectorAll('input[name="chkTask3"]'); //velger alle checkboxene med name="chkTask3"

    const selected = [];

    // looper igjennom alle checkboxene
    checkboxes.forEach((box) => {
      if (box.checked) {
        //om boksen er krysset av, lagrer vi dem i en liste med valgte(.push)
        selected.push(box.value);
      }
    });

    // viser resultatet i output <p>-elementet
    if (selected.length === 0) {
      //om ingen bokser er valgt, printer vi "No boxes selected".
      output.textContent = "No boxes selected.";
    } else {
      //om en eller flere bokser er valgt, printer vi de valgte verdiene.
      output.textContent = "Selected values: " + selected.join(", ");
    }
  });
});

//--- Part 4 ----------------------------------------------------------------------------------------------
//radioknapper er knapper som tillater brukeren å velge én av flere forhåndsdefinerte alternativer. Kan ikke velge flere samtidig.

document.addEventListener("DOMContentLoaded", () => {
  // venter på at DOM er lastet

  const container = document.getElementById("divTask4Cars"); // velger container-diven som skal inneholde radioknappene
  const output = document.getElementById("txtTask4Output"); // velger output <p>-elementet for å vise valgt biltype

  // lager radioknapper for hver biltype. Radio knappene legges til i container-diven
  CarTypes.forEach((car) => {
    // looper gjennom hver biltype i CarTypes-arrayen
    const radio = document.createElement("input"); // lager et nytt input-element for hver biltype
    radio.type = "radio"; //spesifiserer at input-elementet er en radioknapp
    radio.name = "cars"; // vi gir alle radioknappene samme name-attributt slik at de fungerer som en gruppe, dette gjør at kun én kan velges om gangen
    radio.value = car.caption; // setter verdien til bilens caption (navn) fra CarTypes-arrayen

    radio.id = "car" + car.value; // gir hver radioknapp en unik ID basert på bilens value, gjør at vi kan knytte en label til den

    const label = document.createElement("label"); // lager et label-element for radioknappen
    label.htmlFor = radio.id; // kobler labelen til radioknappen ved å sette htmlFor til radioknappens ID
    label.textContent = car.caption; // setter labelens tekst til bilens caption (navn)

    // legger til radioknappen, labelen og new line break i container-diven
    container.appendChild(radio); // legger til radioknappen i containeren/diven
    container.appendChild(label); // legger til labelen i containeren/diven
    container.appendChild(document.createElement("br"));

    radio.addEventListener("click", () => {
      //når radioknappen klikkes, oppdateres output med valgt biltype
      output.textContent = "You selected: " + car.caption;
    });
  });
});

//--- Part 5 ----------------------------------------------------------------------------------------------

document.addEventListener("DOMContentLoaded", () => {
  // venter på at DOM er lastet
  const select = document.getElementById("selectTask5Animals"); // velger select-elementet
  const output = document.getElementById("txtTask5Output"); // velger output <p>-elementet

  select.addEventListener("change", () => {
    //kjører funksjonen når brukeren endrer valget i dropdown-menyen
    const selectedAnimal = select.options[select.selectedIndex].text; // henter indeksen til det valgte alternativet og deretter teksten til det alternativet
    output.textContent = "You selected: " + selectedAnimal; // oppdaterer output med valgt dyr
  });
});

//--- Part 6 ----------------------------------------------------------------------------------------------

document.addEventListener("DOMContentLoaded", () => {
  // venter på at DOM er lastet
  const select = document.getElementById("selectTask6Girls"); // velger select-elementet for å legge til jentenavn
  const output = document.getElementById("txtTask6Output"); // velger output <p>-elementet for å vise valgt jentenavn

  GirlsNames.forEach((name, index) => {
    // looper gjennom hvert jentenavn i GirlsNames-arrayen
    const option = document.createElement("option"); // lager et nytt option-element for hvert jentenavn
    option.value = index; // setter verdien til option-elementet til indeksen i arrayen
    option.textContent = name; // setter teksten til option-elementet til jentenavnet
    select.appendChild(option); // legger til option-elementet i select-elementet
  });

  select.addEventListener("change", () => {
    // kjører funksjonen når brukeren endrer valget i dropdown-menyen
    const selectedName = select.options[select.selectedIndex].text; // henter teksten til det valgte alternativet
    output.textContent = "You selected: " + selectedName; // oppdaterer output med valgt jentenavn
  });
});

//--- Part 7 ----------------------------------------------------------------------------------------------

document.addEventListener("DOMContentLoaded", () => {
  // venter på at DOM er lastet

  const selectGenre = document.getElementById("selectMovieGenre"); // velger select-elementet for filmgenre
  const table = document.getElementById("tblMovies"); // velger tabellen der filmene skal vises
  const btnAdd = document.getElementById("cmbAddMovie"); // velger "Add Movie"-knappen

  MovieGenre.forEach((genre) => {
    // looper gjennom hver filmgenre i MovieGenre-arrayen
    const option = document.createElement("option");
    option.textContent = genre;
    selectGenre.appendChild(option);
  });

  btnAdd.addEventListener("click", () => {
    // kjører funksjonen når "Add Movie"-knappen klikkes
    const title = document.getElementById("txtMovieTitle").value; // henter tittelen fra input-feltet
    const genre = selectGenre.options[selectGenre.selectedIndex].text; // henter den valgte filmgenren
    const director = document.getElementById("txtMovieDirector").value; // henter regissøren fra input-feltet
    const rate = document.getElementById("txtMovieRate").value; // henter ratingen fra input-feltet

    const row = table.insertRow(-1); // legger til en ny rad på slutten av tabellen

    // legger til celler i raden for hver kolonne
    const cellNr = row.insertCell(0); //celle for nummer
    const cellTitle = row.insertCell(1); //celle for tittel
    const cellGenre = row.insertCell(2); //celle for genre
    const cellDirector = row.insertCell(3); //celle for director
    const cellRate = row.insertCell(4); //celle for rate

    // fyller cellene med data
    cellNr.textContent = table.rows.length - 1; //-1 fordi første rad er header
    cellTitle.textContent = title; //celle for tittel
    cellGenre.textContent = genre; //celle for genre
    cellDirector.textContent = director; //celle for director
    cellRate.textContent = rate; //celle for rate

    // tømmer input-feltene for neste film så brukeren kan legge til en ny film
    document.getElementById("txtMovieTitle").value = ""; //tømmer tittel-feltet
    document.getElementById("txtMovieDirector").value = ""; //tømmer director-feltet
    document.getElementById("txtMovieRate").value = 5; //setter rate-feltet tilbake til 5 som standard
    selectGenre.selectedIndex = 0; //setter genre-feltet tilbake til første alternativ
  });
});
