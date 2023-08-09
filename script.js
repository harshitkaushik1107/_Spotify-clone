console.log("welcome to spotifyx");

let songIndex = 0;
let audioElement = new Audio("songs/4.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let songMaster = document.getElementById("songMaster");
let songItems = Array.from(document.getElementsByClassName("songItem"));

let songs = [
    {songName:"Daku",filePath:"songs/Daku.mp3",coverPath:"covers/1.jpg"},
    {songName:"Har Har Gange",filePath:"songs/2.mp3",coverPath:"covers/5.jpg"},
    {songName:"Jab Se Tere Naina",filePath:"songs/3.mp3",coverPath:"covers/8.jpg"},
    {songName:"Jai Shri Ram",filePath:"songs/4.mp3",coverPath:"covers/3.jpg"},
    {songName:"Kesariya",filePath:"songs/5.mp3",coverPath:"covers/4.jpg"},
    {songName:"Mahiye Jinna Sohna",filePath:"songs/6.mp3",coverPath:"covers/6.jpg"},
    {songName:"Pasoori",filePath:"songs/7.mp3",coverPath:"covers/7.jpg"},
    {songName:"Pehli Nazar Mein",filePath:"songs/8.mp3",coverPath:"covers/1.jpg"},
    {songName:"Raanjhanaa",filePath:"songs/9.mp3",coverPath:"covers/9.jpg"},
    {songName:"Yeh Pyar Nahi To Kya Hai",filePath:"songs/10.mp3",coverPath:"covers/10.jpg"},
]
songItems.forEach((element,i)=>{
    // console.log(element,i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerHTML =songs[i].songName;
})
masterPlay.addEventListener("click",()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-circle-pause");
        gif.style.opacity =1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove("fa-circle-pause");
        masterPlay.classList.add("fa-circle-play");
        gif.style.opacity =0;
    }
});
audioElement.addEventListener("timeupdate",()=>{
    // console.log("timeupdate");
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    // console.log(progress);
    myProgressBar.value = progress;

});

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = (myProgressBar.value *audioElement.duration) /100; 
});


const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
        element.classList.remove("fa-circle-pause");
        element.classList.add("fa-circle-play");
    });
}

Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
    element.addEventListener("click" ,(e)=>{
        // console.log(e.target);
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove("fa-circle-play");
        e.target.classList.add("fa-circle-pause");
        audioElement.src = `songs/${songIndex+1}.mp3`;
        songMaster.innerText = songs[songIndex].songName;
        audioElement.currentTime =0;
        audioElement.play();
        gif.style.opacity =1;
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
    });
});

document.getElementById("next").addEventListener("click",()=>{
    if(songIndex>=9){
        songIndex = 0;
    }
    else{
        songIndex +=1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    songMaster.innerText = songs[songIndex].songName;
    audioElement.currentTime =0;
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
});

document.getElementById("previous").addEventListener("click",()=>{
    if(songIndex<=9){
        songIndex = 0;
    }
    else{
        songIndex -=1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    songMaster.innerText = songs[songIndex].songName;
    audioElement.currentTime =0;
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");

});





/*
function changeSong() {
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    songMaster.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");

    // Update play icons for individual song items
    makeAllPlays();
    const currentSongItemPlay = document.getElementById(`songItemPlay${songIndex}`);
    currentSongItemPlay.classList.remove("fa-circle-play");
    currentSongItemPlay.classList.add("fa-circle-pause");
}

document.getElementById("previous").addEventListener("click", () => {
    if (songIndex <= 0) {
        songIndex = 9;
    } else {
        songIndex -= 1;
    }
    changeSong();
});


document.getElementById("next").addEventListener("click", () => {
    if (songIndex >= 9) {
        songIndex = 0;
    } else {
        songIndex += 1;
    }
    changeSong();
});*/







/*
console.log("Welcome to Spotify Clone");

let songIndex = 0;
let audioElement = new Audio("songs/4.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let songMaster = document.getElementById("songMaster");
let songItems = Array.from(document.getElementsByClassName("songItem"));

let songs = [
    {songName:"Daku",filePath:"songs/1.mp3",coverPath:"covers/1.jpg"},
    {songName:"Har Har Gange",filePath:"songs/2.mp3",coverPath:"covers/5.jpg"},
    {songName:"Jab Se Tere Naina",filePath:"songs/3.mp3",coverPath:"covers/8.jpg"},
    {songName:"Jai Shri Ram",filePath:"songs/4.mp3",coverPath:"covers/3.jpg"},
    {songName:"Kesariya",filePath:"songs/5.mp3",coverPath:"covers/4.jpg"},
    {songName:"Mahiye Jinna Sohna",filePath:"songs/6.mp3",coverPath:"covers/6.jpg"},
    {songName:"Pasoori",filePath:"songs/7.mp3",coverPath:"covers/7.jpg"},
    {songName:"Pehli Nazar Mein",filePath:"songs/8.mp3",coverPath:"covers/1.jpg"},
    {songName:"Raanjhanaa",filePath:"songs/9.mp3",coverPath:"covers/9.jpg"},
    {songName:"Yeh Pyar Nahi To Kya Hai",filePath:"songs/10.mp3",coverPath:"covers/10.jpg"},
]

songItems.forEach((element,i)=>{
    // console.log(element,i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerHTML =songs[i].songName;
})
masterPlay.addEventListener("click",()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-circle-pause");
        gif.style.opacity =1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove("fa-circle-pause");
        masterPlay.classList.add("fa-circle-play");
        gif.style.opacity =0;
    }
});
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
        element.classList.remove("fa-circle-pause");
        element.classList.add("fa-circle-play");
    });
}
// Update the play icon and change the song when individual song items are clicked
Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) => {
    element.addEventListener("click", (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove("fa-circle-play");
        e.target.classList.add("fa-circle-pause");
        audioElement.src = `songs/${songIndex + 1}.mp3`;
        songMaster.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
    });
});

// Function to update the play icon and change the song when clicking "Next" or "Previous" button
function changeSong() {
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    songMaster.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");

    makeAllPlays();
    const currentSongItemPlay = document.getElementById(`songItemPlay${songIndex}`);
    currentSongItemPlay.classList.remove("fa-circle-play");
    currentSongItemPlay.classList.add("fa-circle-pause");
}

// Event listener for the "Next" button
document.getElementById("next").addEventListener("click", () => {
    if (songIndex >= 9) {
        songIndex = 0;
    } else {
        songIndex += 1;
    }
    changeSong();
});

// Event listener for the "Previous" button
document.getElementById("previous").addEventListener("click", () => {
    if (songIndex <= 0) {
        songIndex = 9;
    } else {
        songIndex -= 1;
    }
    changeSong();
});
*/