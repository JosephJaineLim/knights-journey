let level = 1;
let simon = [];
let player = [];

const simonFunc = () => {
    
    if(document.getElementById(`player-button`) !== null) document.getElementById(`player-button`).style.display= 'none';
    simon = [...new Array(level)].fill('').map(el => Math.floor(Math.random() * 3) + 1);

    for(let i = 1; i <= simon.length; i++)
    {
        setTimeout(() => {document.getElementById(`box-${simon[i-1]}`).style.background = 'black'},1000 * i);
        setTimeout(() => {document.getElementById(`box-${simon[i-1]}`).style.background = 'none'},1000 * i + 500);

        
    }
    setTimeout(() => {document.getElementById(`player-button`).style.display= 'flex'},1000 * simon.length + 1000);
    
    document.getElementById('func-button').innerHTML = `<button type="button">level ${level}</button>`;
    level++;
}

const playerFunc = (e) => {
    player.push(Number(e.id));
    let isCorrect = true;
    player.forEach((el,ind) => {
        if(el !== simon[ind])
        {
            isCorrect = false;
        }
    })

    if(isCorrect && player.length !== simon.length)
    {
        return;
    }

    if(JSON.stringify(player) === JSON.stringify(simon)) {
        console.log("Correct");
        player = [];
        simonFunc();
    }
    else{
        document.getElementById('func-button').innerHTML = `<button type="button" onclick="restart()">restart</button>`
    }
}

const restart = () => {
    player = [];
    level = 1;
    simonFunc();
}