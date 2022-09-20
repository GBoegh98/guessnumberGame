const guessButton = document.querySelector("button.check");
const guessInputBox = document.querySelector("input.guess");
const message = document.querySelector(".message")
const hiddenNumber = document.querySelector(".number")
const againButton = document.querySelector("button.again")


// Helper functions

const nextNumber = (n) => Math.ceil(Math.random() * n);

againButton.addEventListener("click", () => {
    numberToGuess = nextNumber(4)
    hiddenNumber.innerText = "?"
    message.innerText = "Here we go again!!!"
    guessInputBox.value = ""

})

const evaluateGuess = () => {
    switch(true){

        case guessInputBox.value > numberToGuess:
             message.innerHTML = "Your guess is too high!!"
              break;
        case guessInputBox.value < numberToGuess:
            message.innerHTML = "Your number is too low"
              break;
        default:

            message.innerHTML = "You hit the number! :^) "
            hiddenNumber.innerHTML = numberToGuess
            

    }
}


// Declare variables

let numberToGuess = nextNumber(4);

// Define events

guessButton.addEventListener("click", evaluateGuess)
