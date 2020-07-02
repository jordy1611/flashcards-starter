const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game.js');
const Round = require('../src/Round.js');
const Turn = require('../src/Turn.js'); // don't need
const Deck = require('../src/Deck.js');
const Card = require('../src/Card.js');
const cardsData = require('../src/data.js').prototypeData;

describe('Game', function() {
  var card1; //can go away
  var game;
  beforeEach(function() {
    card1 = new Card( //can go away
      1,
      'What allows you to define a set of related information using key-value pairs?',
      ['object', 'array', 'function'],
      'object');
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

  // it('should create cards, put them in an array start a new round', function() {
  //   game.start()
  //
  //   expect(game.currentRound.deck[0]).to.equal();
  //
  //   expect(game.currentRound.deck.length).to.equal(30);
  // });
});
// cd turing/2module/projects/JS-Flash-Cards/
