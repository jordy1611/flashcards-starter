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
  var round;
  before(function() {
    card1 = cardsData[0];
    card2 = cardsData[1];
    card3 = cardsData[2];

    deck = new Deck([card1, card2, card3]);

    turn = new Turn('dinosaur', card1);

    round = new Round(deck);
  });

  it('should be a function', function() {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Deck', function() {
    expect(round).to.be.an.instanceOf(Round);
  });

  it.skip('should have a deck', function() {
    expect(round.deck).to.deepEqual([card1, card2, card3]);
  });

  it.skip('should return the current card', function() {
    currentRoundCard = round.returnCurrentCard();

    expect(currentRoundCard).to.equal(turn.card)
  });

  it.skip('should update the amount of turns taken', function() {
    round.takeTurn()
    expect(round.turnCount).to.equal(1);
    round.takeTurn()
    expect(round.turnCount).to.equal(2);
  });

  it.skip('should create a new instance of turn when a guess is made', function() {
    // turn takes a user guess and a card
    //Have 3 cards at the beginning of the test.
    //Test the new test based on of the this.card of the newly instantiated test is equal to card
    var newTurn = round.takeTurn();
    // userAnswer in turn will be undefined in a turn
    expect(newTurn.userAnswer).to.equal(undefined);
    expect(newTurn).to.be.an.instanceOf(Round);
  })

  it.skip('should make the next card the current card on a correct guess', function() {
    var newTurn = round.takeTurn();

    expect(newTurn.card).to.not.equal(turn.card);
    expect(newTurn.card).to.be.an.instanceOf(Round);
  })

  it.skip('should evaluate and record all guesses', function() {
    
    var newTurn1 = round.takeTurn();

    expect(round.)
  })
})
