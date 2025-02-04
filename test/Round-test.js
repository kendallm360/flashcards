const chai = require("chai");
const expect = chai.expect;

const Card = require("../src/Card");
const Deck = require("../src/Deck");
const Round = require("../src/Round");

describe("Round", () => {
  let card1;
  let card2;
  let card3;
  let deck;
  let round;
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
    expect(Round).to.be.a("function");
  });

  it("Should be an instance of Round", () => {
    expect(round).to.be.an.instanceOf(Round);
  });

  it("Should have a method that returns the current card", () => {
    expect(round.returnCurrentCard()).to.equal(card1);
  });

  it("Should have a method that updates amount of turns taken", () => {
    round.takeTurn("steve");
    expect(round.turns).to.equal(1);
  });

  it("Should have a method that evaluates the user's guess", () => {
    expect(round.takeTurn("object")).to.equal("incorrect!");
  });

  it("Should have a method that gives feedback", () => {
    expect(round.takeTurn("object")).to.equal("incorrect!");
  });

  it("Should have a method that stores ids", () => {
    round.takeTurn("object");
    expect(round.incorrectGuesses).to.deep.equal([30]);
  });

  it("Should not store card ids of correct guesses", () => {
    round.takeTurn("prototype method");
    expect(round.incorrectGuesses).to.deep.equal([]);
  });

  it("Should have a method that calculates percent correct", () => {
    round.takeTurn("object");
    round.takeTurn("false");
    round.takeTurn("false");
    expect(round.calculatePercentCorrect()).to.equal(33);
  });

  it("Should have a method that informs the user when the round is over", () => {
    round.takeTurn("object");
    round.takeTurn("false");
    round.takeTurn("false");
    expect(round.endRound()).to.equal(
      "** Round over! ** You answered 33% of the questions correctly!"
    );
  });
});
