let currentAudio = null; 
function playMusic(audioId) {
    if (currentAudio) {
        currentAudio.pause(); 
        currentAudio.currentTime = 0; 
    }

    currentAudio = document.getElementById(audioId);
    if (currentAudio) {
        currentAudio.play().catch(err => console.error("Playback failed:", err));
    }
}

document.getElementById('btn1').addEventListener("click", () => playMusic('music1'));
document.getElementById('btn2').addEventListener("click", () => playMusic('music2'));
document.getElementById('btn3').addEventListener("click", () => playMusic('music3'));
document.getElementById('btn4').addEventListener("click", () => playMusic('music4'));
document.getElementById('btn5').addEventListener("click", () => playMusic('music5'));
document.getElementById('btn6').addEventListener("click", () => playMusic('music6'));

document.getElementById('container').addEventListener("click", () => playMusic('pianomusic'));

document.addEventListener("keydown", function(event) {
    let key = event.key.toLowerCase(); 

    let keyMusicMap = {
        "a": "music1",
        "b": "music2",
        "c": "music3",
        "d": "music4",
        "e": "music5",
        "f": "music6"
    };

    if (keyMusicMap[key]) {
        playMusic(keyMusicMap[key]);
    }
});