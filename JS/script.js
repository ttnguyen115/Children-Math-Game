let musicButton = document.querySelector("#music-icon");
var audio = new Audio();

function loadMusicButton()
{
    audio.src = "../Media/bg-music.mp3";
    audio.loop = true;
    audio.play();
}

function stopMusic()
{
    audio.pause();
}

window.addEventListener("load", loadMusicButton);
musicButton.addEventListener("click", stopMusic);