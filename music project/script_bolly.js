console.log("Welcome to Integral Music");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('bollly_songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "O Maahi", filePath: "bolly_songs/1.mp3", coverPath: "bolly_covers/1.jpg"},
    {songName: "Lutt Putt Gaya", filePath: "bolly_songs/2.mp3", coverPath: "bolly_covers/2.jpg"},
    {songName: "Main Na Jaanu Kyun", filePath: "bolly_songs/3.mp3", coverPath: "bolly_covers/3.jpg"},
    {songName: "One Hai Re Bhai", filePath: "bolly_songs/4.mp3", coverPath: "bolly_covers/4.jpg"},
    {songName: "Soulmate", filePath: "bolly_songs/5.mp3", coverPath: "bolly_covers/5.jpg"},
    {songName: "Ami Je Tomar", filePath: "bolly_songs/6.mp3", coverPath: "bolly_covers/6.jpg"},
    {songName: "410", filePath: "bolly_songs/7.mp3", coverPath: "bolly_covers/7.jpg"},
    {songName: "Ek Baat Batao Tum", filePath: "bolly_songs/8.mp3", coverPath: "bolly_covers/8.jpg"},
    {songName: "Lover", filePath: "bolly_songs/9.mp3", coverPath: "bolly_covers/9.jpg"},
    {songName: "Fake Love", filePath: "bolly_songs/10.mp3", coverPath: "bolly_covers/10.jpg"},
]


 

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})



// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `bolly_songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        
       
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `bolly_songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})


document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `bolly_songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

