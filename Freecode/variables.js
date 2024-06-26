
// This is in-line code

/*This is a multi-line code */

var myName;

// Setup
var a;

// Only change code below this line
a = 7;

//PROBLEM: Assign the contents of a to variable b.

// Setup
var a;
a = 7;
var b;

// Only change code below this line
b = a;

//PROBLEM: Define a variable a with var and initialize it to a value of 9.
var a = 9;

//PROBLEM: Create two new string variables: myFirstName and myLastName and assign them the values of your first and last name, respectively.

/*var myName = "your name";

"your name" is called a string literal. A string literal, or string, is a series of zero or more characters enclosed in single or double quotes.*/

var myFirstName = "your name";

var myLastName = " your last name"

//PROBLEM: Initialize the three variables a, b, and c with 5, 10, and "I am a" respectively so that they will not be undefined.

/*When JavaScript variables are declared, they have an initial value of undefined. If you do a mathematical operation on an undefined variable your result will be NaN which means "Not a Number". If you concatenate a string with an undefined variable, you will get a string of undefined. */

// Only change code below this line
var a;
var b;
var c;

a = 5;
b = 10;
c = "I am a"
// Only change code above this line

a = a + 1;
b = b + 5;
c = c + " String!";

//In JavaScript all variables and function names are case sensitive. This means that capitalization matters.
/* Best Practice

Write variable names in JavaScript in camelCase. In camelCase, multi-word variable names have the first word in lowercase and the first letter of each subsequent word is capitalized. */

//PROBLEM: Modify the existing declarations and assignments so their names use camelCase.

// Variable declarations
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

// Variable assignments
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

//PROBLEM: Update the code from var  to let keyword
let catName = "Oliver";
let catSound = "Meow!";

/* PROBLEM: Change the code so that all variables are declared using let or const. Use let when you want the variable to change, and const when you want the variable to remain constant. Also, rename variables declared with const to conform to common practices. Do not change the strings assigned to the variables. */
const FCC = "freeCodeCamp"; // Change this line
let fact = "is cool!"; // Change this line
fact = "is awesome!";
console.log(FCC, fact); // Change this line

//Change the 0 so that sum will equal 20.

const sum = 10 + 10;

//Change the 0 so the difference is 12.
const difference = 45 - 33;

//Change the 0 so that product will equal 80.
const product = 8 * 10;

//Change the 0 so that the quotient is equal to 2.
const quotient = 66 / 33;

//Change the code to use the ++ operator on myVar.
let myVar = 87;

// Only change code below this line
myVar = myVar++ + 1;

//Change the code to use the -- operator on myVar.
//let myVar = 11;

// Only change code below this line
myVar = myVar-- - 1;

//Create a variable myDecimal and give it a decimal value with a fractional part (e.g. 5.7).
const ourDecimal = 5.7;

// Only change code below this line
const myDecimal = 8.3;

//Change the 0.0 so that product will equal 5.0
// const product = 2.0 * 2.5;

//Change the 0.0 so that quotient will equal to 2.2.
// const quotient = 4.4 / 2.0; // Change this line

//Convert the assignments for a, b, and c to use the += operator.
let a = 3;
let b = 17;
let c = 12;

// Only change code below this line
a += 12;
b += 9;
c += 7;

//Convert the assignments for a, b, and c to use the -= operator.
let a = 11;
let b = 9;
let c = 3;

// Only change code below this line
a -= 6;
b -= 15;
c -= 1;

//Convert the assignments for a, b, and c to use the *= operator.
let a = 5;
let b = 12;
let c = 4.6;

// Only change code below this line
a *= 5;
b *= 3 ;
c *= 10;

//Convert the assignments for a, b, and c to use the /= operator.
let a = 48;
let b = 108;
let c = 33;

// Only change code below this line
a /= 12;
b /= 4;
c /= 11;

//Use backslashes to assign a string to the myStr variable so that if you were to print it to the console, you would see:

const myStr = "I am a \"double quoted\" string inside \"double quotes\"."; // Change this line

/*Change the provided string to a string with single quotes at the beginning and end and no escape characters.

Right now, the <a> tag in the string uses double quotes everywhere. You will need to change the outer quotes to single quotes so you can remove the escape characters. */

// const myStr = '<a href="http://www.example.com" target="_blank">Link</a>';

/*Assign the following three lines of text into the single variable myStr using escape sequences.

FirstLine
    \SecondLine
ThirdLine
You will need to use escape sequences to insert special characters correctly. You will also need to follow the spacing as it looks above, with no spaces between escape sequences or words.

Note: The indentation for SecondLine is achieved with the tab escape character, not spaces.

 */
//const myStr = "FirstLine\n\t\\SecondLine\nThirdLine"; // Change this line

//Build myStr from the strings This is the start. and This is the end. using the + operator. Be sure to include a space between the two strings.

//const myStr = "This is the start. " + "This is the end."; // Change this line

/*Build myStr over several lines by concatenating these two strings: This is the first sentence. and This is the second sentence. using the += operator. Use the += operator similar to how it is shown in the example and be sure to include a space between the two strings. Start by assigning the first string to myStr, then add on the second string. */

//let myStr;
myStr = "This is the first sentence. ";
myStr += "This is the second sentence.";

//Set myName to a string equal to your name and build myStr with myName between the strings My name is  and  and I am well!

// Only change code below this line
const myName = "Zuri";
//const myStr = "My name is" + myName + "and I am well";

//Set someAdjective to a string of at least 3 characters and append it to myStr using the += operator.
// Change code below this line
const someAdjective = "fun";
//let myStr = "Learning to code is ";
myStr += someAdjective ;

//Use the .length property to set lastNameLength to the number of characters in lastName.

// Setup
let lastNameLength = 0;
const lastName = "Lovelace";

// Only change code below this line
lastNameLength = lastName.length;

console.log(lastName.length);

//Use bracket notation to find the first character in the lastName variable and assign it to firstLetterOfLastName.
// Setup
let firstLetterOfLastName = "";
//const lastName = "Lovelace";

// Only change code below this line
firstLetterOfLastName = lastName[0]; // Change this line

//Correct the assignment to myStr so it contains the string value of Hello World using the approach shown in the example above.

// Setup
//let myStr = "Jello World";

// Only change code below this line
myStr = "Hello World"; // Change this line
// Only change code above this line

//Let's try to set thirdLetterOfLastName to equal the third letter of the lastName variable using bracket notation.
// Setup
//const lastName = "Lovelace";

// Only change code below this line
const thirdLetterOfLastName = lastName[2]; // Change this line

//PRB: Use bracket notation to find the last character in the lastName variable.
// Setup
//const lastName = "Lovelace";

// Only change code below this line
const lastLetterOfLastName = lastName[lastName.length - 1]; // Change this line

//Use bracket notation to find the second-to-last character in the lastName string.
// Setup
//const lastName = "Lovelace";

// Only change code below this line
const secondToLastLetterOfLastName = lastName[lastName.length - 2]; // Change this line

/*In this challenge, we provide you with a noun, a verb, an adjective and an adverb. You need to form a complete sentence using words of your choice, along with the words we provide.

You will need to use the string concatenation operator + to build a new string, using the provided variables: myNoun, myAdjective, myVerb, and myAdverb. You will then assign the formed string to the wordBlanks variable. You should not change the words assigned to the variables.

You will also need to account for spaces in your string, so that the final sentence has spaces between all the words. The result should be a complete sentence. */

const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

// Only change code below this line
const wordBlanks = "It was raining when a " + myAdjective +" "+ myNoun +" "+ myVerb + " " + myAdverb + " in front of a bike"; // Change this line
// Only change code above this line 

//Modify the new array myArray so that it contains both a string and a number (in that order)
// Only change code below this line
//const myArray = ["There", 3, "peanut butter", "sandwitches" ];

//Create a nested array called myArray.
// Only change code below this line
//const myArray = [[23, "bulls"], [2, "cows"], [5, "chikens"]];

//Create a variable called myData and set it to equal the first value of myArray using bracket notation.
const myArray = [50, 60, 70];
const myData = myArray[0];
