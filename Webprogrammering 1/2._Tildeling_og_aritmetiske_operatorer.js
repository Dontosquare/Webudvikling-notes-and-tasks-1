
// det her er bare basal regning i javascript, hvor jeg har lavet nogle variabler og regnet med dem

//basal plus
let sum = 10 + 5;

//basal minus
let difference = 20 - 8;

//basal gange
let product = 6 * 7;

//basal division
let quotient = 50 / 10;

// her bruger jeg noget der hedder compound assignment operators
// hvilket betyder at jeg kan bruge +=, -=, *=, /= for at opdatere en variabel med en ny værdi

// tilføjer 5 til variablen
let randomNumber = 15;
randomNumber += 5;

// trækker 25 fra variablen
let balance = 100;
balance -= 25;

// ganger variablen med 3
let amount = 10;
amount *= 3;

// dividerer variablen med 2
let quantity = 100;
quantity /= 5;

// her bruger jeg noget der hedder arithmetic expression, hvor at jeg 
// laver den klassiske matematiske udregning hvor man regner paranteserne først 
// og så udregner det fulde stykke bagefter
let newresult = (10 + 5) * 2; 

// her bruger jeg noget der hedder noget meget flot som compound
// assignment with arithmetic expression hvor jeg først har variablen
// ved navn number3 med en værdi på 3, sat til at gange med 4 og så plus 2
let number3 = 3;
number3 *= 4 + 2;

// her bruger jeg noget der hedder mixed expression, hvor at jeg bruger den matematiske regel 
// som gør at man udregner paranteserne først og så står den egentlige udregning bagefter
let result = (20/4) + (3 * 2);

// her kombinerer jeg mixed expression med compound assignment hvor jeg starter med
// at give y en værdi på 15, så laver jeg parantesudregning med mixed expression 
// og så kan man regne det ud til sidst
let y = 15;
y = (y -= 7) /= 2;

// her laver jeg en standart "greater than" check, som er med til at 
// tjekke om 10 er større end 5 ved hjælp af ">" 
let isGreater = 10 > 5;

// her gør jeg det samme igen, men hvor jeg bruger "<=" som er at tjekke om det er mindre
// eller ligmed 7
let isLessThanOrEqualTo = 7 <= 7;

// her bruger jeg en funktion hvor at jeg bruger "===" som svarer til at jeg laver 
// en TRUE equal, så begge værdier skal være sande på begge sider
let isEqual = 3 === 3;
