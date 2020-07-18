// GAME OF WAR

class Card {
    constructor(value, suit, rank) {
        this.value = value;
        this.suit = suit;
        this.rank = rank;
    }
}

class Deck {
    constructor() {
        this.deck = [];
        this.reset();
        this.shuffle();
    }

    reset() {
        this.deck = [];

        const suits = ['Spades', 'Hearts', 'Diamonds', 'Clubs'];
        const ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
        const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'];

        for (let suit in suits) {
            for (let value in values) {
                this.deck.push(new Card (values[value], suits[suit], ranks[value]));
            }
        }
    }

    shuffle() {
        const deck = this.deck;
        let dl = deck.length; 
        let i;

        while (dl) {
            i = Math.floor(Math.random() * dl--);

            [deck[dl], deck[i]] = [deck[i], deck[dl]];
        }
    //   return this.deck;
    }

    deal() {
        return this.deck.pop();
    }

}    

let player1Hand = [];
let player2Hand = [];


const deck1 = new Deck();
deck1.reset();
deck1.shuffle();

// for (let i = 0; i < 26; i++) {
//         player1Hand.push(deck1.deal());
//         player2Hand.push(deck1.deal());
// }



function playGame(deck) {

    for (let i = 0; i < 26; i++) {
        player1Hand.push(deck.deal());
        player2Hand.push(deck.deal());
    }

    let player1Score = 0;
    let player2Score = 0;


    for (i = 0; i < 26; i++) {
        console.log(`Round ${i + 1}:

    Player 1 Score: ${player1Score}
    Player 2 Score: ${player2Score}

    Player 1: ${player1Hand[i].value} of ${player1Hand[i].suit}
            vs.
    Player 2: ${player2Hand[i].value} of ${player2Hand[i].suit}`);
        
        if (player1Hand[i].rank > player2Hand[i].rank) {
            document.getElementById("p1hand").innerHTML = `${player1Hand[i].value} of ${player1Hand[i].suit}`;
            console.log("Player 1 Wins!");
            player1Score += 1;
            document.getElementById("p1score").innerHTML = `Score: ${player1Score}`;
            console.log(`Player 1 New Score: ${player1Score}`)
        } else if (player2Hand[i].rank > player1Hand[i].rank) {
            document.getElementById("p2hand").innerHTML = `${player2Hand[i].value} of ${player2Hand[i].suit}`;
            console.log("Player 2 Wins!");
            player2Score += 1;
            document.getElementById("p2score").innerHTML = `Score: ${player2Score}`;
            console.log(`Player 2 New Score: ${player2Score}`)
        } else {
            document.getElementById("tie").innerHTML = "It's a tie!";
            console.log("It's a Tie!");
        }
    }
    console.log(`Final Score:

    Player 1: ${player1Score}
    Player 2: ${player2Score}
    
    GAME OVER`)
}

document.getElementById("startButton").addEventListener("click", () => {
    document.getElementById("welcome").style = "display: none;";
    document.getElementById("game").style = "display: block";
});



//playGame(deck1);

const deck2 = new Deck();
deck2.reset();
deck2.shuffle();

playGame(deck2);

