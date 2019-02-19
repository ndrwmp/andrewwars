import React from 'react';
import Square from './Square.js';
import { COLS, findTerrain, getUpdatedBoard } from '../helper.js';

export default class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            board: getUpdatedBoard(),
            selected: [null, null],
            unitShopOpen: false
        }
        this.handleBuyUnits = this.handleBuyUnits.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        this.isSelected = this.isSelected.bind(this);
    }

    renderSquare(row, col) {
        return (
            <Square
                row={row}
                col={col}
                unit={this.state.board[row][col]}
                terrain={findTerrain(row, col)}
                isSelected={this.isSelected}
                handleBuyUnits={this.handleBuyUnits}
                handleSelect={this.handleSelect}
                key={row+'x'+col}
            />
        );
    }

    isSelected(row, col) {
        return (this.state.selected[0] === row && this.state.selected[1] === col);
    }

    handleSelect(row, col) {
        // if (findTerrain(row, col) === "workshop") {
        //     console.log("not allowed to select units ontop of a workshop");
        //     return;
        // }

        var unitIsSelected = !!(this.state.selected[0] && this.state.selected[1]);
        // console.log("unitIsSelected? " + unitIsSelected);

        var unitOnThisSquare = !!this.state.board[row][col];
        // console.log("unitOnThisSquare? " + unitOnThisSquare);

        // if no unit is selected and no unit is on this square
        if (!unitIsSelected && !unitOnThisSquare)
            console.log("no unit selected or on this square");
            this.setState({
                selected: [null, null]
            });

        // if no unit is selected and there is a unit on this square
        if (!unitIsSelected && unitOnThisSquare) {
            console.log("no unit selected but there is a unit on this square");
            this.setState({
                selected: [row, col]
            });
        }
        
        // if a unit is selected and there is no unit on this square
        if (unitIsSelected && !unitOnThisSquare)
            console.log("unit selected and no unit on this square");
        
        // if a unit is selected and there is a unit on this square
        if (unitIsSelected && unitOnThisSquare)
            console.log("unit selected and unit on this square");
        
    }

    handleBuyUnits(row, col, unit) {
        // can't place a unit on top of another
        if (this.state.board[row][col]) {
            console.log("move this unit out of the way first!");
            return;
        }
        // we need a deep copy since it's a 2D array
        const newBoard = this.state.board.slice().map(
            function(row) {
                return row.slice();
            }
        );

        // create the correct unit
        newBoard[row][col] = unit;

        // update the board
        this.setState({ board: newBoard });

        console.log(unit + " purchased");
    }

    renderRow(row) {
        var renderedRow = [];
        for (var col = 0; col < COLS; col++) {
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