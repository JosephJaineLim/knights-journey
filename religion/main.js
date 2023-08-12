const INFORMATIONS = [
    {
        time: '1700BC', 
        info: 'Greek myth of Icarus and Daedalus explores the desire to fly and the inherent dangers of it.'
    },
    {
        time: '1000BC', 
        info: 'Flying chariots called Vimanas are mentioned in Hindu mythology'
    },
    {
        time: '500 BC', 
        info: 'The Chinese start to use kites.'
    },
    {
        time: '400 BC', 
        info: 'Greek philosopher Archytas designs a steam-powered model pigeon, a pioneering concept for flight.'
    },
    {
        time: '875', 
        info: 'Abbas ibn Firnas, a Spanish-Muslim polymath, makes an early attempt at flight with wings and a glider.'
    },
    {
        time: '1480', 
        info: 'Leonardo da Vinci sketches designs for various flying machines, including ornithopters.'
    },
    {
        time: '1783', 
        info: 'Montgolfier brothers launch the first successful hot air balloon flight in France.'
    },
    {
        time: '1799', 
        info: 'Sir George Cayley, an English engineer, publishes his ideas on the principles of flight, laying the foundation for modern aerodynamics.'
    },
    {
        time:'1853',
        info:'Sir George Cayley builds and flies a glider that carries his coachman across a field.'
    },
    {
        time:'1871',
        info:'Alphonse Pénaud, a French aviation pioneer, designs and flies rubber-powered model aircraft.'
    },
    {
        time:'1891',
        info:'Otto Lilienthal makes successful glider flights, contributing important insights to aviation.'
    },
    {
        time:'1894',
        info:'Octave Chanute, an American engineer, publishes "Progress in Flying Machines," summarizing aviation developments and experiments.'
    },
    {
        time:'1903',
        info:'Wright brothers Orville and Wilbur achieve the first powered, controlled, and sustained flight in Kitty Hawk, North Carolina.'
    },
    {
        time:'1909',
        info:'Louis Blériot completes the first flight across the English Channel.'
    },
    {
        time:'1911',
        info:'Eugene Ely performs the first successful aircraft carrier takeoff and landing.'
    },
    {
        time:'1914',
        info:'World War I accelerates aviation technology with the development of military aircraft and aerial combat tactics.'
    },
    {
        time:'1927',
        info:'Charles Lindbergh completes the first solo non-stop transatlantic flight.'
    },
    {
        time:'1929',
        info:'Graf Zeppelin completes the first circumnavigation of the globe by airship.'
    },
    {
        time:'1932',
        info:'Amelia Earhart becomes the first woman to fly solo across the Atlantic Ocean.'
    },
    {
        time:'1939',
        info:'World War II further advances aviation technology, including jet propulsion and radar systems.'
    },
    {
        time:'1947',
        info:'Chuck Yeager breaks the sound barrier in the Bell X-1.'
    },
    {
        time:'1957',
        info:'The Soviet Union launches Sputnik 1, marking the beginning of the space age.'
    },
    {
        time:'1958',
        info:'NASA is established in the United States, heralding a new era of space exploration.'
    },
    {
        time:'1961',
        info:'Yuri Gagarin becomes the first human to orbit Earth aboard Vostok 1.'
    },
    {
        time:'1969',
        info:'Neil Armstrong and Buzz Aldrin walk on the Moon during the Apollo 11 mission.'
    },
    {
        time:'1970s',
        info:'The development of wide-body commercial jets, such as the Boeing 747, transforms air travel.'
    },
    {
        time:'1981',
        info:'Space Shuttle Columbia completes the first orbital flight of NASA Space Shuttle program.'
    },
    {
        time:'1986',
        info:'The Voyager 2 probe flies by Uranus, providing important insights into the outer planets.'
    },
    {
        time:'1990s',
        info:'Advancements in GPS technology improve navigation for aviation and aerospace.'
    },
    {
        time:'2004',
        info:'SpaceShipOne wins the Ansari X Prize for successful private suborbital spaceflight.'
    },
    {
        time:'2010s',
        info:'Commercial space companies like SpaceX and Blue Origin develop reusable rockets and make strides in space tourism.'
    },
    {
        time:'2020s',
        info:'Ongoing developments in aerospace technology aim for Mars exploration and beyond.'
    }
];


window.addEventListener('load', ()=>{
    let temp = 50;

    INFORMATIONS.forEach((el,i) => {
        document.getElementById('content').innerHTML += `
        <div style="top: ${temp}px; left: calc(50% - 5px);" class="timeline-dot"></div>

        <div style="top: calc(${temp}px - 50px); ${i % 2 == 0 ? 'left' : 'right'}: calc(50% + 50px);" class="frame" id="content-${temp}">
            <img src="./assets/photo${i + 1}.jpg" alt="img">
            <div class="frame-content">
                <h1>${el.time}</h1>
            </div>
            <div class="frame-footer">
                <p>${el.info}</p>
            </div>
        </div>
        `
        temp += 150;
    })
})


window.addEventListener('scroll', () => {
    let scrolledPixels = window.scrollY;

    for(let i = 50; i < 10000; i += 150)
    {
        if(scrolledPixels > i - 50){
        animation(i)
        }
    }
});

const animation = (a) => {
    document.getElementById(`content-${a}`).classList.add('appear-animation');
}