function updateTimer(deadline) {
    var time = deadline - new Date();

    return {
      'days': Math.floor( time/(1000*60*60*24) ),
      'hours': Math.floor( (time/(1000*60*60)) % 24 ),
      'minutes': Math.floor( (time/(1000*60)) % 60 ),
      'seconds': Math.floor( (time/(1000)) % 60 ),
      'total': time
    };
}

function startTimer(id, deadline) {
    var timerInterval = setInterval(function () {
        var clock = document.getElementById(id),
            timer = updateTimer(deadline);
    }, 1000);
}

window.onload = function () {
    var deadline = new Date('February 27, 2018 15:15:00')
    startTimer('clock', deadline)
};