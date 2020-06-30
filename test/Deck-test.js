const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Turn');
const Card = require('../src/Turn');

describe('Deck', function () {

  it('should be a function', function() {

    const deck = new Deck();

    expect(Deck).to.be.a('function');
  })

  it('should be an instance of Deck', function() {

    const deck = new Deck();

    expect(deck).to.be.an.instanceOf(Deck);
  })

  it.skip('sohuld have an array of Card objects', function() {

    
  })
})
