// Set the date we're counting down to
var countDownDate = new Date("Oct 25, 2017 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now an the count down date
    var distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    var seconds = ("0" + seconds).slice(-2);
    
    // Output the result in an element with id="demo"
    document.getElementById("clock").innerHTML = "☠ Time until Deathday ☠ <br>" + hours + ":"
    + minutes + ":" + seconds + " and " + days +" days!";
    
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("clock").innerHTML = "DeathDay is comming!!!";
    }
}, 1000);