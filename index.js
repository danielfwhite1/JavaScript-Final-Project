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
let roundIndex = 0;
let player1Score = 0;
let player2Score = 0;
let roundWinner = '';
let gameWinner = '';


const deck1 = new Deck();
deck1.reset();
deck1.shuffle();

for (let i = 0; i < 26; i++) {
    player1Hand.push(deck1.deal());
    player2Hand.push(deck1.deal());
}


function playGame() {

    console.log(`Round ${roundIndex + 1}:

    Player 1 Score: ${player1Score}
    Player 2 Score: ${player2Score}

    Player 1: ${player1Hand[roundIndex].value} of ${player1Hand[roundIndex].suit}
            vs.
    Player 2: ${player2Hand[roundIndex].value} of ${player2Hand[roundIndex].suit}`);
        
        if (player1Hand[roundIndex].rank > player2Hand[roundIndex].rank) {         
            console.log("Player 1 Wins!");
            player1Score += 1;       
            console.log(`Player 1 New Score: ${player1Score}`)
            roundWinner = 'Player 1';
        } else if (player2Hand[roundIndex].rank > player1Hand[roundIndex].rank) {     
            console.log("Player 2 Wins!");
            player2Score += 1;
            console.log(`Player 2 New Score: ${player2Score}`)
            roundWinner = 'Player 2';
        } else {
            console.log("It's a Tie!");
            roundWinner = "It's a tie";

        }

        if (roundIndex == 24) {

            document.getElementById("nextRoundButton").addEventListener("click", () => {
                
                document.getElementById("game").style = "display: none;";
                document.getElementById("finalRound").style = "display: block;";

                document.getElementById("lastRound").innerHTML = `Round ${roundIndex}`;
                document.getElementById("p1FinalScore").innerHTML = `Score: ${player1Score}`;
                document.getElementById("p2FinalScore").innerHTML = `Score: ${player2Score}`;
                document.getElementById("p1FinalHand").innerHTML = `${player1Hand[roundIndex - 1].value} of ${player1Hand[roundIndex - 1].suit}`;
                document.getElementById("p2FinalHand").innerHTML = `${player2Hand[roundIndex - 1].value} of ${player2Hand[roundIndex - 1].suit}`;
                document.getElementById("finalRoundWinner").innerHTML = `Round ${roundIndex} Winner: ${roundWinner}`;
     
            });
        }

        if (roundIndex == 25) {

            if (player1Score > player2Score) {
                gameWinner = 'Player 1';
            } else if (player2Score > player1Score) {
                gameWinner = 'Player 2';
            } else {
                gameWinner = 'No one';
            }

            document.getElementById("finalButton").addEventListener("click", () => {
                
                document.getElementById("game").style = "display: none;";
                document.getElementById("finalRound").style = "display: none;";
                document.getElementById("final").style = "display: block;";
                document.getElementById("p1TotalScore").innerHTML = `Player 1 Score: ${player1Score}`;
                document.getElementById("p2TotalScore").innerHTML = `Player 2 Score: ${player2Score}`;
                document.getElementById("gameWinner").innerHTML = `${gameWinner} Wins!`;
     
            });

            console.log(`Final Score:

            Player 1: ${player1Score}
            Player 2: ${player2Score}

            ${gameWinner} Wins!
        
            GAME OVER`);
        }

    roundIndex++;
}

document.getElementById("nextRoundButton").addEventListener("click", () => {

    document.getElementById("round").innerHTML = `Round ${roundIndex + 1}`;
    document.getElementById("p1Score").innerHTML = `Score: ${player1Score}`;
    document.getElementById("p2Score").innerHTML = `Score: ${player2Score}`;
    document.getElementById("p1Hand").innerHTML = `${player1Hand[roundIndex].value} of ${player1Hand[roundIndex].suit}`;
    document.getElementById("p2Hand").innerHTML = `${player2Hand[roundIndex].value} of ${player2Hand[roundIndex].suit}`;
    playGame(deck1);
    document.getElementById("roundWinner").innerHTML = `Round ${roundIndex} Winner: ${roundWinner}`
    
})



document.getElementById("startButton").addEventListener("click", () => {
    document.getElementById("welcome").style = "display: none;";
    document.getElementById("game").style = "display: block";
    document.getElementById("round").innerHTML = `Round ${roundIndex + 1}`;
    document.getElementById("p1Score").innerHTML = `Score: ${player1Score}`;
    document.getElementById("p2Score").innerHTML = `Score: ${player2Score}`;
    document.getElementById("p1Hand").innerHTML = `${player1Hand[roundIndex].value} of ${player1Hand[roundIndex].suit}`;
    document.getElementById("p2Hand").innerHTML = `${player2Hand[roundIndex].value} of ${player2Hand[roundIndex].suit}`;
    playGame(deck1);
    document.getElementById("roundWinner").innerHTML = `Round ${roundIndex} Winner: ${roundWinner}`;
});
