const AMOUNT_OF_GAME_PLAYED = 100;

//decide how many games
let gameSets = AMOUNT_OF_GAME_PLAYED

//instantiate global score
let overallScorePlayer1 = 0
let overallScorePlayer2 = 0

for (let i = 0; i < gameSets; i++) {
    console.log("GAME " + (i+1))
    // Instantiate Card
    let card = [...Array(53).keys()].slice(1)

    // set score in the game
    let score = [0,0];

    // players start with empty hand
    let cardForPlayer1 = []
    let cardForPlayer2 = []

    //take one random card from deck and hand it to players
    while (card.length) {
        cardForPlayer1.push(card.splice(card.length * Math.random() | 0, 1)[0]);
        cardForPlayer2.push(card.splice(card.length * Math.random() | 0, 1)[0]);
    }

    console.log("cardForPlayer1 " + cardForPlayer1)
    console.log("cardForPlayer2 " + cardForPlayer2)

    while (cardForPlayer1.length) {
        let cardPlayer1 = cardForPlayer1.splice(card.length * Math.random() | 0, 1)[0];
        let cardPlayer2 = cardForPlayer2.splice(card.length * Math.random() | 0, 1)[0];

        console.log("comparing cards :"+ cardPlayer1 + " and " + cardPlayer2)
        if (cardPlayer1 > cardPlayer2) {
            score[0]++
            console.log(" player 1 wins")
        } else {
            console.log(" player 2 wins")
            score[1]++
        }
    }

    if (score[0]>score[1]) {
        overallScorePlayer1++
        console.log(" player 1 win the game: " + (i+1))
    } else {
        overallScorePlayer2++
        console.log(" player 2 win the game: " + (i+1))
    }
}

console.log("overallScorePlayer1 "+ overallScorePlayer1)
console.log("overallScorePlayer2 "+ overallScorePlayer2)