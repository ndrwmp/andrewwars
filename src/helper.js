var board = null;

export default function setup(row, col, filler=null) {
    // create 10x12 board, fill with null
    board = new Array(row).fill(filler);
    for(var r = 0; r < row; r++) {
        board[r] = new Array(col).fill(filler);
    }
    return board;
}

// create terrain
var terrain = setup(10, 12, 'land');
        
// create island
for(var i = 0; i < 10; i++) {
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
}

export function getUpdatedBoard() {
    return board;
}

export function findTerrain(row, col) {
    return terrain[row][col];
}