function checkDrinkType(drik) {
  if (drik == "øl" || drik == "snaps") {
    console.log("indeholder alkohol");
  } else if (drik == "cola" || drik == "faxe") {
    console.log("alkoholfri");
  }
}

const oelKnap = document.querySelector("#oel_container");
const snapsKnap = document.querySelector("#snaps_container");
const colaKnap = document.querySelector("#cola_container");
const faxeKnap = document.querySelector("#faxe_container");

oelKnap.addEventListener("click", function () {
  checkDrinkType("øl");
});

snapsKnap.addEventListener("click", function () {
  checkDrinkType("snaps");
});

colaKnap.addEventListener("click", function () {
  checkDrinkType("cola");
});

faxeKnap.addEventListener("click", function () {
  checkDrinkType("faxe");
});

function faaHilsen(time) {
  if (time >= 5 && time < 10) {
    console.log("Godmorgen");
  } else if (time >= 10 && time < 18) {
    console.log("Goddag");
  } else if (time >= 18 && time < 24) {
    console.log("Godaften");
  } else {
    console.log("Godnat");
  }
}

const nuvaerendeTime = new Date().getHours();
const hilsen = faaHilsen(nuvaerendeTime);
