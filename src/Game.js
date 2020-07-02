const data = require('./data');
const cardsData = data.prototypeData;
const util = require('./util');
const Round = require('../src/Round.js');
const Turn = require('../src/Turn.js');
const Deck = require('../src/Deck.js');
const Card = require('../src/Card.js');


class Game {
  constructor(round) {
    this.currentRound = null;
}

  makeCards(cardsData) {
  // let cards = cardsData.map(card => new Card(card));
  // return cards;
  return cardsData.map(card => new Card(card));
  };


  start() {
    const cards = this.makeCards(cardsData);
    const deck = new Deck(cards);
    const round = new Round(deck);
    this.currentRound = round;
    
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
