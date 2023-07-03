let chessBoard = [...new Array(8)].map(el => [...new Array(8)].fill(false));

const initialPosistion = "00";
let position = initialPosistion;
chessBoard[Number(position.charAt(0))][Number(position.charAt(1))] = true;

const chess = () => {
    let squares = '';
    let k = Number(position.charAt(0));
    let l =Number(position.charAt(1));
    isMovePossible = 0;

    //Arrange Chessboard
    for(let i = 0; i < 8; i++){
        for(let j = 0; j < 8; j++){

            let icon = '';
            if(k === i && l === j){
                icon = `<i class="fa-solid fa-chess-knight" style="font-size: 2.5rem"></i>`;
            }
            
            let color = '';
            if(chessBoard[i][j])
            {
                color = `background-color: skyblue`;
            }

            let nextMove = nextMoveChecker(i,j,k,l);
            if(nextMove !== '') isMovePossible++;
            
           squares += `<div class='square' id='${String(i) + String(j)}' style='${color}' onClick='changeSquare(this)'> ${icon + nextMove} </div>` 
        }
    }

    //DOM
    if(isMovePossible === 0) document.getElementById('chess__gameover').innerHTML = `<h1>Game Over!</h1>`;
    document.getElementById('chess-board').innerHTML = squares;
}

const changeSquare = (e) => {
    let i = Number(e.id.split('')[0]); // 2
    let j = Number(e.id.split('')[1]); // 1

    if(chessBoard[i][j]) return;

    
    let k = Number(position.charAt(0)); //0
    let l = Number(position.charAt(1)); //0
 

    if(k + 2 === i && l + 1 === j)
    {
        chessBoard[i][j] = true;  
        position = String(i) + String(j);
    }
    else if(k + 2 === i && l - 1 === j)
    {
        chessBoard[i][j] = true;  
        position = String(i) + String(j);
    }
    else if(k - 2 === i && l + 1 === j)
    {
        chessBoard[i][j] = true;  
        position = String(i) + String(j);
    }
    else if(k - 2 === i && l - 1 === j)
    {
        chessBoard[i][j] = true;  
        position = String(i) + String(j);
    }
    else if(k + 1 === i && l + 2 === j)
    {
        chessBoard[i][j] = true;  
        position = String(i) + String(j);
    }
    else if(k + 1 === i && l - 2 === j)
    {
        chessBoard[i][j] = true;  
        position = String(i) + String(j);
    }
    else if(k - 1 === i && l + 2 === j)
    {
        chessBoard[i][j] = true;  
        position = String(i) + String(j);
    }
    else if(k - 1 === i && l - 2 === j)
    {
        chessBoard[i][j] = true;  
        position = String(i) + String(j);
    }
    chess();
    
}

const restart = () => {
    position = initialPosistion;
    moveCounter = 0;
    chessBoard = [...new Array(8)].map(el => [...new Array(8)].fill(false));
    let i = Number(position.charAt(0));
    let k = Number(position.charAt(1));
    chessBoard[i][k] = true;

    document.getElementById('chess__gameover').innerHTML = ``;
    chess();
}

const nextMoveChecker = (i,j,k,l) => {
    let nextMove = '';

    if(k + 2 < 8 && l + 1 < 8 && chessBoard[k+2][l+1] === false && k + 2 === i && l + 1 === j)
    {
        nextMove = `<i class="fa-regular fa-circle" style="font-size: 10px"></i>`;
    }
    else if(k + 2 < 8 && l - 1 >= 0 && chessBoard[k+2][l-1] === false && k + 2 === i && l - 1 === j)
    {
        nextMove = `<i class="fa-regular fa-circle" style="font-size: 10px"></i>`;
    }
    else if(k - 2 >= 0 && l + 1 < 8 && chessBoard[k-2][l+1] === false && k - 2 === i && l + 1 === j)
    {
        nextMove = `<i class="fa-regular fa-circle" style="font-size: 10px"></i>`;
    }
    else if(k - 2 >= 0 && l - 1 >= 0 && chessBoard[k-2][l-1] === false && k - 2 === i && l - 1 === j)
    {
        nextMove = `<i class="fa-regular fa-circle" style="font-size: 10px"></i>`;
    }
    else if(k - 1 >= 0 && l - 2 >= 0 && chessBoard[k-1][l-2] === false && k - 1 === i && l - 2 === j)
    {
        nextMove = `<i class="fa-regular fa-circle" style="font-size: 10px"></i>`;
    }
    else if(k - 1 >= 0 && l + 2 < 8 && chessBoard[k-1][l+2] === false && k - 1 === i && l + 2 === j)
    {
        nextMove = `<i class="fa-regular fa-circle" style="font-size: 10px"></i>`;
    }
    else if(k + 1 < 8 && l - 2 >= 0 && chessBoard[k+1][l-2] === false && k + 1 === i && l - 2 === j)
    {
        nextMove = `<i class="fa-regular fa-circle" style="font-size: 10px"></i>`;
    }
    else if(k + 1 < 8 && l + 2 < 8 && chessBoard[k+1][l+2] === false && k + 1 === i && l + 2 === j)
    {
        nextMove = `<i class="fa-regular fa-circle" style="font-size: 10px"></i>`;
    }

    return nextMove;        
}