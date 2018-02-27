function updateTimer(deadline) {
    var time = deadline - new Date();

    return {
      'days': Math.floor( time/(1000*60*60*24) ),
      'hours': Math.floor( (time/(1000*60*60)) % 24 ),
      'minutes': Math.floor( (time/1000/60) % 60 ),
      'seconds': Math.floor( (time/1000) % 60 ),
      'total': time
    };
}

function animateClock(unitElement){
    unitElement.className = "turn";
    setTimeout(function(){
        unitElement.className = "";
    },800);
}

function startTimer(id, deadline) {
    var timerInterval = setInterval(function () {
        var clock = document.getElementById(id);
        var timer = updateTimer(deadline);

        clock.innerHTML = `
            <span>${timer.days}</span>
            <span>${timer.hours}</span>
            <span>${timer.minutes}</span>
            <span>${timer.seconds}</span>
                           `;

        // animation
        var unitElements = clock.getElementsByTagName("span");
        animateClock(unitElements[3]);
        if(timer.seconds === 59) animateClock(unitElements[2]);
        if(timer.minutes === 59 && timer.seconds === 59) animateClock(unitElements[1]);
        if(timer.hours === 23 && timer.minutes === 59 && timer.seconds === 59) animateClock(unitElements[0]);

        if(timer.total < 1){
            clearInterval(timerInterval);
            clock.innerHTML = `<span>0</span><span>0</span><span>0</span><span>0</span>`;
        }

    }, 1000);
}

window.onload = function () {
    var deadline = new Date('March 7, 2018 15:15:00');
    startTimer('clock', deadline)
};