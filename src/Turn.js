class Turn {
  constructor(userAnswer, card) {
    this.userAnswer = userAnswer;
    this.card = card;
  }

  returnGuess() {
    return this.userAnswer
  }
}

module.exports = Turn;
