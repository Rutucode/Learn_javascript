//Create a function timesFive that accepts one argument, multiplies it by 5, and returns the new value.
/*We can pass values into a function with arguments. You can use a return statement to send a value back out of a function.

Example

function plusThree(num) {
  return num + 3;
}

const answer = plusThree(5);
answer has the value 8.

plusThree takes an argument for num and returns a value equal to num + 3. */

function timesFive(num){
    return num * 5;
  }
  
  const anawer = timesFive(5)
//-------------------------------------------------------------------------------------
/*Using let or const, declare a global variable named myGlobal outside of any function. Initialize it with a value of 10.

Inside function fun1, assign 5 to oopsGlobal without using the var, let or const keywords.*/
// Declare the myGlobal variable below this line
let myGlobal = 10;

function fun1() {
  // Assign 5 to oopsGlobal here
oopsGlobal = 5;
}
// Only change code above this line

function fun2() {
  let output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}
//-------------------------------------------------------------------------------------
//The editor has two console.logs to help you see what is happening. Check the console as you code to see how it changes. Declare a local variable myVar inside myLocalScope and run the tests.
function myLocalScope() {
    // Only change code below this line
  const myVar = 3;
    console.log('inside myLocalScope', myVar);
  }
  myLocalScope();
  
  // Run and check the console
  // myVar is not defined outside of myLocalScope
  console.log('outside myLocalScope', myVar);

//-------------------------------------------------------------------------------------
  //Add a local variable to myOutfit function to override the value of outerWear with the string sweater.

// Setup
const outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
const outerWear = "sweater"
  // Only change code above this line
  return outerWear;
}

myOutfit();
//-------------------------------------------------------------------------------------
    //Create a function addFive without any arguments. This function adds 5 to the sum variable, but its returned value is undefined.
    // Setup
let sum = 0;

function addThree() {
  sum = sum + 3;
}

// Only change code below this line
function addFive(){
  sum = sum + 5;
}

// Only change code above this line

addThree();
addFive();
//-------------------------------------------------------------------------------------
    //Call the processArg function with an argument of 7 and assign its return value to the variable processed.
    // Setup
let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line
processed = processArg(7);
//-------------------------------------------------------------------------------------
/*Write a function nextInLine which takes an array (arr) and a number (item) as arguments.

Add the number to the end of the array, then remove the first element of the array.

The nextInLine function should then return the element that was removed. */

function nextInLine(arr, item) {
  // Only change code below this line
arr.push(item);
var removedItem = arr.shift();

  return removedItem;
  // Only change code above this line
}

// Setup
let testArr = [1, 2, 3, 4, 5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));
 
 
//-------------------------------------------------------------------------------------
// PB: Modify the welcomeToBooleans function so that it returns true instead of false.
function welcomeToBooleans() {
  // Only change code below this line

  return true; // Change this line

  // Only change code above this line
}
//-------------------------------------------------------------------------------------

// PB: Create an if statement inside the function to return Yes, that was true if the parameter wasThatTrue is true and return No, that was false otherwise.
function trueOrFalse(wasThatTrue) {
  // Only change code below this line
if (wasThatTrue) {
  return "Yes, that was true";
}
return "No, that was false";
}


  // Only change code above this line

//-------------------------------------------------------------------------------------

//PB:  Add the equality operator to the indicated line so that the function will return the string Equal when val is equivalent to 12.
// Setup
function testEqual(val) {
  if (val == 12) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testEqual(10);

//-------------------------------------------------------------------------------------
//PB: Use the strict equality operator in the if statement so the function will return the string Equal when val is strictly equal to 7.
// Setup
function testStrict(val) {
  if (val === 7) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testStrict(10);
//-------------------------------------------------------------------------------------
//The compareEquality function in the editor compares two values using the equality operator. Modify the function so that it returns the string Equal only when the values are strictly equal.
// Setup
function compareEquality(a, b) {
  if (a === b) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

compareEquality(10, "10");
//-------------------------------------------------------------------------------------
//Add the inequality operator != in the if statement so that the function will return the string Not Equal when val is not equivalent to 99.
// Setup
function testNotEqual(val) {
  if (val != 99) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testNotEqual(10);
//-------------------------------------------------------------------------------------
//Add the strict inequality operator to the if statement so the function will return the string Not Equal when val is not strictly equal to 17
// Setup
function testStrictNotEqual(val) {
  if (val !== 17) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testStrictNotEqual(10);
//-------------------------------------------------------------------------------------
//Add the greater than operator to the indicated lines so that the return statements make sense.
function testGreaterThan(val) {
  if (val > 100 ) {  // Change this line
    return "Over 100";
  }

  if (val > 10 ) {  // Change this line
    return "Over 10";
  }

  return "10 or Under";
}

testGreaterThan(10);
//-------------------------------------------------------------------------------------
//Add the greater than or equal to operator to the indicated lines so that the return statements make sense.
function testGreaterOrEqual(val) {
  if (val >= 20) {  // Change this line
    return "20 or Over";
  }

  if (val >= 10) {  // Change this line
    return "10 or Over";
  }

  return "Less than 10";
}

testGreaterOrEqual(10);

//-------------------------------------------------------------------------------------
//Add the less than operator to the indicated lines so that the return statements make sense.
function testLessThan(val) {
  if (val < 25) {  // Change this line
    return "Under 25";
  }

  if (val < 55) {  // Change this line
    return "Under 55";
  }

  return "55 or Over";
}

testLessThan(10);
//-------------------------------------------------------------------------------------
//Add the less than or equal to operator to the indicated lines so that the return statements make sense.
function testLessOrEqual(val) {
  if (val <= 12) {  // Change this line
    return "Smaller Than or Equal to 12";
  }

  if (val <= 24) {  // Change this line
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}

testLessOrEqual(10);

//-------------------------------------------------------------------------------------
// Replace the two if statements with one statement, using the && operator, which will return the string Yes if val is less than or equal to 50 and greater than or equal to 25. Otherwise, will return the string No.
function testLogicalAnd(val) {
  // Only change code below this line

  if (val <= 50 && val >= 25) {
    
      return "Yes";
    
  }

  // Only change code above this line
  return "No";
}

testLogicalAnd(10);
//-------------------------------------------------------------------------------------
//Combine the two if statements into one statement which returns the string Outside if val is not between 10 and 20, inclusive. Otherwise, return the string Inside.
function testLogicalOr(val) {
  // Only change code below this line

  if (val < 10 || val > 20) {
    return "Outside";
  }


  // Only change code above this line
  return "Inside";
}

testLogicalOr(15);
//-------------------------------------------------------------------------------------
//Combine the if statements into a single if/else statement.
/*function testElse(val) {
  let result = "";
  // Only change code below this line

  if (val > 5) {
    result = "Bigger than 5";
  }

  if (val <= 5) {
    result = "5 or Smaller";
  }

  // Only change code above this line
  return result;
}

testElse(4); */
function testElse(val) {
  let result = "";
  // Only change code below this line

  if (val > 5) {
    result = "Bigger than 5";
  }

  else {
    result = "5 or Smaller";
  }

  // Only change code above this line
  return result;
}

testElse(4);
//-------------------------------------------------------------------------------------
//Convert the logic to use else if statements.
/*function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  }

  if (val < 5) {
    return "Smaller than 5";
  }

  return "Between 5 and 10";
}

testElseIf(7); */
function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  }

  else if (val < 5) {
    return "Smaller than 5";
  } else {

  return "Between 5 and 10";
 }
}

testElseIf(7);
//-------------------------------------------------------------------------------------
//Change the order of logic in the function so that it will return the correct statements in all cases.
/*function orderMyLogic(val) {
  if (val < 10) {
    return "Less than 10";
  } else if (val < 5) {
    return "Less than 5";
  } else {
    return "Greater than or equal to 10";
  }
}

orderMyLogic(7); */
function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}

orderMyLogic(7);
//-------------------------------------------------------------------------------------
/*Write chained if/else if statements to fulfill the following conditions:

num < 5 - return Tiny
num < 10 - return Small
num < 15 - return Medium
num < 20 - return Large
num >= 20 - return Huge

 */
function testSize(num) {
  // Only change code below this line
if (num < 5) {
return "Tiny";
}
else if (num < 10) {
return "Small";
}
else if (num < 15) {
return "Medium";
}
 else if (num < 20) {
return "Large";
}
else if (num >= 20) {
return "Huge";
}
  return "Change Me";
  // Only change code above this line
}

testSize(7);
//-------------------------------------------------------------------------------------
/*In the game of Golf, each hole has a par, meaning, the average number of strokes a golfer is expected to make in order to sink the ball in the hole to complete the play. Depending on how far above or below par your strokes are, there is a different nickname.

Your function will be passed par and strokes arguments. Return the correct string according to this table which lists the strokes in order of priority; top (highest) to bottom (lowest):

Strokes	Return
1	"Hole-in-one!"
<= par - 2	"Eagle"
par - 1	"Birdie"
par	"Par"
par + 1	"Bogey"
par + 2	"Double Bogey"
>= par + 3	"Go Home!"
par and strokes will always be numeric and positive. We have added an array of all the names for your convenience.

 */
const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  // Only change code below this line
   if (strokes === 1){
  return "Hole-in-one!";
}
else if (strokes <= par-2){
  return "Eagle";
}
else if (strokes == par-1){
  return "Birdie";
}
else if (strokes === par){
  return "Par";
}
else if (strokes === par + 1){
  return "Bogey";
}
else if (strokes === par + 2){
  return "Double Bogey";
} 
  else {
  return "Go Home!";
}
  return "Change Me";
  // Only change code above this line
}

golfScore(5, 4);

/*----- sol 2 */
function golfScore(par, strokes) {
  // Only change code below this line

  if (strokes === 1) return "Hole-in-one!";

  else if ((strokes - par) <= -2) return 'Eagle';

  else if ((strokes - par) === -1) return 'Birdie';

  else if (strokes === par) return 'Par';

  else if ((strokes - par) === 1) return 'Bogey';

  else if ((strokes - par) === 2) return 'Double Bogey';

  else return 'Go Home!';
  // Only change code above this line
  //------ if we write else if   instead of else soln is accepeted
  /*
  else if (strokes >= par + 3) {
  return "Go Home!";
}*/
  /* EXPLAINATION
  In JavaScript, the else statement does not take a condition like else (strokes >= par + 3). It should be just else without any condition. The else statement is executed if none of the preceding if or else if conditions are true. */
}

// Change these values to test
golfScore(5, 1);
/*----- sol 3 */
//const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  // Only change code below this line
  if (strokes == 1) {
    return names[0];
  } else if (strokes <= par - 2) {
    return names[1];
  } else if (strokes === par - 1) {
    return names[2];
  } else if (strokes === par) {
    return names[3];
  } else if (strokes === par + 1) {
    return names[4];
  } else if (strokes === par + 2) {
    return names[5];
  } else {
    return names[6];
  }
  // Only change code above this line
}

// Change these values to test
golfScore(5, 4);
//-------------------------------------------------------------------------------------
/*Write a switch statement which tests val and sets answer for the following conditions:
1 - alpha
2 - beta
3 - gamma
4 - delta*/
function caseInSwitch(val) {
  let answer = "";
  // Only change code below this line
  switch(val){
case 1 :   
answer = "alpha";
break;

case 2 :   
answer = "beta";
break;
case 3 :   
answer = "gamma";
break;
case 4 :   
answer = "delta";
break;
}

  // Only change code above this line
  return answer;
}

caseInSwitch(1);
//-------------------------------------------------------------------------------------
/*Write a switch statement to set answer for the following conditions:
a - apple
b - bird
c - cat
default - stuff
*/
function switchOfStuff(val) {
  let answer = "";
  // Only change code below this line
switch (val){
  case "a":
  answer = "apple";
  break;
  case "b":
  answer = "bird";
  break;
  case "c": 
  answer = "cat";
  break;
  
  default: 
  answer = "stuff";
  break;
}


  // Only change code above this line
  return answer;
}

switchOfStuff(1);
//-------------------------------------------------------------------------------------
/*Write a switch statement to set answer for the following ranges:
1-3 - Low
4-6 - Mid
7-9 - High */
function sequentialSizes(val) {
  let answer = "";
  // Only change code below this line
switch(val){
  case 1 :
  case 2:
  case 3:
  answer = "Low";
  break;
  case 4:
  case 5:
  case 6:
  answer = "Mid";
  break;
  case 7:
  case 8:
  case 9:
  answer = "High"
}


  // Only change code above this line
  return answer;
}

sequentialSizes(1);
//-------------------------------------------------------------------------------------
function chainToSwitch(val) {
  var answer = "";
  // Only change code below this line

  if (val === "bob") {
    answer = "Marley";
  } else if (val === 42) {
    answer = "The Answer";
  } else if (val === 1) {
    answer = "There is no #1";
  } else if (val === 99) {
    answer = "Missed me by this much!";
  } else if (val === 7) {
    answer = "Ate Nine";
  }

  // Only change code above this line
  return answer;
}

// Change this value to test
chainToSwitch(7);

//Change the chained if/else if statements into a switch statement.
function chainToSwitch(val) {
  let answer = "";
  // Only change code below this line

switch (val) {
  case "bob":
  answer = "Marley";
  break;

   case 42: 
   answer = "The Answer";
   break;
   
   case 1: 
   answer = "There is no #1";
   break; 
   
   case 99: 
   answer = "Missed me by this much!";
   break;
   
   case 7: 
   answer = "Ate Nine";
}
  // Only change code above this line
  return answer;
}

chainToSwitch(7);
//-------------------------------------------------------------------------------------
//Fix the function isLess to remove the if/else statements.
function isLess(a, b) {
  // Only change code below this line
  if (a < b) {
    return true;
  } else {
    return false;
  }
  // Only change code above this line
}

isLess(10, 15);
/*Ans */
function isLess(a, b) {
  // Only change code below this line

    return a < b;
  // Only change code above this line
}

isLess(10, 15);
//-------------------------------------------------------------------------------------
/*Modify the function abTest so that if a or b are less tha n 0 the function will immediately exit with a value of undefined.

Hint
Remember that undefined is a keyword, not a string. */
// Setup
function abTest(a, b) {
  // Only change code below this line
if(a < 0 || b < 0)
return undefined;

  // Only change code above this line

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2,2);
//-------------------------------------------------------------------------------------
/*In the casino game Blackjack, a player can determine whether they have an advantage on the next hand over the house by keeping track of the relative number of high and low cards remaining in the deck. This is called Card Counting.

Having more high cards remaining in the deck favors the player. Each card is assigned a value according to the table below. When the count is positive, the player should bet high. When the count is zero or negative, the player should bet low.

Count Change	Cards
+1	2, 3, 4, 5, 6
0	7, 8, 9
-1	10, 'J', 'Q', 'K', 'A'
You will write a card counting function. It will receive a card parameter, which can be a number or a string, and increment or decrement the global count variable according to the card's value (see table). The function will then return a string with the current count and the string Bet if the count is positive, or Hold if the count is zero or negative. The current count and the player's decision (Bet or Hold) should be separated by a single space.

Example Outputs: -3 Hold or 5 Bet

Hint
Do NOT reset count to 0 when value is 7, 8, or 9.
Do NOT return an array.
Do NOT include quotes (single or double) in the output. */
var count = 0;

function cc(card) {
  // Only change code below this line

  var msg = '';

  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 7:
    case 8:
    case 9:
      count = count;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
  }

  if (count === 5) msg = "5 Bet";
  else if (count === 0) msg = "0 Hold";
  else if (count === -5) msg = "-5 Hold";
  else if (count === -1) msg = "-1 Hold";
  else if (count === 1) msg = "1 Bet";


  return msg;
  // Only change code above this line
}

// Add/remove calls to test your function.
// Note: Only the last will display
cc(2); cc(3); cc(7); cc('K'); cc('A');
/*sol 2------------------------------------ */
/*let count = 0;

function cc(card) {
  // Only change code below this line
switch (card){
  case 2 :
  case 3:
  case 4:
  case 5:
  case 6:
  count++;
  break;
  case 7:
  case 8:
  case 9:
  count = count;
  break;
  case 10:
  case "J":
  case "Q":
  case "K":
  case "A":
  count--;
  break;

  
}
if (count > 0){
  return count + " Bet";
}
else{
return count + " Hold";
} 
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A'); */
//-------------------------------------------------------------------------------------
/*Make an object that represents a dog called myDog which contains the properties name (a string), legs, tails and friends.

You can set these object properties to whatever values you want, as long as name is a string, legs and tails are numbers, and friends is an array. */
const myDog = {
  // Only change code below this line
"name" : "dog",
"legs": 4,
  "tails": 1,
  friends: ["pup", "maddy"]
  // Only change code above this line
};
//-------------------------------------------------------------------------------------
//Read in the property values of testObj using dot notation. Set the variable hatValue equal to the object's property hat and set the variable shirtValue equal to the object's property shirt.
// Setup
const testObj = {
  hat: "ballcap",
  shirt: "jersey",
  shoes: "cleats"
};

// Only change code below this line
const hatValue = testObj.hat;      // Change this line
const shirtValue = testObj.shirt;    // Change this line
//-------------------------------------------------------------------------------------
/*Read the values of the properties an entree and the drink of testObj using bracket notation and assign them to entreeValue and drinkValue respectively. */
// Setup
/* 
// Setup
const testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};

// Only change code below this line
const entreeValue = testObj["an entree"];   // Change this line
const drinkValue = testObj["the drink"];    // Change this line
*/
//-------------------------------------------------------------------------------------
//Set the playerNumber variable to 16. Then, use the variable to look up the player's name and assign it to player.
/*
// Setup
const testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

// Only change code below this line
const playerNumber = 16;  // Change this line
const player = testObj[playerNumber];   // Change this line
*/

//-------------------------------------------------------------------------------------
/*Update the myDog object's name property. Let's change her name from Coder to Happy Coder. You can use either dot or bracket notation.*/
/*
// Setup
const myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

// Only change code below this line
myDog["name"] = "Happy Coder";
*/
//-------------------------------------------------------------------------------------
//Add a bark property to myDog and set it to a dog sound, such as "woof". You may use either dot or bracket notation
/*const myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

myDog["bark"] = "woof"; */
//-------------------------------------------------------------------------------------
//Delete the tails property from myDog. You may use either dot or bracket notation.
/*// Setup
const myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
  "bark": "woof"
};

// Only change code below this line
delete myDog.tails */
//-------------------------------------------------------------------------------------
//Convert the switch statement into an object called lookup. Use it to look up val and assign the associated string to the result variable.
//-------------------------------------------------------------------------------------