const chai = require("chai");
const Card = require("../src/Card");
const expect = chai.expect;

const Turn = require("../src/Turn");

describe("Turn", () => {
  let turn;
  let card;
  beforeEach(() => {
    card = new Card(
      18,
      "What does the callback function for the map() method take in?",
      ["current element", "initializer", "boolean"],
      "current element"
    );
    turn = new Turn("slice()", card);
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
});
