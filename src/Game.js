const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Round = require('../src/Round.js');
const Turn = require('../src/Turn.js');
const Deck = require('../src/Deck.js');
const Card = require('../src/Card.js');


class Game {
  constructor(round) {
    this.currentRound = null;
}


  start() {
    let card
  }
  //start instantiates cards, deck, round
  // invokes printMessage
  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }
}

module.exports = Game;
