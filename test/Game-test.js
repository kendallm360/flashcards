const chai = require("chai");
const expect = chai.expect;

const Round = require("../src/Round");
const Game = require("../src/Game");
const data = require("../src/data");

describe("Game", () => {
  let game;
  beforeEach(() => {
    game = new Game();
  });

  it("Should be a function", () => {
    expect(Game).to.be.a("function");
  });

  it("Should be an instance of Game", () => {
    expect(game).to.be.an.instanceOf(Game);
  });

  it("Should keep track of current round", () => {
    game.startLite();
    expect(game.currentRound).to.an.instanceOf(Round);
  });

  it("Should have a method that creates a new instance of Deck", () => {
    game.startLite();
    expect(game.currentRound.deck).to.exist;
  });

  it("should use the start method to create instances of Card", () => {
    game.startLite();
    expect(game.currentRound.deck.cards[0]).to.deep.equal(
      data.prototypeData[0]
    );
    expect(game.currentRound.deck.cards[7]).to.deep.equal(
      data.prototypeData[7]
    );
    expect(game.currentRound.deck.cards.length).to.equal(
      data.prototypeData.length
    );
  });
});
