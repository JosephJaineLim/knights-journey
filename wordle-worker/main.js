import './style.css';
import {dictionary} from './dictionary';

window.addEventListener('load',() => {
    for(let i = 1; i <= 30; i++)
    {
        document.getElementById(i).style.backgroundColor = 'rgb(58, 58, 60)';
    }

    for(let i = 0; i<5; i++){
        document.getElementById(`${i + 1}`).innerHTML = `${word[0].charAt(i)}`;
    }

    document.getElementById('wordle').innerText = wordle;
})

let tempDictionary = dictionary;
let wordle = tempDictionary[Math.floor(Math.random() * tempDictionary.length - 1)];

let word = new Array(6);
word.fill('');

word[0] = tempDictionary[Math.floor(Math.random() * tempDictionary.length - 1)];


let colors = ['rgb(83, 141, 78)','rgb(181, 159, 59)','rgb(58, 58, 60)'];
let colorCounter = 0; 


const colorChange = (a) => {
    if(colorCounter > 2){
        colorCounter = 0;
    }
    document.getElementById(a).style.backgroundColor = colors[colorCounter];
    colorCounter++;
}

document.addEventListener('keydown',(e)=>{
    if(e.key !== ' ') return;
    

    if(word[0] !== '' && word[1] === '' && word[2] === '' && word[3] === '' && word[4] === '' && word[5] === '')
    {
        myFunc(1,0)
    }
    else if(word[0] !== '' && word[1] !== '' && word[2] === '' && word[3] === '' && word[4] === '' && word[5] === ''){
        myFunc(6,1)
    }
    else if(word[0] !== '' && word[1] !== '' && word[2] !== '' && word[3] === '' && word[4] === '' && word[5] === '')
    {
        myFunc(11,2);
    }
    else if(word[0] !== '' && word[1] !== '' && word[2] !== '' && word[3] !== '' && word[4] === '' && word[5] === '')
    {
        myFunc(16,3)
    }
    else if(word[0] !== '' && word[1] !== '' && word[2] !== '' && word[3] !== '' && word[4] !== '' && word[5] === ''){
        myFunc(21,4)
    }
})

const myFunc = (a,b) => {
    console.log('check');
    let guess = [];
    let green = [];
    let yellow = [];

    for(let i = a; i<=(a+4) ;i++)
        {
            guess.push(document.getElementById(i).style.backgroundColor);
        }

        
        //Win
        if(JSON.stringify(guess) === JSON.stringify(new Array(5).fill('rgb(83, 141, 78)')))
        {
            console.log('win');
        }

        
        tempDictionary.slice(tempDictionary.indexOf(word[b]),1);

        guess.forEach((e, i) => {
            if(e === 'rgb(83, 141, 78)')
            {
                tempDictionary.forEach(ele => {
                    if(word[b].charAt(i) === ele.charAt(i))
                    {
                        green.push(ele);
                    }
                })
            }
            if (e === 'rgb(181, 159, 59)')
            {
                tempDictionary.forEach(ele => {
                    if(ele.includes(word[b].charAt(i)))
                    {
                        yellow.push(ele);
                    }
                })
            }
            if (e === 'rgb(58, 58, 60)'){
                tempDictionary.forEach(ele => {
                    if(ele.includes(word[b].charAt(i)))
                    {
                        tempDictionary.splice(tempDictionary.indexOf(ele),1)
                    }
                })
            }
        })

        //console.log(green)
        //console.log(yellow)
        //console.log(tempDictionary)

        if(JSON.stringify(green) != '[]' || JSON.stringify(yellow) != '[]'){
            
            let temp = [...new Set([green,yellow].flat(1))].map((el,ind) => {
                let counter = 0;
    
                [green,yellow].flat(1).forEach(ele => {
                    if (el === ele){
                        counter++
                    }
                })
                return {'word': el,'num': counter}
            }).sort((a,b) => b.num - a.num);
            temp = temp.filter(el => el.num === temp[0].num);

            console.log(temp);
            word[b+1] = temp[Math.floor(Math.random() * temp.length)].word;
        }
        else{
            word[b+1] = tempDictionary[Math.floor(Math.random() * tempDictionary.length)];
        }

        for(let i = 0; i<5; i++){
            document.getElementById(`${i + a + 5}`).innerHTML = `${word[b+1].charAt(i)}`;
        }
}














if(true)
{
    document.getElementById('1').addEventListener('click',(t)=>colorChange(t.target.id))
    document.getElementById('2').addEventListener('click',(t)=>colorChange(t.target.id))
    document.getElementById('3').addEventListener('click',(t)=>colorChange(t.target.id))
    document.getElementById('4').addEventListener('click',(t)=>colorChange(t.target.id))
    document.getElementById('5').addEventListener('click',(t)=>colorChange(t.target.id))
}
if(true)
{
    document.getElementById('6').addEventListener('click',(t)=>colorChange(t.target.id))
    document.getElementById('7').addEventListener('click',(t)=>colorChange(t.target.id))
    document.getElementById('8').addEventListener('click',(t)=>colorChange(t.target.id))
    document.getElementById('9').addEventListener('click',(t)=>colorChange(t.target.id))
    document.getElementById('10').addEventListener('click',(t)=>colorChange(t.target.id))
}
if(true)
{
    document.getElementById('11').addEventListener('click',(t)=>colorChange(t.target.id))
    document.getElementById('12').addEventListener('click',(t)=>colorChange(t.target.id))
    document.getElementById('13').addEventListener('click',(t)=>colorChange(t.target.id))
    document.getElementById('14').addEventListener('click',(t)=>colorChange(t.target.id))
    document.getElementById('15').addEventListener('click',(t)=>colorChange(t.target.id))
}
if(true)
{
    document.getElementById('16').addEventListener('click',(t)=>colorChange(t.target.id))
    document.getElementById('17').addEventListener('click',(t)=>colorChange(t.target.id))
    document.getElementById('18').addEventListener('click',(t)=>colorChange(t.target.id))
    document.getElementById('19').addEventListener('click',(t)=>colorChange(t.target.id))
    document.getElementById('20').addEventListener('click',(t)=>colorChange(t.target.id))
}
if(true)
{
    document.getElementById('21').addEventListener('click',(t)=>colorChange(t.target.id))
    document.getElementById('22').addEventListener('click',(t)=>colorChange(t.target.id))
    document.getElementById('23').addEventListener('click',(t)=>colorChange(t.target.id))
    document.getElementById('24').addEventListener('click',(t)=>colorChange(t.target.id))
    document.getElementById('25').addEventListener('click',(t)=>colorChange(t.target.id))
}
if(true)
{
    document.getElementById('26').addEventListener('click',(t)=>colorChange(t.target.id))
    document.getElementById('27').addEventListener('click',(t)=>colorChange(t.target.id))
    document.getElementById('28').addEventListener('click',(t)=>colorChange(t.target.id))
    document.getElementById('29').addEventListener('click',(t)=>colorChange(t.target.id))
    document.getElementById('30').addEventListener('click',(t)=>colorChange(t.target.id))
}

