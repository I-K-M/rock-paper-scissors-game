const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
const userImage = document.getElementById('user-image');
const computerImage = document.getElementById('computer-image');
const resultContainer = document.getElementById('result');
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  userChoice = e.target.className
  userChoiceDisplay.innerHTML = userChoice
  generateComputerChoice()
  getResult()
  getUserImage()
  changeColorResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1
    
    if (randomNumber === 1) {
        computerChoice = 'pierre'
        computerImage.innerHTML = `<img src="pierre_pc.png">`
    }

    if (randomNumber === 2) {
        computerChoice = 'feuille'
        computerImage.innerHTML = `<img src="feuille-pc.png">`
    }

    if (randomNumber === 3) {
        computerChoice = 'ciseaux'
        computerImage.innerHTML = `<img src="ciseaux-pc.png">`
    }

    computerChoiceDisplay.innerHTML = computerChoice

}

function getResult() {
    if (computerChoice === userChoice) {
        result = "égalité :|" 
    }

     if (computerChoice === 'pierre' && userChoice === 'ciseaux') {
        result = "perdu :(" 
    }

    if (computerChoice === 'ciseaux' && userChoice === 'feuille') {
        result = "perdu :(" 
    }

     if (computerChoice === 'feuille' && userChoice === 'pierre') {
        result = "perdu :(" 
       
    }

     if (computerChoice === 'ciseaux' && userChoice === 'pierre') {
        result = "gagné :)" 
    }

     if (computerChoice === 'feuille' && userChoice === 'ciseaux') {
        result = "gagné :)" 
    }

     if (computerChoice === 'pierre' && userChoice === 'feuille') {
        result = "gagné :)" 
    }

     resultDisplay.innerHTML = result
}

function getUserImage() {
    if(userChoice === 'ciseaux') {
        userImage.innerHTML = `<img src="ciseaux.png">`
    }

    if(userChoice === 'pierre') {
        userImage.innerHTML = `<img src="pierre.png">`
    }

    if(userChoice === 'feuille') {
        userImage.innerHTML = `<img src="feuille.png">`
    }
}

function changeColorResult() {
    if (result === 'gagné :)') {
        resultContainer.style.backgroundColor = '#81d76d'
    }

    if (result === 'perdu :(') {
        resultContainer.style.backgroundColor = '#ff7e74'
    }

    if (result === 'égalité :|') {
        resultContainer.style.backgroundColor = '#383e65'
    }
}
