import React from "react";
import Square from "./square";
import calculateWinner from "./calculateWinner";

class Board extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        squares: Array(9).fill(null),
        xIsNext: false,
        history: []
      }
    }
    handleClick(i) {
  
      const squares = this.state.squares.slice();
      if (calculateWinner(this.state.squares) || squares[i]) {
        return;
      }
      squares[i] = this.state.xIsNext ? "X" : "O"
      this.state.history = [...this.state.history, squares]
      this.setState(
        {
          squares: squares,
          xIsNext: !this.state.xIsNext,
        }
      )
      console.log(this.state.history)
    }
    renderSquare(i) {
      return <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />;
    }
  
    render() {
      const winner = calculateWinner(this.state.squares)
      const status = winner ? `winner: ${winner}` : `Next player: ${this.state.xIsNext ? "X" : "O"}`
  
      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }
  
  export default Board