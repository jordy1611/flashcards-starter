const chai = require('chai');
const expect = chai.expect;
const Game = require('../src/Game.js');

describe('Game', function() {
  var game;
  beforeEach(function() {
    game = new Game()
  });

  it('should be a function', function() {
    expect(Game).to.be.a('function');
  });

  it('should be an instance of Deck', function() {
    expect(game).to.be.an.instanceOf(Game);
  });

  it('should have currentRound set to null to start off', function() {
    expect(game.currentRound).to.equal(null);
  });
})
