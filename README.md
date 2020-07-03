# **Flash Cards**
Mod 2 Solo Project

## Abstract
In this project, I am writing code in order to create a terminal based flashcards studying tool. This project is the first time I'm writing my own testing software while writing functional code. The purpose of the project is to develop familiarity and confidence with test-driven software development. The programs sorts through an array of stored flash card info and displays those flash cards as questions with a list of possible answers. The user can choose and answer by using the arrow keys or typing a number. The program determines if the user's answer is correct or not and moves on to the next card.

## Functionality
The user can initialize the game in the terminal when the in the program's directory.
![Gif of game starting]()

The user can select an answer using the arrow keys or typing the relevant number. They can the submit their answer using the return/enter key. The game will display the result of the user's answer. The user can use the return/enter key to move on to the next card.
![Gif of user answering a question and moving on to the next]()

When the user submits their answer on the last card the game displays a message and the percentage of correct answers.
![Gif of last answer being submitted]()

## Installation
* Optional fork your own personal repo
* Clone repo to local directory using `git clone git@github.com:jordy1611/flashcards-starter.git`
* `cd` into program directory
* `node index.js` to start game

## Setup and Gameplay
* Choose and answer by typing in a number or using the arrow keys
* Press return/enter to submit an answer
* Press return/enter to move on to the next card
* When game is over results will displays
* `node index.js` to start a new game

## Future Implementations
* A method to keep track of time played using Date.now() at the instantiation of a round and when endRound is used.
* A message stating players must answer 90% of the cards correctly could be implemented in an if else statement in the endRound method in the round class.
* A method that creates a new round using only the cards answered incorrectly which uses the stored id's of incorrect guesses to filter the array of card info in data.js.

## Primary Developer
[Jordan Shryock](https://github.com/jordy1611)

## Links
[GitHub Repo](https://github.com/jordy1611/flashcards-starter)
[Project Specs](https://frontend.turing.io/projects/flash-cards.html)
[Github Projects](https://github.com/users/jordy1611/projects/3)
