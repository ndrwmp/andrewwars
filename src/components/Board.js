import React from 'react';
import Square from './Square.js';
import Infantry from './Units/Infantry';
import setup, { findTerrain, getUpdatedBoard } from '../helper.js';

const rows = 10;
const cols = 12;

export default class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            board: setup(rows, cols)
        }
    }

    componentDidUpdate() {
        this.setState({board: getUpdatedBoard()});
        alert("updated board");
    }

    renderSquare(row, col) {
        return (
            <Square
                row={row}
                col={col}
                unit={this.state.board[row][col]}
                terrain={findTerrain(row, col)}
                onClick={() => this.handleClick(row, col, this.props.unit)}
                key={row+'x'+col}
            />
        );
    }

    handleClick(row, col, unit) {
        // we need a deep copy since it's a 2D array
        const newBoard = this.state.board.slice().map(
            function(row) {
                return row.slice();
            }
        );

        // create the correct unit
        var newUnit = null;
        switch(unit) {
            case 'infantry':
                newUnit = <Infantry />;
                break;
            default:
                newUnit = null;
        }
        newBoard[row][col] = newUnit;

        // update the board
        this.setState({ board: newBoard });

        console.log("click handled");
    }

    renderRow(row) {
        var renderedRow = [];
        for (var col = 0; col < cols; col++) {
            renderedRow.push(this.renderSquare(row, col));
        }
        return (
            <div className="board--row">
                {renderedRow}
            </div>
        );
    }

    render() {
        return (
            <div className="board">
                {this.renderRow(0)}
                {this.renderRow(1)}
                {this.renderRow(2)}
                {this.renderRow(3)}
                {this.renderRow(4)}
                {this.renderRow(5)}
                {this.renderRow(6)}
                {this.renderRow(7)}
                {this.renderRow(8)}
                {this.renderRow(9)}
            </div>
        );
    }
}