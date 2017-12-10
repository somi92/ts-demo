// enums (open ended)

enum CardSuit {
    Hearts,
    Clubs,
    Diamonds,
    Spades
}

let suit: CardSuit = CardSuit.Clubs;

console.log(CardSuit[0]);
console.log(CardSuit["Clubs"]);
console.log(CardSuit[CardSuit.Hearts]);

// tuples

let x: [string, number];
x = ["abc", 1];
console.log(x[0]);