function playMusic(x) {
    //var mPlayer = this.nextSibling;
    //mPlayer.innerHTML = "Mello";
    console.log(this);
    //x.nextElementSibling.innerHTML += "hello";
    x.nextElementSibling.play();
    //x.nextElementSibling.controls();
    
}

function stopMusic(x) {
    //var mPlayer = this.nextSibling;
    //mPlayer.innerHTML = "Mello";
    console.log(this);
    //x.nextElementSibling.innerHTML += "hello";
    x.nextElementSibling.pause();
    x.nextElementSibling.currentTime = 0;
    
}