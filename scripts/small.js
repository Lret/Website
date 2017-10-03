function playMusic(x) {
    x.nextElementSibling.currentTime = 0;
    x.nextElementSibling.play();
}

function stopMusic(x) { 
    x.nextElementSibling.pause(); 
}
function toggleHamburg(x){
    //document.getElementById("menu-list").classList.toggle("hidden-list");
    document.getElementsByClassName("menu-list")[0].classList.toggle("hidden-list");
}