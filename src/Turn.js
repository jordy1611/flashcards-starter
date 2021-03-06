class Turn {
  constructor(userAnswer, card) {
    this.userAnswer = userAnswer;
    this.card = card;
  }

  returnGuess() {
    return this.userAnswer;
  }

  returnCard() {
    return this.card;
  }

  evaluateGuess() {
    return this.userAnswer === this.card.correctAnswer;
  }

  giveFeedback() {
    return this.evaluateGuess() ? 'correct!' : 'incorrect!';
  }
}

module.exports = Turn;
