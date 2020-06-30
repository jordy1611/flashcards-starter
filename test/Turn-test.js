const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {

  it.skip('should be a function', function() {

    const turn = new Turn();

    expect(Turn).to.be.a('function');
  });

  it.skip('should be an instance of Turn', function() {

    const turn = new Turn();

    expect(turn).to.be.an.instanceOf(Turn);
  });

  it.skip('should take and store a user\'s answer', function() {

    const turn = new Turn('class');

    expect(turn.userAnswer).to.equal('class');
  })

  it.skip('should take a card object and store it ', function() {

    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('string', card);

    expect(turn.userAnswer).to.equal('string');

    expect(turn.cards.length).to.have.lengthOf(1);
    expect(turn.cards[0]).to.equal(turn); //hopefully this works
  })

  it.skip('should return the user\'s guess', function() {

    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('string', card);

    const returnGuess = turn.returnGuess();

    expect(returnGuess).to.equal('string');
  })

  it.skip('should return the card', function() {

    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('string', card);

    const returnCard = turn.returnCard();

    expect(returnCard).to.equal(card);
  })

  it.skip('should tell if user\'s guess matches the correct answer', function() {

    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn1 = new Turn('String', card);
    const turn2 = new Turn('object', card);

    const guess1 = turn.evaluateGuess(turn1);

    expect(guess1).to.equal(false);

    const guess2 = turn.evaluateGuess(turn2);

    expect(guess1).to.equal(true);
  })
});
