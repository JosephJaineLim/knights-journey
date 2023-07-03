let initialPos = 57;
let position = initialPos;
let moveCounter = 0;
const board = [...new Array(64)].map(e => false);
board[position] = true;



const chess = () => {
    let squares = '';
    
    //Counter
    document.getElementById('chess-info').innerHTML = `<h1> Moves: ` + moveCounter + `</h1> <button onclick="restart()">restart</button>`;

    for(let i = 0; i < board.length; i++){
        //Color condition
        let styleColor;
        if(board[i]) styleColor = 'background-color: skyblue';
        
        //Array checker + Knight Logo
        let knightIcon = '';
        if(position == i){
            knightIcon = `<i class="fa-solid fa-chess-knight" style="font-size: 2.5rem"></i>`;
        }

        //Next move checker
        let movePlaceHolder = '';
        if(Number(position + 6) === i && board[Number(position + 6)] == false || Number(position - 6)  === i && board[Number(position - 6)] == false||Number(position + 10) === i && board[Number(position + 10)] == false || Number(position - 10) === i && board[Number(position - 10)] == false ||Number(position + 15) === i && board[Number(position + 15)] == false || Number(position - 15) === i && board[Number(position -15 )] == false||Number(position + 17) === i && board[Number(position + 17)] == false|| Number(position - 17) === i && board[Number(position - 17)] == false){
            movePlaceHolder = '<i class="fa-regular fa-circle" style="font-size: 10px"></i>';
        }

        //square div
        squares += `<div class='square' id='`+ i +`'style='` + styleColor + `' onclick='change(this)'>` + knightIcon + movePlaceHolder +` </div>`;
    }

    //GameOver checker
    if (board[position + 6] !== false && board[position - 6] !== false && board[position + 10] !== false && board[position - 10] !== false && board[position + 15] !== false && board[position - 15] !== false && board[position + 17] !== false && board[position - 17] !== false){
        document.getElementById('chess__gameover').innerHTML += `<h1>Game Over</h1>`;
    }

    document.getElementById('chess-board').innerHTML = squares;
}

const change = (ele) => {
    if(board[ele.id]) 
    {
        return;
    }

    if(Number(position + 6) === Number(ele.id) || Number(position - 6) === Number(ele.id) ||Number(position + 10) === Number(ele.id) || Number(position - 10) === Number(ele.id) ||Number(position + 15) === Number(ele.id) || Number(position - 15) === Number(ele.id) ||Number(position + 17) === Number(ele.id) || Number(position - 17) === Number(ele.id))
    {
        position = Number(ele.id);
        board[ele.id] = true;
        moveCounter++;
        chess();
    }
}



const restart = () => {
    position = initialPos;
    moveCounter = 0;
    board.forEach((el,ind) => {
        if(el === true)
        {
            board[ind] = false;
        }
    })
    board[position] = true;
    document.getElementById('chess__gameover').innerHTML = "";
    chess();
}