const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {

  var cardInfo;
  beforeEach(function() {
    cardInfo = {
      "id": 1,
      "question": "What allows you to define a set of related information using key-value pairs?",
      "answers": ["object", "array", "function"],
      "correctAnswer": "object"
    }
  });

  it('should be a function', function() {

    const turn = new Turn();

    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {

    const turn = new Turn();

    expect(turn).to.be.an.instanceOf(Turn);
  });

  it('should take and store a user\'s answer', function() {

    const turn = new Turn('class');

    expect(turn.userAnswer).to.equal('class');
  })

  it('should take a card object and store it ', function() {

    const card = new Card(cardInfo);
    const turn = new Turn('string', card);

    expect(turn.userAnswer).to.equal('string');

    expect(turn.card).to.equal(card);
  })

  it('should return the user\'s guess', function() {

    const card = new Card(cardInfo);
    const turn = new Turn('string', card);

    const returnGuess = turn.returnGuess(card);

    expect(turn.returnGuess()).to.equal('string');
  })

  it('should return the card', function() {

    const card = new Card(cardInfo);
    const turn = new Turn('string', card);

    const returnCard = turn.returnCard();

    expect(turn.returnCard()).to.equal(card);
  })

  it('should tell if user\'s guess matches the correct answer', function() {

    const card = new Card(cardInfo);
    const turn1 = new Turn('string', card);
    const turn2 = new Turn('object', card);

    const guess1 = turn1.evaluateGuess();

    expect(guess1).to.equal(false);

    const guess2 = turn2.evaluateGuess();

    expect(guess2).to.equal(true);
  })

  it('should give feedback based on whether the guess is correct or not', function() {

    const card = new Card(cardInfo);
    const turn1 = new Turn('string', card);
    const turn2 = new Turn('object', card);

    const feedback1 = turn1.giveFeedback();

    expect(feedback1).to.equal('incorrect!');

    const feedback2 = turn2.giveFeedback();

    expect(feedback2).to.equal('correct!');

  })
});
