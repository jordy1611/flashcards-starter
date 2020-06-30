const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck.js');
const Card = require('../src/Turn.js');
const cardsData = require('../src/data.js').prototypeData;

describe('Deck', function () {
  
  var card1;
  var card2;
  var card3;
  before(function() {
    card1 = cardsData[0];
    card2 = cardsData[1];
    card3 = cardsData[2];
  });

  it('should be a function', function() {

    const deck = new Deck();

    expect(Deck).to.be.a('function');
  })

  it('should be an instance of Deck', function() {

    const deck = new Deck();

    expect(deck).to.be.an.instanceOf(Deck);
  })

  it('should have an array of Card objects', function() {

    const deck = new Deck([card1, card2, card3]);

    expect(deck.cards[0]).to.equal(card1);
    expect(deck.cards[1]).to.equal(card2);
    expect(deck.cards[2]).to.equal(card3);
  })

  it('should count the number of cards in the deck', function() {

    const deck = new Deck([card1, card2, card3]);

    var countResult = deck.countCards();

    expect(countResult).to.equal(3);
  })
})
