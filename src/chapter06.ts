interface TV {
    turnOn() : void;
    turnOff() : void;
}

const myTV : TV = {
    turnOn() {

    },

    turnOff() {

    }
};

function tryTurnOn(tv : TV) {
    tv.turnOn();
}

tryTurnOn(myTV);

// interface 행위,속성을 꼭 가져야한다.
interface Cell {
    row : number;
    col : number;
    piece? : Piece; // option 속성(꼭 추가해줄필요는 없다.)
}

interface Piece { 
    move(from: Cell, to: Cell) : boolean;
}

function createBoard() {
    const cells: Cell[] = [];
    for(let row =0; row < 4; row++) {
        for(let col =0; col < 4; col++) {
            cells.push({
                row,
                col
            })
        }
    }
    return cells;
}

const board = createBoard();
board[0].piece = {
    move(from: Cell, to: Cell) {
        return true;
    }
}

console.log(board);