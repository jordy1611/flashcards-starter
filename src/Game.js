const data = require('./data');
const cardsData = data.prototypeData;
const util = require('./util');
const Round = require('../src/Round.js');
const Deck = require('../src/Deck.js');
const Card = require('../src/Card.js');


class Game {
  constructor() {
    this.currentRound = null;
  }

  makeCards(cardsData) {
    return cardsData.map(card => new Card(card.id, card.question, card.answers,
      card.correctAnswer));
  }

  start() {
    const cards = this.makeCards(cardsData);
    const deck = new Deck(cards);
    const round = new Round(deck);
    this.currentRound = round;
    this.printMessage(deck, round);
    this.printQuestion(round);
  }

  printMessage(deck) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
    util.main(round);
  }
}

module.exports = Game;
