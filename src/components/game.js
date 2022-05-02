import React from "react";
import Board from "./board";
import calculateWinner from "./calculateWinner";

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
    render() {
      const history = this.state.history;
      const current = history[history.length - 1];
      const winner = calculateWinner(current.squares)
      let status;
      if (winner) {
        status = 'winner: ' + winner;
      } else {
        status = 'Next Player: ' + (this.state.xIsNext ?  'X' : 'O')
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
        </div>
      );
    }
  }


  export default Game;