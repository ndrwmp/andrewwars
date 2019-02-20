import React from 'react';
import Square from './Square.js';
import { COLS, findTerrain, getUpdatedBoard, squareWithinRange } from '../helper.js';

export default class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            board: getUpdatedBoard(),
            selected: [null, null],
            unitShopOpen: false,
            modalIsOpen: false
        }
        this.handleBuyUnits = this.handleBuyUnits.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        this.selectedTag = this.selectedTag.bind(this);
        this.setModalStatus = this.setModalStatus.bind(this);
        this.aUnitIsSelected = this.aUnitIsSelected.bind(this);
    }

    renderSquare(row, col) {
        return (
            <Square
                row={row}
                col={col}
                unit={this.state.board[row][col]}
                terrain={findTerrain(row, col)}
                aUnitIsSelected={this.aUnitIsSelected}
                handleBuyUnits={this.handleBuyUnits}
                handleSelect={this.handleSelect}
                key={row+'x'+col}
                setModalStatus={this.setModalStatus}
                selectedTag={this.selectedTag(row, col)}
                squareWithinRangeTag={this.squareWithinRangeTag(row, col, 2)}
            />
        );
    }

    squareWithinRangeTag(newRow, newCol, range) {
        var withinRange = squareWithinRange(this.state.selected[0], this.state.selected[1], newRow, newCol, range);
        var terrain = findTerrain(newRow, newCol);
        var validTerrain = (terrain !== 'water');
        return (withinRange && validTerrain) ? " squareWithinRange" : "";
    }

    aUnitIsSelected() {
        return !(this.state.selected[0] === null);
    }

    setModalStatus(bool) {
        this.setState({ modalIsOpen: bool});
    }

    selectedTag(row, col) {
        var correctRow = this.state.selected[0] === row;
        var correctCol = this.state.selected[1] === col;
        return ((correctRow && correctCol)) ? " selected" : "";
    }

    handleSelect(row, col) {
        // if in unit buying screen, don't select anything
        if (this.state.modalIsOpen === true)
            return;

        var unitIsSelected = this.aUnitIsSelected();
        var unitOnThisSquare = !!this.state.board[row][col];

        // if no unit is selected and no unit is on this square
        if (!unitIsSelected && !unitOnThisSquare)
            // console.log("no unit selected or on this square");
            console.log("MVMT 0");
            // this.setState({
            //     selected: [null, null]
            // });

        // if no unit is selected and there is a unit on this square
        if (!unitIsSelected && unitOnThisSquare) {
            // console.log("no unit selected but there is a unit on this square");
            console.log("MVMT 1");
            this.setState({
                selected: [row, col]
            });
        }
        
        // if a unit is selected and there is no unit on this square
        if (unitIsSelected && !unitOnThisSquare) {
            if (!squareWithinRange(this.state.selected[0], this.state.selected[1], row, col, 3)) {
                console.log("out of range. pick somewhere else");
                return;
            }
            console.log("MVMT 2");
            
            // note old position, copy board for updating
            var oldPosition = this.state.selected;
            var unit = this.state.board[oldPosition[0]][oldPosition[1]];
            const newBoard = this.state.board.slice().map(
                function(row) {
                    return row.slice();
                }
            );

            // set unit to new position, clear old position
            newBoard[row][col] = unit;
            newBoard[oldPosition[0]][oldPosition[1]] = null;
            // warning. this is asynchronous
            this.setState({
                board: newBoard,
                selected: [null, null]
            });
        }
        
        // if a unit is selected and there is a unit on this square
        if (unitIsSelected && unitOnThisSquare)
            console.log("MVMT 3");
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