const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck.js');
const Card = require('../src/Turn.js');
const cardsData = require('../src/data.js').prototypeData;

describe('Deck', function() {
  var card1, card2, card3;
  before(function() {
    card1 = new Card(
      1,
      'What allows you to define a set of related information using key-value pairs?',
      ['object', 'array', 'function'],
      'object');

    card2 = new Card(
      2,
      'What is a comma-separated list of related values?',
      ['array', 'object', 'function'],
      'array')

    card3 = new Card(
      3,
      'What type of prototype method directly modifies the existing array?',
      ['mutator method', 'accessor method', 'iteration method'],
      'mutator method');
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
