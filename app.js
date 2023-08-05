//music//

//music//

// Carousel images
let Images = ["./files/images/cover1.png", "./files/images/cover7.png", "./files/images/cover8.png", "./files/images/cover9.png", "./files/images/cover10.png",]

let count = 0

let slide = document.getElementById("ImageSlide")

setInterval(()=>{
    slide.src = Images[count]
    count++
    if(count === Images.length){
        count=0
    }
},2000)

//End of Carousel//

// // Navigations//

//Toggle to music Player
const musicPlayerSection = document.querySelector('.music-player-section');



musicPlayerSection.addEventListener("dblclick",()=>{
        musicPlayerSection.classList.add('active');
    }  
)

// Back From Music Player//

const backToHomeBtn = document.querySelector('.music-player-section .back-btn');

backToHomeBtn.addEventListener('click', () =>{
    musicPlayerSection.classList.remove('active');
})

// Toggle Playlist //

const playListSection = document.querySelector('.playlist');
const backToMusicPlayer = document.querySelector('.music-player-section .switch');

 backToMusicPlayer.addEventListener('click', () =>{
    playListSection.classList.add('active');
 }
 )

 //Back From playlist //

 const playListSectionbtn = document.querySelector('.playlist .playlist-back-btn');
 playListSectionbtn.addEventListener('click', () =>{
    playListSection.classList.remove('active');
 })

//  //End of Navigation //

//  //Music & Controls//

 let currentMusic = 0;

 let music = document.querySelector('#audio-source');
 let seekBar = document.querySelector('.music-seek-bar');
 let songName = document.querySelector('.current-song-name');
 let artistName = document.querySelector('.artist-name');
 let coverImage = document.querySelector('.cover');
 let currentMusicTime = document.querySelector('.current-time');
 let musicDuration = document.querySelector('.duration');

 //Buttons For Controls
 const repeatBtn = document.querySelector('.repeat')
 const fowardBtn = document.querySelector('.forward');
 const backwardBtn = document.querySelector('.backward');
 const playBtn = document.querySelector('.play');
 const pauseBtn = document.querySelector('.pause');
 const shuffleBtn = document.querySelector('.shuffle'); 
 const volumeSlider = document.querySelector('.volume-slider');

 //Playbtn Event Click
 playBtn.addEventListener('click', () =>{
    
    playBtn.classList.remove('active');
    playBtn.classList.add('Noactive');
    pauseBtn.classList.add('active');
    music.pause()
 })

 //PauseBtn Event Click

 pauseBtn.addEventListener('click', () =>{
    music.pause()
    pauseBtn.classList.remove('active');
    pauseBtn.classList.add('Noactive');
    playBtn.classList.add('active');
    music.play()
 })



//  //set music Function //

const  setMusic = (i)=>{
    seekBar.value = 0;
    let song = songs[i];
    currentMusic = i;
    
    music.src = song.path;

    songName.innerHTML = song.name;
    artistName.innerHTML = song.artist;
    coverImage.src = song.cover;

    setTimeout(() => {
        seekBar.max = music.duration;
        musicDuration.innerHTML = formatTime(music.duration);
    },300);
    currentMusicTime.innerHTML = '00 : 00';
}
setMusic(0);


//  //format duration in 00:00 format//

 const formatTime = (time) =>{
    let min = Math.floor(time / 60);
    if (min < 10){
        min = `0` + min;
    }

    let sec = Math.floor(time % 60);
    if (sec < 10){
        sec = `0` + sec;
    }
    return `${min} : ${sec}`;
 }


// seekBar Events //
setInterval(( ) => {
    seekBar.value = music.currentTime;
    currentMusicTime.innerHTML = formatTime(music.currentMusicTime)
    if (Math.floor(music.currentTime) == Math.floor(seekBar.max )){
        if (repeatBtn.className.includes('active')){
            setMusic(currentMusic);
            playBtn.click();
        } else{
            fowardBtn.click()
        }
    }
},500)

seekBar.addEventListener('change', () =>{
    music.currentTime = seekBar.value;
})

// // foward btn

fowardBtn.addEventListener('click', () => {
    if (currentMusic >= songs.length - 1){
        currentMusic = 0;
    } else{
        currentMusic++;
    }
    setMusic(currentMusic);
    playBtn.click();
})

// backward btn

backwardBtn.addEventListener('click', () => {
    if (currentMusic <= 0){
        currentMusic = songs.length - 1;
    } else{
        currentMusic--;
    }
    setMusic(currentMusic);
    playBtn.click();
})

//repeat btn//
repeatBtn.addEventListener('click', () => {
    repeatBtn.classList.toggle('active')
})