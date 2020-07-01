class Round {
  constructor(deck, turn) {
    this.deck = deck;
    this.currentCardIndex = 0;
    this.currentCard = this.deck[this.currentCardIndex];
    // use index to determine currentCard
    this.turnsCount = 0;
    this.result = '';
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.deck.cards[this.currentCardIndex];
  }

  takeTurn(userGuess) {
    this.turnsCount++;
    let result = turn.giveFeedback(); //should return this can probs do temp var
    if (turn.evaluateGuess()) {
      this.currentCardIndex++;
      turn.card = deck.cards[this.currentCardIndex];
    } else {
      this.incorrectGuesses.push(this.currentCard['id']);
    }
    turn = new Turn(userAnswer, this.currentCard);
    return result;
  }
  //update index determining current card if answer correct


  //calc%correct index of card we're on / turns counter
  //return value

  //endRound logs value in calc%correct


}



module.exports = Round;
