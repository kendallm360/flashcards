/* eslint-disable no-console */
/* eslint-disable max-len */
const data = require("./data");
const Round = require("./Round");
const Deck = require("./Deck");
const Card = require("./Card");

const prototypeQuestions = data.prototypeData;
const util = require("./util");

class Game {
  constructor() {
    this.currentRound;
  }

  // eslint-disable-next-line no-unused-vars
  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`);
  }

  printQuestion(round) {
    util.main(round);
  }

  startLite() {
    const cards = prototypeQuestions.map(
      (card) =>
        new Card(card.id, card.question, card.answers, card.correctAnswer)
    );
    const deck = new Deck(cards);
    const round = new Round(deck);
    this.currentRound = round;
  }

  start() {
    this.startLite();
    const deck = this.currentRound.deck;
    const round = this.currentRound;
    this.printMessage(deck, round);
    this.printQuestion(round);
  }
}

module.exports = Game;
