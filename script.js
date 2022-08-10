
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
        checkVl = document.querySelector('.checkVl'),
         
        maxtimesong = document.querySelector('.max_time'),
        imgSrc = document.querySelector('.play_src')
            var timerss = document.getElementById("secondss");
            var minutes = document.getElementById("minutes");

            if (volume.style.width = 0) {
                volumeOff()
            }

const songs = ['Монеточка - Gachий Раз REMAKE ♂', 'Серёга - Черный бумер', 'Face - В новых адиках Gachi Remix',  'Gachi - Парикмахер дядя Толик (right version)', 'GachiBasser - FACE - Рэйман (Right version)', 'Gachimuchi - Angry Boys', 'Gachimuchi - Barbie Van', 'Kavinsky Nightcall (Right version)',      ]

let songIndex = 0

function loadSong(song) {
    title.innerHTML = song
    audio.src = `source/audio/${song}.mp3`
}
loadSong(songs[songIndex])

function playSong() {
    check.classList.add('play')
    audio.play()
    imgSrc.src = './source/images/newpause1.png'
} 

function pauseSong() {
    check.classList.remove('play')
    audio.pause()
    imgSrc.src = './source/images/newstart1.png'

}

playBtn.addEventListener('click', () => {
    const isplay = check.classList.contains('play')
    if (isplay) {
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
  //  volume.removeAttribute('id');
  volume.style.width = "0px"
} 

function volumeOff() {
    player.classList.remove('vlOnn')
    audio.volume = 1;
   // volume.setAttribute('id', 'volume')
    volumeSrc.src = './source/images/soundon.png'
    volume.style.width = "150px"
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
    var MaxTimeofsong = document.getElementById("maxtime");
    const roundtime = duration
    var nf = (roundtime) / 60
    var n1 = Math.floor(nf)
    var maxminutes = document.getElementById("maxtime");
    const result = nf.toString().split(',')
    const nf1 = Number(nf.toFixed(2).toString().split('.')[1]);
    
     const nf2 = (nf1 * 60) / 100
     
     if (nf2 == 42 ) {
    maxminutes.innerHTML = "0" + n1 + ":" + nf2.toFixed(0) + '0'; 
     } else {
        maxminutes.innerHTML = "0" + n1 + ":" + nf2.toFixed(0); 
     }
    progress.style.width = `${progressPercent}%`
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
    const width = this.clientWidth
    const clickX = e.offsetX 
    const duration = audio.duration
    audio.currentTime = (clickX / width) * duration

}

progresscontainer.addEventListener('click', setprogress)

audio.addEventListener('ended', next)



function setprogressd(e) {
    volumeSrc.src = './source/images/soundon.png'
    const width = this.clientWidth
    const clickX = e.offsetX 
    audio.volume = (clickX / width)
    volume.style.width = `${clickX}px`
}

volumecontainer.addEventListener('click', setprogressd)

