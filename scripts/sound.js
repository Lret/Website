function playMusic(x) {
    x.nextElementSibling.currentTime = 0;
    x.nextElementSibling.play();
}

function stopMusic(x) { 
    x.nextElementSibling.pause(); 
}