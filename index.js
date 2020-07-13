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
        this.card = [];
        this.reset();
        this.shuffle();
    }

    reset() {
        this.deck = [];

        const suits = ['Spades', 'Hearts', 'Diamonds', 'Clubs'];
        const ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
        const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
        let m = 0;
        this.card = new Array (ranks.length * suits.length);

        for (let suit in suits) {
            for (let value in values) {
                this.deck.push(`${values[value]} of ${suits[suit]}: Rank ${ranks[value]} `);
                this.card[m] = new Card (values[value], suits[suit], ranks[value]);
             //   this.deck.push(this.card[m]);
                m++;
            }
        }
    }

    shuffle() {
        const deck = this.card;
        // const deck = this.deck;
        let dl = deck.length; 
        let i;

        while (dl) {
            i = Math.floor(Math.random() * dl--);

            [deck[dl], deck[i]] = [deck[i], deck[dl]];
        }
        return this.deck;
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

// console.log(deck1.deck[0]);
// console.log(deck1.card);
// console.log(deck1.card[0].rank);
// console.log(deck1.deal());
// console.log(deck1.deck);

function dealHands(deck) {
    for (let i = 0; i < 26; i++) {
        player1Hand += deck.deal() + '\n';
        player2Hand += deck.deal() + '\n';
    }
}

dealHands(deck1);

console.log(deck1)

// console.log(player1Hand);
// console.log(player1Hand[0]);

// console.log("Player 1 Hand:\n" + player1Hand);
// console.log("Player 2 Hand:\n" + player2Hand);

function playGame(deck) {
    let player1Score = 0;
    let player2Score = 0;
    for (i = 0; i < deck.length/2; i++) {
        if (player1Hand[i].rank > player2Hand[i].rank) {
            console.log("Player 1 Wins!");
            player1Score += 1;
        } else if (player2Hand[i].rank > player1Hand[i].rank) {
            console.log("Player 2 Wins!");
            player2Score += 1;
        }
        console.log("It's a Tie!");
    }
}

playGame(deck1);

// console.log(player1Hand);
// console.log(typeof(player1Hand));

// console.log(player1Hand[player1Hand[0].length - 1]);
// // for (let card in player1Hand) {
// //     console.log(player1Hand[card][player1Hand[card].length - 1]);
// // }
