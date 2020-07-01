const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round.js')
const Deck = require('../src/Deck.js');
const Card = require('../src/Turn.js');
const cardsData = require('../src/data.js').prototypeData;

describe('Round', function () {

  var card1;
  var card2;
  var card3;
  var deck;
  var turn;
  before(function() {
    card1 = cardsData[0];
    card2 = cardsData[1];
    card3 = cardsData[2];

    deck = new Deck([card1, card2, card3]);

    turn = new Turn('dinosaur', card2)
  });

  it('should be a function', function() {

    const round = new Round();

    expect(Round).to.be.a('function');
  });

  it('should be an instance of Deck', function() {

    const round = new Round();

    expect(round).to.be.an.instanceOf(Round);
  });

  it.skip('should have a deck', function() {

    const round = new Round(deck);

    expect(round.deck).to.deepEqual([card1, card2, card3]);

  });

  it.skip('should return the current card', function() {

    const round = new Round(deck);

    currentRoundCard = round.returnCurrentCard();

    expect(currentRoundCard).to.equal(turn.card)
  });

  it.skip('should')
})
