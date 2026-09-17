
// her laver jeg bare en standart if statement
let x = 11;

if (x > 10) {
    console.log("x is greater than 10");
}

// her laver jeg en lang if else statement hvor jeg viser hvor meget der 
// kan skrives for meget, og at det egentlig kan optimeres
let y = -5;

if (y > 0) {
    console.log("y is positive");
}
else if (y < 0) {
    console.log("y is negative");
}
else if (y === 0) {
    console.log("y is equal to 0");
}

// endnu en if statement hvor jeg tjekker om personen er 18 eller over 
let personAge = 25;

if (personAge >= 18) {
    console.log("You can vote.");
}

// her laver jeg en if statement hvor jeg bruger den true equal value
let text = "Javascript elective"

if (text === "Javascript elective") {
    console.log("Welcome to Javascript elective.");
}

// her bruger jeg en if statement med en % operator for at sikre mig at 
// tallet er lige, ellers er der en else der fortæller om det er odd
let evenNumber = 4;

if (evenNumber % 2 === 0) { 
    console.log("The number is even.");
}
else {
    console.log("The number is odd.");
}

// her demonstrere jeg brugen af switch case, det er en anden syntax man kan bruge for at 
// mindske mængden af kode man skriver, især her hvor jeg prøver at skal validere om 
// det er en bestemt dag på ugen (bro code har en god switch case)
let day = 1;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
        break;
}

// gentagelse af switch case, dog med compound operator
let testSCore = 85;

switch (true) {
    case (testSCore >= 90):
        console.log("Grade: 12");
        break;
    case (testSCore >= 80):
        console.log("Grade: 10");
        break;
    case (testSCore >= 70):
        console.log("Grade: 7");
        break;
    case (testSCore >= 60):
        console.log("Grade: 4");
        break;
    case (testSCore >= 50):
        console.log("Grade: 02");
        break;
    case (testSCore >= 40):
        console.log("Grade: 00");
        break;
    case (testSCore >= 30):
        console.log("Grade: -3");
        break;
}

console.log(testSCore);


// her laver jeg en switch case hvor jeg bruger true equal operator
// så min værdi af variablen er apple, hvor jeg så har lavet så der 
// er forskellige at vælge mellem, men til sidst ville man printe 
// at man har et æble
let iPickThisFruit = "apple";

switch (true) {
    case (iPickThisFruit === "apple"):
        console.log("You have an apple.");
        break;
    case (iPickThisFruit === "banana"):
        console.log("You have a banana.");
        break;
    case (iPickThisFruit === "orange"):
        console.log("You have an orange.");
        break;
    default:
        console.log("You have a different fruit.");
        break;
}

console.log(iPickThisFruit);