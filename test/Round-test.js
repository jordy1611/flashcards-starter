const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round.js')
const Deck = require('../src/Deck.js');
const Card = require('../src/Card.js');
const cardsData = require('../src/data.js').prototypeData;

describe('Round', function() {

  var card1;
  var card2;
  var card3;
  var deck;
  var turn;
  var round;
  beforeEach(function() {
    card1 = new Card(cardsData[0]);
    card2 = new Card(cardsData[1]);
    card3 = new Card(cardsData[2]);
    deck = new Deck([card1, card2, card3]);
    round = new Round(deck);
  });

  it('should be a function', function() {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Deck', function() {
    expect(round).to.be.an.instanceOf(Round);
  });

  it('should have a deck', function() {
    expect(round.deck).to.deep.equal([card1, card2, card3]);
  });

  it('should return the current card', function() {
    expect(round.returnCurrentCard()).to.equal(card1);
  });

  it('should update the amount of turns taken', function() {
    round.takeTurn('batman')

    expect(round.turnCount).to.equal(1);

    round.takeTurn('spiderman')

    expect(round.turnCount).to.equal(2);
  });

  it('should make the next card the current card on a guess', function() {
    expect(round.returnCurrentCard()).to.equal(card1);

    round.takeTurn('object');

    expect(round.returnCurrentCard()).to.equal(card2);

    round.takeTurn('batman');

    expect(round.returnCurrentCard()).to.equal(card3);
  });

  it('should evaluate incorrect guesses', function() {
    expect(round.takeTurn('batman')).to.equal('incorrect!');
  });

  it('should evaluate correct guesses', function() {
    expect(round.takeTurn('object')).to.equal('correct!');
  });

  it('should store id\'s of all bad guesses', function() {
    expect(round.incorrectGuesses).to.deep.equal([]);

    round.takeTurn('batman');

    expect(round.incorrectGuesses).to.deep.equal([1]);

  });

  it('should calculate precentage of correct guesses',function() {
    expect(round.calculatePercentCorrect()).to.equal(0);

    round.takeTurn('object');

    round.takeTurn('superman');

    expect(round.calculatePercentCorrect()).to.equal(50);
  });

  it('should display a message when round ends', function() {
    expect(round.endRound()).to.equal('** Round Over! ** You answered 0% of the questions correctly!')

    round.takeTurn('batman');

    expect(round.endRound()).to.equal('** Round Over! ** You answered 0% of the questions correctly!')

    round.takeTurn('array');

    expect(round.endRound()).to.equal('** Round Over! ** You answered 50% of the questions correctly!')
  });
})
