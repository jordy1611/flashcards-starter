const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');
const Card = require('../src/Card');

describe('Game', function() {

it.skip('should be a function', function() {
  const game = new Game();
  expect(Game).to.be.a('function');
});

it.skip('should be an instance of Game', function() {
  const game = new Game();
  expect(card).to.be.an.instanceOf(Card);
});

it.skip('should take and store a user\'s answer', function() {
  const game = new Game('batman');
  expect(game)
})

});
