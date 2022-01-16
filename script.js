let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false

let sumTotal = document.getElementById('sumTotal');
let message = ""

let newCardBtn = document.getElementById('drawCard')

const memoOne = document.getElementById("memo")
const startBtn = document.getElementById("startGame")
const cardsEl = document.getElementById('cards')
const memo2 = document.getElementById('memo2')

let player = {
        name: "Per",
        chips: 100
}

let playerEl = document.getElementById('player-el')
playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    let cardNum = Math.floor(Math.random() * 13) +1
    if (cardNum == 1) {
        return 11
    } else if (cardNum > 10) {
        return 10
    } else {
        return cardNum
    }
}

function startGame() {
    isAlive = true;
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}


function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    sumTotal.textContent = "Sum: " + sum
    if (sum < 21) {
        message = "Do you want another card?"
    } else if (sum === 21) {
        message = "You got Blackjack"
        hasBlackJack = true
    } else {
        message = "Too many.  Game Over."
        isAlive = false
        newCardBtn.disabled = true
    }
    memoOne.textContent = message
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
    memo2.textContent = "Draw a new card from the deck"
    let card = getRandomCard();
    sum+= card
    cards.push(card)
    renderGame()
    }
}

