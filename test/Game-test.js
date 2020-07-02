const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round.js');
const Turn = require('../src/Turn.js');
const Deck = require('../src/Deck.js');
const Card = require('../src/Card.js');
const cardsData = require('../src/data.js').prototypeData;
describe('Game', function() {
  var card1;
  var card2;
  var card3;
  var deck;
  var turn;
  var round;
  var game;
  beforeEach(function() {
    card1 = new Card(cardsData[0]);
    card2 = new Card(cardsData[1]); //can go away
    card3 = new Card(cardsData[2]); //can go away
    deck = new Deck([card1, card2, card3]); //can go away
    round = new Round(deck); //can go away
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
  })

  it('should create cards, put them in an array and instantiate a new round');
    game.start();

    expect(game.currentRound.deck.length).to.equal(30);
    expect(game.currentRound.deck[0]).to.deep.equal(card1);
})
