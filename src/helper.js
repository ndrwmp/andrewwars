// define game board size
export const ROWS = 10, COLS = 12;

// create 10x12 board, fill with null
var board = null;
board = new Array(ROWS).fill(null);
for(var r = 0; r < ROWS; r++) {
    board[r] = new Array(COLS).fill(null);
}

// create terrain
var terrain = null;
terrain = new Array(ROWS).fill('land');
for(r = 0; r < ROWS; r++) {
    terrain[r] = new Array(COLS).fill('land');
};
        
// create island
for(var i = 0; i < ROWS; i++) {
    terrain[0][i] = 'water';
    terrain[9][i] = 'water';
    terrain[i][0] = 'water';
    terrain[i][11] = 'water';
}
terrain[0][10] = 'water';
terrain[9][10] = 'water';

// create buildings
terrain[1][10] = 'headquarters';
terrain[8][1] = 'headquarters';
terrain[1][9] = 'workshop';
terrain[2][10] = 'workshop';
terrain[7][1] = 'workshop';
terrain[8][2] = 'workshop';

export function buyUnit(row, col, unit) {
    board[row][col] = unit;
    alert("bought infantry");
}

export function getUpdatedBoard() {
    return board;
}

export function findTerrain(row, col) {
    return terrain[row][col];
}

// function for checking if move is within range
// given oldRow, oldCol, and newRow, newCol, and the movement range of the unit
// find the difference between the oldRow and newRow, and the difference between the
// oldCol and newCol. add those differences up, if they're <= the range of the unit
// then the unit can move there. add a "within-range" class to those squares
// similarly to how you added a "selected" tag to the squares
// maybe do the logic for determining square classNames within a helper function
// or witihn hte Board component, but that's optional.

export function squareWithinRange(oldRow, oldCol, newRow, newCol, range) {
    if (!oldRow || !oldCol)
        return;
    var rowDiff = Math.abs(oldRow - newRow);
    var colDiff = Math.abs(oldCol - newCol);
    return rowDiff+colDiff <= range;
}