import React, { Component } from "react";
import "./Game.css";

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerVal: null,
      computerVal: null,
      playerScore: 0,
      compScore: 0,
    };
  }

  render() {
    return (
      <div>
        <h1>Welcome to Rock, Paper ,Scissors Game</h1>
        <div>
          <button>Rock</button>
          <button>PAPER</button>
          <button>SCISSOR</button>
        </div>
        <div>
          <p>Your choice: </p>
          <p>Computer's choice:</p>
          <h2>Your Score: </h2>
          <h2>Computer Score: </h2>
        </div>
      </div>
    );
  }
}

export default Game;
