// 1. Create two variables, firstCard and secondCard. 
// Set their values to a random number between 2-11

// 2. Create a variable, sum, and set it to the sum of the two cards
// let firstCard = 2;
// let secondCard = 9;

// let sum = firstCard + secondCard;
// console.log(sum)
//PRCTICE CODE--------------------------------------------------------------------
/*
// Check if the person is old enough to enter the nightclub (21)
// Log a suitable message to the console in both cases

let age = 19

// if less than 21 -> "You can not enter the club!"
// else            -> "Welcome!"

if (age < 21){
   console.log("You can not enter the club!") 
}

else if (age > 21) {
  console.log("Welcome!")
}
*/
//PRCTICE CODE--------------------------------------------------------------------
/*

// Check if the person is elegible for a birthday card from the King! (100)

let age = 100

// if less than 100    -> "Not elegible"
// else if exactly 100 -> "Here is your birthday card from the King!"
// else                -> "Not elegible, you have already gotten one"
if (age < 100){
    console.log("Not elegible")
} else if (age === 100){
    console.log("Here is your birthday card from the King!")
}
else{
    console.log("Not elegible, you have already gotten one")
} */
//--------------------------------------------------------------------

let firstCard = 10
let secondCard = 4
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""

// 1. Store the message-el paragraph in a variable called messageEl
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

//let sumEl = document.querySelector("#sum-el")
function startGame() {
    cardsEl.textContent = ("Cards:" + firstCard + " " + secondCard);
    sumEl.textContent =  ("Sum:" + sum);
    if (sum <= 20) {
        message = "Do you want to draw a new card? 🙂"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! 🥳"
        hasBlackJack = true
    } else {
        message = "You're out of the game! 😭"
        isAlive = false
    }
    // 2. Display the message in the messageEl using messageEl.textContent
   
    messageEl.textContent  = (message)
}

function newCard(){
    console.log("Drawing a new card from the deck!")

    let card = 7;
    sum += card;

    startGame()
}
