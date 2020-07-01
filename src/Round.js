class Round {
  constructor(deck, turn) {
    this.deck = deck.cards;
    this.currentCard = this.deck[0];
    this.turnsCount = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.deck[0];
  }

  takeTurn(userAnswer) {
    this.turnsCount++;
    let turn = new Turn(userAnswer, this.currentCard);
    if (!turn.evaluateGuess()) {
      this.incorrectGuesses.push(this.currentCard['id']);
    }
    return turn.giveFeedback();
  } // happens regardless
  //update index determining current card if answer correct


  //calc%correct index of card we're on / turns counter
  //return value

  //endRound logs value in calc%correct


}



module.exports = Round;
