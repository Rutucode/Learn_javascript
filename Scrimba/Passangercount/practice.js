let lap1 = 34
let lap2 = 33
let lap3 = 36

// Create a function that logs out the sum of all the lap times
// function lapTime(){
//   let  laps = lap1 + lap2 + lap3;
//     console.log(laps)
// }

// lapTime()

function lapTime(){
    console.log(lap1 + lap2 + lap3);
    //method 2
    //    let totalTime = lap1 + lap2 + lap3
   // console.log(totalTime)
}
lapTime()
//---------------------------------------------------------------------------------------
//Sol 1
let lapsCompleted = 0

// Create a function that increments the lapsCompleted variable with one
// Run it three times
function laps(){
  lapsCompleted  = lapsCompleted + 1;
    
}
laps()
laps()
laps()


console.log(lapsCompleted)
//_________________________________________________________________
//Sol 2
//let lapsCompleted = 0

// Create a function that increments the lapsCompleted variable with one
// Run it three times
function increment(){
 lapsCompleted = lapsCompleted + 1;
 // no need for this console.log(lapsCompleted)  
}

increment()
increment()
increment()

console.log(lapsCompleted)
//New ---------------------------------------------------------------------------------------
//String e.g, use single quotes or double quotes
//let message = "You have three new notifications"
//_____________
let username = "per"

// Create a variable, message, that stores the string: "You have tree new notifications"

let message = "You have tree new notifications"

console.log(message + ", " + username)

console.log(message + ", " + username + "!")
//--------------------------------------------------------------
// Create a variable, messageToUser, that contains the message we have logged
let messageToUser = (message +", " + username + "!")

console.log(messageToUser)
//New ---------------------------------------------------------------------------------------
// Create two variables, name and greeting. The name variable should store your name,
// and the greeting should store e.g. "Hi, my name is "

// Create a third variable, myGreeting, that contatenates the two strings
// Log myGreeting to the console

// Create two variables, name and greeting. The name variable should store your name,
// and the greeting should store e.g. "Hi, my name is "

// Create a third variable, myGreeting, that contatenates the two strings
// Log myGreeting to the console

let name = "Jyoti"
let greetings = "Hi my name is "
let myGreetings = (greetings + name)

console.log(myGreetings)

//New ---------------------------------------------------------------------------------------
let number = 42
let greeting = "Hi, my name is "
let myGreeting = greeting + name
// console.log(myGreeting)

let points = 4
let bonusPoints = "10"

let totalPoints = 4 + "10"

console.log(totalPoints)
//Answer is 410 as number ten os considerd string not a number
// string always wins when its string and number
console.log(4 + 5) // Ans 9
console.log("2" + "4")// Ans "24"
console.log("5" + 1) //Ans "51"
console.log(100 + "100")// Ans "100100" - string

//New ---------------------------------------------------------------------------------------
// Grab the welcome-el paragraph and store it in a variable called welcomeEl

// Create two variables (name & greeting) that contains your name
// and the greeting we want to render on the page

// Render the welcome message using welcomeEl.innerText

//let name = "jyoti";
//let greeting = "Welcome back";
let welcomeEl =  document.getElementById("welcome-el")

function header(){
   let greet =  greeting + " " + name ;
    welcomeEl.innerText = greet
  
    
}
header()
console.log(welcomeEl.innerText)
// Add an emoji to the end! 👋
// WRITE YOUR CODE BELOW HERE
// HINT: count = count + 1

welcomeEl.innerText = welcomeEl.innerText + "👋"
welcomeEl.innerText += "👋" //Other way of writing


//_________Sol 2__________
// Grab the welcome-el paragraph and store it in a variable called welcomeEl
/*
let welcomeEl = document.getElementById("welcome-el")

let name = "Per Harald Borgen"
let greeting = "Welcome back "
welcomeEl.innerText = greeting + " " + name
*/
//New ---------------------------------------------------------------------------------------
// Create two variables, firstName and lastName

// Concatenate the two variables into a third variable called fullName

// Log fullName to the console

let firstName = "Rutuja ";
let lastName = "Pawar";
let fullName = firstName + lastName;
console.log(fullName)

//New ---------------------------------------------------------------------------------------
//let name = "Linda"
//let greeting = "Hi there"

// Create a function that logs out "Hi there, Linda!" when called
function welcome(){
   let message = greeting + ", " + name + "!";
    console.log(message)
}
welcome()
//_________Sol2_____
function greetLinda() {
  console.log(greeting + ", " + name + "!")
}

greetLinda()
//New ---------------------------------------------------------------------------------------
let myPoints = 3

// Create two functions, add3Points() and remove1Point(), and have them
// add/remove points to/from the myPoints variable
function add3Points(){
    myPoints += 3;
    
}
add3Points()
add3Points()
add3Points()
function remove1Point(){
    myPoints -= 1;
}
remove1Point()
remove1Point()

// Call the functions to that the line below logs out 10
console.log(myPoints)
//New ---------------------------------------------------------------------------------------
// Try to predict what each of the lines will log out
console.log("2" + 2) // "22"
console.log(11 + 7) // 18
console.log(6 + "5") // "65"
console.log("My points: " + 5 + 9) // "My Points: 59 "
console.log(2 + 2) // 4
console.log("11" + "14") // "1144"
