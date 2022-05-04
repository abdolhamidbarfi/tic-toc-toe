import React from "react";
import Board from "./board";
import calculateWinner from "./calculateWinner";
import Hello from "./initialGame/helloMessage";
import GetInfo from "./initialGame/getInfo"


class Game extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      history: [
        { squares: Array(9).fill(null) }
      ],
      xIsNext: false,
    }
  }

  playerNames() {
    const playerA = 0;
    const playerB = 0;
  }

  render() {
    const history = this.state.history;
    const current = history[history.length - 1];
    const winner = calculateWinner(current.squares)
    let status;
    if (winner) {
      status = 'winner: ' + winner;
    } else {
      status = 'Next Player: ' + (this.state.xIsNext ? 'X' : 'O')
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
        <Hello />
        <GetInfo />
      </div>
    );
  }
}


export default Game;