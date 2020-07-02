const Turn = require('../src/Turn.js')

class Round {
  constructor(deck) {
    this.deck = deck.cards;
    this.turnCount = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.deck[0];
  }

  takeTurn(userAnswer) {
    let currentCard = this.returnCurrentCard();
    let turn = new Turn(userAnswer, currentCard);
    this.turnCount++;
    this.deck.shift();
    if (!turn.evaluateGuess()) {
      this.incorrectGuesses.push(currentCard.id);
    }
    return turn.giveFeedback();
  }

  calculatePercentCorrect() {
    let totalCorrect = this.turnCount - this.incorrectGuesses.length;
    return Math.floor(totalCorrect / this.turnCount) * 100 || 0;
  }

  endRound() {
    let percent = this.calculatePercentCorrect()
    console.log(`** Round Over! ** You answered ${percent}% of the questions correctly!`);
    return process.exit();
  }
}

module.exports = Round;
