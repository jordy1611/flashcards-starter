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

    const turn = new Turn('Class');

    expect(turn.userAnswer).to.equal('Class');
  })

  it.skip('should take a card object and store it ', function() {

    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')
    const turn = new Turn('String', card);

    expect(turn.userAnswer).to.equal('String');

    expect(turn.cards.length).to.have.lengthOf(1);
    expect(turn.cards[0]).to.equal(turn); //hopefully this works
  })

  it.skip('should return the user\'s guess', function() {

    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')
    const turn = new Turn('String', card);

    const returnGuess = card.returnGuess();

    expect(returnGuess).to.equal('String');
  })

  it.skip('should return the card', function() {

    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')
    const turn = new Turn('String', card);

    const returnCard = card.returnCard();

    expect(returnCard).to.equal(card);
  })

  
});
