const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
context.scale(30, 30);

const canvasHold = document.getElementById("hold");
const contextHold = canvasHold.getContext("2d");
contextHold.scale(30, 30);

const tetrominos = {
    t: new tetrominoPiece([
        [0, 1, 0],
        [1, 1, 1],
        [0, 0, 0]], 1, "purple"),
    l: new tetrominoPiece([
        [0, 1, 0],
        [0, 1, 0],
        [0, 1, 1]], 2, "orange"),
    j: new tetrominoPiece([
        [0, 1, 0],
        [0, 1, 0],
        [1, 1, 0]], 3, "blue"),
    z: new tetrominoPiece([
        [0, 0, 0],
        [1, 1, 0],
        [0, 1, 1]], 4, "red"),
    s: new tetrominoPiece([
        [0, 0, 0],
        [0, 1, 1],
        [1, 1, 0]], 5, "green"),
    i: new tetrominoPiece([
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [1, 1, 1, 1],
        [0, 0, 0, 0]], 6, "cyan"),
    o: new tetrominoPiece([
        [1, 1],
        [1, 1]], 7, "yellow")
}

const colours = ["purple", "orange", "blue", "red", "green", "cyan", "yellow"];


let currentTetromino = {};

let currentPiece;
let holdTetromino;
let animationId;
let dropIntervalId;


const playerDefaultPos = {
    x: 3,
    y: 0
};


let playerPos = {};

let board;
const boardHeight = 20;
const boardWidth = 10;

let speed;
let score;

let allowHold;

////////////////
//FUNCTIONS
/////////////////

function tetrominoPiece(template, colourCode, colour) {
    this.template = template;
    this.colourCode = colourCode;
    this.colour = colour;
}


function start() {
    getNewTetromino();
    board = createEmptyBoard(10, 20);
    holdTetromino = new tetrominoPiece(createEmptyBoard(4, 4), '', 0);
    Object.assign(playerPos, playerDefaultPos);
    score = 0;
    speed = 1000;
    allowHold = true;
    document.getElementById("startButton").innerHTML = "RESTART";
    document.getElementById("scorePoints").innerHTML = 0;
    update();
}

//create a board
function createEmptyBoard(width, height) {
    let board = new Array(height);
    board.fill(0);
    board = board.map(row => new Array(width).fill(0));  //create a board filled with 0
    return board;

}

//get a random tetromino from the list of tetrominos
function randomTetromino(listOfTetrominos) {
    let choices = Object.keys(listOfTetrominos);
    let randomIndex = Math.floor(Math.random() * choices.length);
    let randomChoice = choices[randomIndex];
    return listOfTetrominos[randomChoice]; //returns the tetromino name
}


function getNewTetromino() {
    currentTetromino = Object.assign(currentTetromino, randomTetromino(tetrominos));
    currentTetromino.template = currentTetromino.template.map(row => row.slice());
}

//check for the block position in reference to each other
function getBlockPos(){
    let blockPos = [];
    currentPiece.forEach((row, y) =>  //checks for the 'row'
        currentPiece[y].forEach((item, x) => //checks for each item in the row
            {if (currentPiece[y][x] !== 0){ //check if the block is valid
                blockPos.push({x: x, y: y});
            }}
        )
    );
    return blockPos;
}

//checks for the block position on the board (playerPos + blockPos)
function getPosOnBoard() {
    let blockPos = getBlockPos();
    blockPos = blockPos.map( block => { //add the player pos to the block pos
        return {
            x: block.x + playerPos.x, 
            y: block.y + playerPos.y
        };
    });
    return blockPos;
}

//add the position to the board
function addPosToBoard() {
    let blockPos = getPosOnBoard();
    blockPos.forEach(block => { //change the matching board pos to the colour code
        board[block.y][block.x] = currentTetromino.colourCode;
    });
}


//find how the current piece looks like
function findCurrentPiece() {
    currentPiece = [];
    currentTetromino.template.forEach(
        x => {
            if (! x.every(i => i === 0)) {
                currentPiece.push(x);
            }
        }
    );
}

//check if there are any pieces under
function blockUnder() {
    let blockPos = getPosOnBoard();
     return blockPos.some( block =>  //there is a piece underneath at least one of the squares 
        (board[block.y + 1][block.x] !== 0) ? true : false
    );
}

//checking the space underneath the block
function collide() {
    collision = false;
    if (playerPos.y + 1 + currentPiece.length > boardHeight || blockUnder()) {
        collision = true;
    } 
    return collision;
}

function reset() {
    if (collide()) {
        
        addPosToBoard(); //first add the pos to the board
        clearLine(); //clear the existing filled lines
        getNewTetromino(); //then get a new piece
        allowHold = true;
        speedUp();
        Object.assign(playerPos, playerDefaultPos); //reset pos to default
        
    }
}


//actually dropping the block
function drop() {
    if (! collide()) {
        playerPos.y++;
    }

} 

//set the drop interval (1 second)
function setDropInterval() {
    if (dropIntervalId === undefined) {
        dropIntervalId = setInterval(drop, speed);
    }
}



//reset the board
function clearBoard() {
    context.clearRect(0, 0, canvas.width, canvas.height);
}



//draw the currentTetromino
function drawTetromino() {
    let blockPos = getBlockPos();
    context.fillStyle = currentTetromino.colour;
    blockPos.forEach( block =>
        {context.fillRect(block.x + playerPos.x, block.y + playerPos.y, 1, 1)}
    )
}

//draw the pieces that are not moving
function drawStaticPieces() {
    board.forEach(
        (row, y) => board[y].forEach(
            (item, x) => {
                if (board[y][x] !== 0) {
                    context.fillStyle = colours[board[y][x] - 1];
                    context.fillRect(x, y, 1, 1);
                }
            }
        )
    );
}

//check to make sure that no blocks are on the left/right side
function noBlockOn(side) {
    let blockPos = getPosOnBoard();
    let sideValue = 0;
    switch (side) {
        case "left":
            sideValue = -1;
            break;
        case "right":
            sideValue = 1;
            break;
    }

    let yesBlock =  blockPos.some( block => 
        (board[block.y][block.x + sideValue] !== 0) ? true : false
    )
    return ! yesBlock;
}

//transpose
function transpose(pieceLayout) {
    for (y in pieceLayout) {
        for (x in pieceLayout[y]) {
            if (x <= y) { //only transpose half of it otherwise it'll go back to the original
                [pieceLayout[x][y], pieceLayout[y][x]] 
                = 
                [pieceLayout[y][x], pieceLayout[x][y]]
            }
        }
    }
    return pieceLayout;
}

//rotation
function rotate(direction) {
   
    if (direction === "right") {
        currentTetromino.template = transpose(currentTetromino.template);
    }

    currentTetromino.template = currentTetromino.template.map(row => row.reverse());

    if (direction === "left") {
        currentTetromino.template = transpose(currentTetromino.template);
    }

    removeRotateBug();    
}

function removeRotateBug() {
    let moveBy = 1;
    while (collide()) {
        playerPos.x += moveBy;
        moveBy = -(moveBy + (moveBy > 0 ? 1 : -1));
    }

}

function overLap() {
    let overlap = false;
    let blockPos = getPosOnBoard();
    blockPos.forEach(block => {
        if (board[block.y][block.x] === false) {
            overlap = true;
        } else if (board[block.y][block.x] === false) {
            overlap = true;
        }
    });
}


//movement
function moveLeft() {
    if (noBlockOn("left")) {
        playerPos.x -= 1
    }
}

function moveRight() {
    if (noBlockOn("right")) {
        playerPos.x += 1;
    }
}

function hardDrop() {
    while (! collide()) {
        playerPos.y++;
    }
}

//hold
function hold() {
    [holdTetromino, currentTetromino] = [currentTetromino, holdTetromino];

    Object.assign(holdTetromino, holdTetromino);
    holdTetromino.template = holdTetromino.template.map(row => row.slice());

    Object.assign(currentTetromino, currentTetromino);
    currentTetromino.template = currentTetromino.template.map(row => row.slice());

    if (! currentTetromino.template.find(row => row.find(item => item > 0))) { //if the tetromino is empty
        getNewTetromino();
    }

    Object.assign(playerPos, playerDefaultPos);
}

function drawHoldTetromino() {
    contextHold.clearRect(0, 0, 4, 4);
    contextHold.fillStyle = holdTetromino.colour;
    holdTetromino.template.forEach((row, y) => holdTetromino.template[y].forEach(
        (item, x) => {
            if (holdTetromino.template[y][x] !== 0) {
                contextHold.fillRect(x, y, 1, 1);
            }
        }
    ));
}

//detecting key pressed event
function keyboardEvents() {
    document.onkeydown = function (event) {
        switch (event.keyCode) {
            case 37: //left arrow
                moveLeft();
                break;
            case 39: //right arrow
                moveRight();
                break;
            case 40: //down arrow
                drop();
                break;
            case 38: //up arrow
                rotate("right");
                break;
            case 90: //z
                rotate("left");
                break;
            case 32: //space bar
                hardDrop();
                break;
            case 67: //c
                if (allowHold) {
                    hold();
                    allowHold = false;
                }
                break;
        }
    }
}

function clearLine() {
    for (y in board) {
        if (board[y].every(x => x !== 0)) {
            let x = board.splice(y, 1);
            board.unshift(new Array(10).fill(0));
            score += 10;
            updateScore(score);
        }
    }
}


function updateScore(score) {
    document.getElementById("scorePoints").innerHTML = score;
}

function checkGameOver() {
    if (board[0][3] !== 0 || board[0][4] !== 0) {
        start();
    }
}

function speedUp() {
    clearInterval(dropIntervalId);
    dropIntervalId = undefined;
    if (speed > 100) {
        speed -= 2;
    }
}


function update() {   
    clearBoard();

    drawStaticPieces();
    findCurrentPiece();
    drawTetromino();
    drawHoldTetromino();

    keyboardEvents();
    setDropInterval(); //and also dropping the blocks
    reset();
    checkGameOver();
    animationId = requestAnimationFrame(update);
}
