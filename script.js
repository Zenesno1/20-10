var audioElement = document.getElementById("audio");
var playButton = document.getElementById("playButton");
var stopButton = document.getElementById("stopButton");

playButton.addEventListener("click", function () {
    audioElement.play();
    playButton.style.display = "none";
    stopButton.style.display = "inline-block";
});

stopButton.addEventListener("click", function () {
    audioElement.pause();
    playButton.style.display = "inline-block";
    stopButton.style.display = "none";
});
