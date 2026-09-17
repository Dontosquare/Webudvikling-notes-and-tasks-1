
// husk at sætte fokus i noterne at et default loop normalt starter med i=0 og i < 6
for (let i = 1; i < 6; i++) {
    console.log(i);
}


// her bruges den operatorer += for at incrementere i med 2 hver gang, så vi får 2,4,6,8,10

for (let i = 2; i <= 10; i += 2) {
  console.log(i);
}

// her laver jeg en variabel der har alfabetet i sig som jeg så kan loope ud

const alphabet = "abcdefghijklmnopqrstuvwxyz";

for (let i = 0; i < 5; i++) {
  console.log(alphabet[i]);
}


// her bliver i decrementeret med 1 hver gang, så vi får 5,4,3,2,1,0
for (let i = 5; i >= 0; i--) {
  console.log(i);
}


// her er vi skiftet over til while loops, så derfor ser det så anderledes ud
let i = 1;

while (i <= 5) {
  console.log(i);
  i++;
}

// som det første her har jeg ændret mit i navn til at være 2 fordi det clasher med programmet
// derefter har jeg gjort at i er 2 og lavet += 2 så vi får 2,4,6,8,10
let i2 = 2;

while (i2 <= 20) {
  console.log(i2);
  i2 += 2;
}

// genbrugt samme logik som øverst oppe

let i3 = 0;

while (i3 <= 5) {
  console.log(alphabet[i3]);
  i3++;
}

// her har vi vendt standart koden om igen så den decrementer 
// havde en stor fejl at jeg nede i loopet sagde at det var lig med 0 i stedet
// som så skabte 64 tusinde tal på et sekund

let i4 = 5;

while (i4 >= 1) {
  console.log(i4);
  i4--;
}

// her har jeg lavet et klassisk array og fået det loopet ud
// det er vigtigt at indholdet har "" ellers kan det give problemer

let array = ["1", "2", "3", "4", "5"];

for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}       

// her har jeg lavet et loop der tager alle strings af ordet
// hello og logger det individuelt

const str = "hello";

for (const letter of str) {
  console.log(letter);
}



