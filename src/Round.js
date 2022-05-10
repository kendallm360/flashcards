const Turn = require("./Turn");

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
    this.currentCard = this.deck.cards[this.turns];
  }
  returnCurrentCard() {
    return this.currentCard;
  }
  takeTurn(usersAnswer) {
    const currentTurn = new Turn(usersAnswer, this.returnCurrentCard());
    this.turns++;
    if (usersAnswer !== currentTurn.card.correctAnswer) {
      this.incorrectGuesses.push(currentTurn.card.id);
    }
    return currentTurn.giveFeedback();
  }
}

module.exports = Round;
