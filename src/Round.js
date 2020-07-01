class Round {
  constructor(deck, turn) {
    this.deck = deck;
    this.turn = turn;
    this.currentCardIndex = 0;
    // use index to determine currentCard
    this.turnsCount = 0;
    this.result = '';
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return deck.card[this.currentCardIndex];
  }

  takeTurn(turn) {
    this.turnsCount++;
    turn.evaluateGuess();
    this.result = turn.giveFeedback(); //should return this
    if (turn.evaluateGuess()) {
      this.currentCardIndex++;
      turn.card = this.deck[this.currentCardIndex];
    } else {

    }
  }
  //update index determining current card if answer correct


  //calc%correct index of card we're on / turns counter
  //return value

  //endRound logs value in calc%correct


}



module.exports = Round;
