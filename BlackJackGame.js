cards = [] //ordered list of items
sum = 0
hasBlackJack = false
isAlive = false
message = ""

messageEl = document.getElementById("message-el")
sumEl = document.getElementById("sum-el")
cardsEl = document.getElementById("cards-el")
playerEl = document.getElementById("player-el")

player = {

    name: "Adhurim",
    money: 145

}

playerEl.textContent = player.name +": $" + player.money

function getRandomCard(){
   randomNumber = (Math.floor(Math.random() * 13 + 1)) //math.random - 0 - 0.999
    if(randomNumber > 10){
        return 10
    }else if (randomNumber === 1){
        return 11
    }else{
        return randomNumber
    }

}

function startGame(){
    renderGame()
    isAlive = true
    firstCard = getRandomCard()
    secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard 
}

function renderGame(){

    sumEl.textContent = "Sum: " + sum
    
    cardsEl.textContent = "Cards: "
    
    for(i = 0; i<cards.length; i++){
        cardsEl.textContent += cards[i] + ","
    }
    
    if(sum < 21) {
    message = "Do you want to draw a new card?"

    } else if(sum === 21) {
    message = "Wohoo! You have BlackJet!"
    hasBlackJack = true
    
    } else {
    message = "You are out of the game!"
    isAlive = false
    }

    messageEl.textContent = message

}
function newCard(){
    if(isAlive === true && hasBlackJack === false){
    card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
    }
}

