const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round.js')
const Deck = require('../src/Deck.js');
const Card = require('../src/Turn.js');

describe('Round', function () {

  var card1;
  var card2;
  var card3;
  var deck;
  beforeEach(function() {
    card1 = {
      "id": 1,
      "question": "What allows you to define a set of related information using key-value pairs?",
      "answers": ["object", "array", "function"],
      "correctAnswer": "object"
    };

    card2 = {
      "id": 2,
      "question": "What is a comma-separated list of related values?",
      "answers": ["array", "object", "function"],
      "correctAnswer": "array"
    };

    card3 = {
      "id": 3,
      "question": "What type of prototype method directly modifies the existing array?",
      "answers": ["mutator method", "accessor method", "iteration method"],
      "correctAnswer": "mutator method"
    };

    deck = new Deck([card1, card2, card3]);
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

  })
})
