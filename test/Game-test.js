const chai = require("chai");
const expect = chai.expect;

const Card = require("../src/Card");
const Deck = require("../src/Deck");
const Round = require("../src/Round");
const Game = require("../src/Game");

describe("Round", () => {
  let card1;
  let card2;
  let card3;
  let deck;
  let round;
  let game;

  beforeEach(() => {
    card1 = new Card(
      30,
      "What type of methods are functions that allow you to manipulate the value of a particular data type or class?",
      ["prototype method", "object", "callback function"],
      "prototype method"
    );
    card2 = new Card(
      29,
      "map() takes in two optional arguments: the index of the current element, and the array that map was called upon",
      ["true", "false"],
      "true"
    );
    card3 = new Card(
      27,
      "Accessor methods permanently modify the original array, mutator methods do not.",
      ["true", "false"],
      "false"
    );
    deck = new Deck([card1, card2, card3]);
    round = new Round(deck);
  });

  it("Should be a function", () => {
    expect(Game).to.be.a("function");
  });

  it("Should be an instance of Deck", () => {
    expect(game).to.be.an.instanceOf(Game);
  });

  it("Should keep track of current round", () => {
    expect(game.currentRound).to.equal(round);
  });
});
