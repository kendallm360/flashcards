const chai = require("chai");
const Card = require("../src/Card");
const expect = chai.expect;

const Turn = require("../src/Turn");

describe("Turn", () => {
  let turn;
  let card;
  let turn2;
  beforeEach(() => {
    card = new Card(
      18,
      "What does the callback function for the map() method take in?",
      ["current element", "initializer", "boolean"],
      "current element"
    );
    turn = new Turn("slice()", card);
    turn2 = new Turn("current element", card);
  });

  it("Should be a function", () => {
    expect(Turn).to.be.a("function");
  });

  it("Should be an instance of Turn", () => {
    expect(turn).to.be.an.instanceOf(Turn);
  });

  it("Should store a user's guess", () => {
    expect(turn.guess).to.equal("slice()");
  });

  it("Should store an instance of Card", () => {
    expect(turn.card).to.equal(card);
  });

  it("Should have a method that returns the user's guess", () => {
    expect(turn.returnGuess()).to.equal("slice()");
  });

  it("Should have a method that returns the card", () => {
    expect(turn.returnCard()).to.equal(card);
  });

  it("Should have a method that returns false for the wrong answer", () => {
    expect(turn.evaluateGuess()).to.equal(false);
  });

  it("Should have a method that returns true for the correct answer", () => {
    expect(turn2.evaluateGuess()).to.equal(true);
  });

  it("Should have a method that gives the user feedback if incorrect", () => {
    expect(turn.giveFeedback()).to.equal("incorrect!");
  });

  it("Should have a method that gives the user feedback if correct", () => {
    expect(turn2.giveFeedback()).to.equal("correct!");
  });
});
