

// her arbejder jeg med arrays, har startet med at lave et tomt array
let emptyArray = [];

// så laver jeg et array med nogle frugter i 
const fruits = ["Watermelon", "Pineapple", "Mango"]

let fruit = fruits[1];

fruits[2] = "Kiwi";

// her tilføjer jeg en ny frugt til mit array
fruits.push("Pear");

fruits.shift();

// her fjerner jeg den første frugt i mit array
let index = fruits.indexOf("Kiwi");

// her laver jeg et nyt array med 3 nye frugter
const moreFruits = ["Banana", "Grapes", "Strawberry"];

// her bliver de to arrays kombineret til et nyt array
const combinedFruits = fruits.concat(moreFruits);

combinedFruits.sort();

// her laver jeg en kopi af mit array med slice uden et argument, så jeg får hele arrayet med
let betterCombinedFruits = combinedFruits.slice();

console.log(betterCombinedFruits);