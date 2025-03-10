/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";

// Concatenate the string variables into one new string

const stringComplete = `${s1} ${s2} ${s3} ${s4} ${s5} ${s3} ${s2} ${s1} ${s4}`;
console.log("Iteration 1.1:", stringComplete);

// Print out the concatenated string

/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";

// Convert the last letter of part1 and part2 to uppercase and concatenate the strings

const part1Done = part1.slice(0, 3) + part1[3].toUpperCase();
const part2Done = part2.slice(0, 5) + part2[5].toUpperCase();

const result = part1Done + part2Done;

// Print the cameLtaiL-formatted string

console.log("Iteration 1.2:", result);

/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84;

// Calculate the tip (15% of the bill total)

const tax = 84 * 0.15;

// Print out the tipAmount

console.log("Iteration 2.1:", tax);

/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

// Generate a random integer between 1 and 10 (inclusive)

const randomInteger = Math.ceil(Math.random() * 10);

// Print the generated random number

console.log("Iteration 2.2:", randomInteger);

/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b; // False
const expression2 = a || b; // True
const expression3 = !a && b; // False
const expression4 = !(a && b); // True
const expression5 = !a || !b; // True
const expression6 = !(a || b); // False
const expression7 = a && a; // True

console.log("Iteration 3.1:", expression7);
