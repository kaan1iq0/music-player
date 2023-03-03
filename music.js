const  title = document.querySelector(".musictittle")
const  img = document.querySelector(".musicimg")
const  prev = document.querySelector("#back")
const  next = document.querySelector("#next")
const  play = document.querySelector("#play")
const  audio = document.querySelector("#audio")


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
let i = getRandomInt(7);
console.log(i);


// <-Adding a Song List->
const songList = [
    {
        path: "music/Fallinginlove.mp3",
        songName: "Falling in love - Holem", 
        
        Image: "img/Fallin.jpg",
    },
    {
        path: "music/Starboy2.mp3",
        songName: "The Weeknd - Starboy ft. Daft Punk",
        Image: "img/starboy.png",

    },
    {
        path: "music/Space2Song.mp3",
        songName: "Space Song - Beach House",
        
        Image: "img/spacesong.jpg",
    },
    {
        path: "music/Surething.mp3",
        songName: "Miguel - Sure Thing (Hopez99)",
        
        Image: "img/Surething.jpg",
    },
    {
        path: "music/Hadise.mp3",
        songName: "Hadise - Düm Tek Tek",
        
        Image: "img/Hadise.jpg",
    },
    {
        path: "music/Wicked.mp3",
        songName: "Wicked Game - Chris Isaak",
        
        Image: "img/Wicked.jpg",
    },



];
// </-Adding a Song List->

let song_Playing = false;


function playSong()
{
    song_Playing = true;
    audio.play();
    play.classList.add("active");
    play.innerHTML = "<i class= 'fa fa-pause-circle fa-2x'></i>"
}


function pauseSong()
{
    song_Playing = false;
    audio.pause();
    play.classList.remove("active");
    play.innerHTML = "<i class= 'fa fa-play-circle fa-2x'></i>"
}


play.addEventListener("click", () => (song_Playing ? pauseSong() : playSong()));


function loadSong(songList)
{
    title.textContent = songList.songName;
    
    img.src = songList.Image;
    audio.src = songList.path;

    // Volume

     audio.volume = 0.1;

    // Volume

}


loadSong(songList[i])

function prevSong()
{
    i--;
    if(i < 0)
    {
        i = songList.length - 1;
    }
    loadSong(songList[i]);
    playSong();
    
}


function nextSong()
{
    

    i++;
    if(i > songList.length - 1)
    {
        i = 0;
    }
    loadSong(songList[i]);
    playSong();

    
}


function finish()
{
    nextSong();
}







