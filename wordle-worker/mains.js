
import './style.css';
import {dictionary} from './dictionary';

window.addEventListener('load',() => {
    for(let i = 1; i <= 30; i++)
    {
        document.getElementById(i).style.backgroundColor = 'rgb(58, 58, 60)';
    }

    for(let i = 0; i<5; i++){
        document.getElementById(`${i + 1}`).innerHTML = `${word1.charAt(i)}`;
    }

    document.getElementById('wordle').innerText = wordle;
})
//document.querySelector('#app').innerHTML = ``;


let wordle = dictionary[Math.floor(Math.random() * dictionary.length - 1)];

let word1 = dictionary[Math.floor(Math.random() * dictionary.length - 1)];
let word2 = '';
let word3 = '';
let word4 = '';
let word5 = '';
let word6 = '';


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
    let guess = [];
    let green = [];
    let yellow = [];
    
    
    //////////////////////////////////////////////////
    //////////////////////////////////////////////////
    //////////////////////////////////////////////////
    if(word2 === '' && word3 === '' && word4 === '' && word5 === '' && word6 === '')
    {
        
        for(let i = 1; i<=5 ;i++)
        {
            guess.push(document.getElementById(i).style.backgroundColor);
        }

        
        //Win
        if(JSON.stringify(guess) === JSON.stringify(new Array(5).fill('rgb(83, 141, 78)')))
        {
            console.log('win');
        }

        
        dictionary.slice(dictionary.indexOf(word1),1);

        guess.forEach((e, i) => {
            if(e === 'rgb(83, 141, 78)')
            {
                dictionary.forEach(ele => {
                    if(word1.charAt(i) === ele.charAt(i))
                    {
                        green.push(ele);
                    }
                })
            }
            else if (e === 'rgb(181, 159, 59)')
            {
                dictionary.forEach(ele => {
                    if(ele.includes(word1.charAt(i)))
                    {
                        yellow.push(ele);
                    }
                })
            }
        })

        console.log([...new Set([green,yellow].flat(1))].map((el,ind) => {
            let counter = 0;

            [green,yellow].flat(1).forEach(ele => {
                if (el === ele){
                    counter++
                }
            })
            return {'word': el,'num': counter}
        }).sort((a,b) => b.num - a.num))


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

            word2 = temp[Math.floor(Math.random() * temp.length - 1)].word;
        }
        else{
            word2 = dictionary[Math.floor(Math.random() * dictionary.length - 1)];
        }

        for(let i = 0; i<5; i++){
            document.getElementById(`${i + 6}`).innerHTML = `${word2.charAt(i)}`;
        }
    }
    //////////////////////////////////////////////////
    //////////////////////////////////////////////////
    //////////////////////////////////////////////////
    else if(word1 !== '' && word2 !== '' && word3 === '' && word4 === '' && word5 === '' && word6 === '')
    {
        for(let i = 6; i<=10 ;i++)
        {
            guess.push(document.getElementById(i).style.backgroundColor);
        }

        dictionary.slice(dictionary.indexOf(word2),1);

        guess.forEach((e, i) => {
            if(e === 'rgb(83, 141, 78)')
            {
                dictionary.forEach(ele => {
                    if(word2.charAt(i) === ele.charAt(i))
                    {
                        green.push(ele);
                    }
                })
            }
            else if (e === 'rgb(181, 159, 59)')
            {
                dictionary.forEach(ele => {
                    if(ele.includes(word2.charAt(i)))
                    {
                        yellow.push(ele);
                    }
                })
            }
        })

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
            word3 = temp.filter(el => el.num === temp[0].num)[Math.floor(Math.random() * temp.filter(el => el.num === temp[0].num).length - 1)].word;
        }
        else{
            word3 = dictionary[Math.floor(Math.random() * dictionary.length - 1)];
        }

        for(let i = 0; i<5; i++){
            document.getElementById(`${i + 11}`).innerHTML = `${word3.charAt(i)}`;
        }
    }

    //////////////////////////////////////////////////
    //////////////////////////////////////////////////
    //////////////////////////////////////////////////
    else if(word1 !== '' && word2 !== '' && word3 !== '' && word4 === '' && word5 === '' && word6 === '')
    {
        for(let i = 11; i<=15 ;i++)
        {
            guess.push(document.getElementById(i).style.backgroundColor);
        }

        dictionary.slice(dictionary.indexOf(word3),1);

        guess.forEach((e, i) => {
            if(e === 'rgb(83, 141, 78)')
            {
                dictionary.forEach(ele => {
                    if(word3.charAt(i) === ele.charAt(i))
                    {
                        green.push(ele);
                    }
                })
            }
            else if (e === 'rgb(181, 159, 59)')
            {
                dictionary.forEach(ele => {
                    if(ele.includes(word3.charAt(i)))
                    {
                        yellow.push(ele);
                    }
                })
            }
        })

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
            word4 = temp.filter(el => el.num === temp[0].num)[Math.floor(Math.random() * temp.filter(el => el.num === temp[0].num).length - 1)].word;
        }
        else{
            word4 = dictionary[Math.floor(Math.random() * dictionary.length - 1)];
        }

        for(let i = 0; i<5; i++){
            document.getElementById(`${i + 16}`).innerHTML = `${word4.charAt(i)}`;
        }
    }

    //////////////////////////////////////////////////
    //////////////////////////////////////////////////
    //////////////////////////////////////////////////
    else if(word1 !== '' && word2 !== '' && word3 !== '' && word4 !== '' && word5 === '' && word6 === '')
    {
        for(let i = 16; i<=20 ;i++)
        {
            guess.push(document.getElementById(i).style.backgroundColor);
        }

        dictionary.slice(dictionary.indexOf(word4),1);

        guess.forEach((e, i) => {
            if(e === 'rgb(83, 141, 78)')
            {
                dictionary.forEach(ele => {
                    if(word4.charAt(i) === ele.charAt(i))
                    {
                        green.push(ele);
                    }
                })
            }
            else if (e === 'rgb(181, 159, 59)')
            {
                dictionary.forEach(ele => {
                    if(ele.includes(word4.charAt(i)))
                    {
                        yellow.push(ele);
                    }
                })
            }
        })

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
            word5 = temp.filter(el => el.num === temp[0].num)[Math.floor(Math.random() * temp.filter(el => el.num === temp[0].num).length - 1)].word;
        }
        else{
            word5 = dictionary[Math.floor(Math.random() * dictionary.length - 1)];
        }

        for(let i = 0; i<5; i++){
            document.getElementById(`${i + 21}`).innerHTML = `${word5.charAt(i)}`;
        }
    }

    //////////////////////////////////////////////////
    //////////////////////////////////////////////////
    //////////////////////////////////////////////////
    else if(word1 !== '' && word2 !== '' && word3 !== '' && word4 !== '' && word5 !== '' && word6 === '')
    {
        for(let i = 21; i<=26 ;i++)
        {
            guess.push(document.getElementById(i).style.backgroundColor);
        }

        dictionary.slice(dictionary.indexOf(word5),1);

        guess.forEach((e, i) => {
            if(e === 'rgb(83, 141, 78)')
            {
                dictionary.forEach(ele => {
                    if(word5.charAt(i) === ele.charAt(i))
                    {
                        green.push(ele);
                    }
                })
            }
            else if (e === 'rgb(181, 159, 59)')
            {
                dictionary.forEach(ele => {
                    if(ele.includes(word5.charAt(i)))
                    {
                        yellow.push(ele);
                    }
                })
            }
        })

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
            word6 = temp.filter(el => el.num === temp[0].num)[Math.floor(Math.random() * temp.filter(el => el.num === temp[0].num).length - 1)].word;
        }
        else{
            word6 = dictionary[Math.floor(Math.random() * dictionary.length - 1)];
        }

        for(let i = 0; i<5; i++){
            document.getElementById(`${i + 26}`).innerHTML = `${word6.charAt(i)}`;
        }
    }
})


/* Logic 

guess.forEach((e, i) => {
    if(e === 'green')
    {
        dictionary.forEach(ele => 
            {
                if(word1.charAt(i) === ele.charAt(i))
                {
                    green.push(ele);
                }
            })
    }
    else if (e === 'yellow')
    {
        dictionary.forEach(ele => 
            {
                if(ele.includes(word1.charAt(i)))
                {
                    yellow.push(ele);
                }
            })
    }
})
*/ 

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

