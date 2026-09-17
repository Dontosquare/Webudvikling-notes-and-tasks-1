
// her er bare nogle basale værdier
let name = "Joachim";
let age = 26;
let hungry = true;
let number = 5;

// her laver jeg en if else statement hvor jeg kun har true indhold i
if (age === 26 && name === "Joachim") {
    console.log("You are Joachim and you are 26 years old.");
} 

// her laver jeg en if else statement hvor jeg bruger "||" som er en logisk operator
// det vil sige at det skal være enten at jeg hedder Joachim eller at jeg er 28 år
// hvor den ene er falsk, fordi jeg jo er 26 lige nu
if (name === "Joachim" || age === 28) {
    console.log("You are Joachim or you are 28 years old.");
}

// her bruger jeg en logisk operator i form af "!" som er med til at sige noget
// er en falsk værdi, så det vil sige jeg er faktisk IKKE sulten selvom værdien hungry 
// er sat som true oppe i variablerne øverst
if (!hungry) {
    console.log("You are not hungry.");
}

// her prøver jeg at lave en if-else statement der tjekker om tallet er positivt
// det gør jeg på den måde at jeg tjekker ved hjælp af "!" at tallet ikke er 0, 
// derefter tjeker jeg på højre side af && at tallet er større end 0 for at 
// give et positivt tal.
// nedenunder laver jeg en en errorhandling hvor jeg igen bruger samme formel men
// har ændret på ">" til "<" for at tjekke om det er et negativt nummer
// til sidst, hvis begge to ikke går op, så må det betyde at tallet er 0
if (number !== 0 && number > 0) {
    console.log("You have a positive number.");
}
else if (number !== 0 && number < 0) {
    console.log("You have a negative number.");
}
else {
    console.log("You have zero.");
}



// her laver jeg en tjekker på et negativt nummer
// det er en klassisk errorhandling hvor værdien på negativenumber 
// er -7 og så tjekker jeg igennem om den er positiv eller negativ
let negativeNumber = -7;

if (negativeNumber > 0) {
    console.log("The number is positive.");
} else if (negativeNumber < 0) {
    console.log("The number is negative.");
} else {
    console.log("The number is zero.");
}


// her tjekker jeg om tallene er lige og om det er større end 12
// det gør jeg ved at bruge % operatoren som er med til at tjekke om 
// tallet er even, fordi det er "% 2"
let numberTask = 12;

if (numberTask % 2 === 0 && numberTask > 10) {
    console.log("The number is even and greater than 10.");
}

// her bruger jeg en switchcase funktion, som er en syntax man bruger 
// for at mindske en masse if else. ellers fungerer det som da jeg tjekkede for positiv
// og negativ længere oppe (der er en god bro code video omkring det)
let switchNumber = 10;

switch (switchNumber) { 
    case (switchNumber > 0 && switchNumber % 2 === 0):
        console.log("The number is a positive even number.");
        break;
    case (switchNumber < 0 && switchNumber % 2 === 0):
        console.log("The number is a negative even number.");
        break;
    default:
        console.log("The number is zero.");
        break;
}

// her tjekker jeg om et tal er mellem 10 og 20 ved at bruge >0 og <= som 
// viser at det er større end 10 og mindre end 20
let x = 15;

if (x >= 10 && x <= 20) {
    console.log("x is between 10 and 20.");
} else {
    console.log("x is outside the range of 10 to 20.");
}

// her tjekker jeg om hello har en bogstavværdi større end 5 ved hjælp af .lenght 
let stringValue = "Hello";

if (stringValue.length > 5) {
    console.log("The string is longer than 5 characters.");
}

// her har jeg et array, og med det array har jeg 3 frugter
// under den variabel har jeg en anden variabel som hedder itemtofind
// for at finde banana skal jeg bruge inventory include i min if else statement
// for at være sikker på at få værdien banana med fra begge variabeler, derefter
// skal jeg console logge itemtofind som værdi med formatteret strings, så itemtofind
// bliver true
let inventory = ["apple", "banana", "orange"];
let itemToFind = "banana";

if (inventory.includes(itemToFind)) {
    console.log(`${itemToFind} is in the array.`);
} else {
    console.log(`${itemToFind} was not found in the array.`);
}