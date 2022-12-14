
const   player = document.querySelector('.headname'),
        prevBtn = document.querySelector('.prev'),
        nextBtn = document.querySelector('.next'),
        playBtn = document.querySelector('.play'),
        audio = document.querySelector('.audio'),
        progresscontainer = document.querySelector('.progress_container'),
        progress = document.querySelector('.progress'),
        volumecontainer = document.querySelector('.volume_container'),
        volume = document.querySelector('.volumed'),
        volumeBtn = document.querySelector('.volume_btn'),
        title = document.querySelector('.song'),
        volumeSrc = document.querySelector('.volume_src'),
        check = document.querySelector('.check'),
        progresss = document.querySelector('.progresss'),
        volumee = document.querySelector('.volumedd'),
        maxtimesong = document.querySelector('.max_time'),
        imgSrc = document.querySelector('.play_src')
            const timerss = document.getElementById("secondss");
            const minutes = document.getElementById("minutes");
            let isPlay = false;

const songs = ['Монеточка - Gachий Раз REMAKE ♂', 'Серёга - Черный бумер', 'Face - В новых адиках Gachi Remix',  'Gachi - Парикмахер дядя Толик (right version)', 'GachiBasser - FACE - Рэйман (Right version)', 'Gachimuchi - Angry Boys', 'Gachimuchi - Barbie Van', 'Kavinsky Nightcall (Right version)',      ]

let songIndex = 0

function loadSong(song) {
    title.innerHTML = song
    audio.src = `source/audio/${song}.mp3`
}

loadSong(songs[songIndex])

function playSong() {
    isPlay = true;
    audio.play()
    imgSrc.src = './source/images/newpause1.png'
} 

function pauseSong() {
    isPlay = false;
    audio.pause()
    imgSrc.src = './source/images/newstart1.png'

}

playBtn.addEventListener('click', () => {
    
    if (isPlay) {
        pauseSong() 
    } else 
    {
        playSong()
    }
})

function volumeOn() {
    player.classList.add('vlOnn')
    audio.volume = 0;
    volumeSrc.src = '/source/images/soundoff.png'
  volumee.value = 0;
} 

function volumeOff() {
    player.classList.remove('vlOnn')
    audio.volume = 1;
    volumeSrc.src = './source/images/soundon.png'
    volumee.value = 50;
}

volumeBtn.addEventListener('click', () => {
    const isvolume = player.classList.contains('vlOnn')
    if (isvolume) {
        volumeOff()
    } else 
    {
        volumeOn()
    }
})

function next() {
    songIndex++;
    if(songIndex > songs.length - 1) {
        songIndex = 0;
    }
    loadSong(songs[songIndex])
    playSong()
}

function prev() {
    songIndex--
    if(songIndex < 0) {
        songIndex = songs.length - 1;
    }

    loadSong(songs[songIndex])
    playSong()
}

nextBtn.addEventListener('click', () => {
    next()
})

prevBtn.addEventListener('click', () => {
    prev()
})

function updateProgress(e) {
    const {duration, currentTime} = e.srcElement
    const progressPercent = ( currentTime / duration ) * 100
    const MaxTimeofsong = document.getElementById("maxtime");
    const roundtime = duration
    const nf = (roundtime) / 60 || 00
    const n1 = Math.floor(nf) || 00
    const maxminutes = document.getElementById("maxtime");
    const result = nf.toString().split(',') || 00
    const nf1 = Number(nf.toFixed(2).toString().split('.')[1]) || 00;
     const nf2 = (nf1 * 60) / 100 || 00
    const secondsmax = nf2.toFixed(0)
    if (nf2.toFixed(0) == 4 ) {
    maxminutes.innerHTML = "0" + n1  + ":" + nf2.toFixed(0) + '0'; 
    } else {
        maxminutes.innerHTML = "0" + n1 + ":" + secondsmax || 00   ; 
    }
    progresss.value = progressPercent
    const current = audio.currentTime

    if (current.toFixed(0) < 10) {
        
    timerss.innerHTML = '0' + current.toFixed(0)
        minutes.innerHTML = '00';
    }
    else if (current.toFixed(0) < 60) {
        timerss.innerHTML = current.toFixed(0)
        minutes.innerHTML = '00';
    }
    else if (current.toFixed(0) < 70) {
        minutes.innerHTML = '01';
        timerss.innerHTML = '0' + (current.toFixed(0)-60)
    }
    else if (current.toFixed(0) < 120) {
    timerss.innerHTML = (current.toFixed(0)-60)
    minutes.innerHTML = '02';
    }
    else if (current.toFixed(0) < 130) {
        minutes.innerHTML = '02';
        timerss.innerHTML = '0' + (current.toFixed(0)-120)
    }  else if (current.toFixed(0) < 180) {
        
        minutes.innerHTML = '02';
        timerss.innerHTML =  + (current.toFixed(0)-120)
    }
    else if (current.toFixed(0) < 190) {
        minutes.innerHTML = '03';
        timerss.innerHTML = '0' + (current.toFixed(0)-180)
    }
    else if (current.toFixed(0) < 240) {
        minutes.innerHTML = '03';
        timerss.innerHTML =  (current.toFixed(0)-180)
    }
    else if (current.toFixed(0) < 250) {
        minutes.innerHTML = '04';
        timerss.innerHTML = '0'+ (current.toFixed(0)-240)
    }
    else if (current.toFixed(0) < 290) {
        minutes.innerHTML = '04';
        timerss.innerHTML =  (current.toFixed(0)-240)
    }
    else if (current.toFixed(0) < 300) {
        minutes.innerHTML = '05';
        timerss.innerHTML =  (current.toFixed(0)-290)
    }
}

audio.addEventListener('timeupdate', updateProgress)

function setprogress(e) {
    const width = 100;
    const clickX = progresss.value
    const duration = audio.duration
    audio.currentTime = (clickX / width) * duration
}

progresscontainer.addEventListener('click', setprogress)

audio.addEventListener('ended', next)



function setprogressd(e) {
    volumeSrc.src = './source/images/soundon.png'
    audio.volume = volumee.value / 100;

}

volumecontainer.addEventListener('click', setprogressd)

function checkmaxtime() {
    const {duration, currentTime} = e.srcElement  || 0
    const MaxTimeofsong = document.getElementById("maxtime");
    const roundtime = duration
    const nf = (roundtime) / 60
    const n1 = Math.floor(nf)
    const maxminutes = document.getElementById("maxtime");
    const nf1 = Number(nf.toFixed(2).toString().split('.')[1]) || 0
     const nf2 = (nf1 * 60) / 100  || 0
     if (nf2 == 42 ) {
    maxminutes.innerHTML = "0" + n1 || 0 + ":" + nf2.toFixed(0) || 0 + '0'; 
     } else {
        maxminutes.innerHTML = "0" +  + ":" + nf2.toFixed(0) || 0; 
     }
}


