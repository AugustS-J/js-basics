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
