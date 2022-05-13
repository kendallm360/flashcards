const Turn = require("./Turn");

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.deck.cards[this.turns];
  }

  takeTurn(usersAnswer) {
    const currentTurn = new Turn(usersAnswer, this.returnCurrentCard());
    this.turns++;
    if (usersAnswer !== currentTurn.card.correctAnswer) {
      this.incorrectGuesses.push(currentTurn.card.id);
    }
    return currentTurn.giveFeedback();
  }

  calculatePercentCorrect() {
    let average =
      ((this.turns - this.incorrectGuesses.length) / this.turns) * 100;
    return Math.round(average);
  }

  endRound() {
    return console.log(
      `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
    );
    // return string;
  }
}

module.exports = Round;
