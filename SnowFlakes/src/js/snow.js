window.onload = function () {

    var canvas = document.getElementById('sky');
    var ctx = canvas.getContext('2d');

    var windowHeight = window.innerHeight;
    var windowWidth = window.innerWidth;
    canvas.height = windowHeight;
    canvas.width = windowWidth;

    var maximumFlakes = 100;
    var flakes = [];

    for(var i=0; i < maximumFlakes; i++){
        flakes.push({
            x: Math.random()* windowWidth,
            y: Math.random()* windowHeight,
            r: Math.random()* 5 + 2, // min 2px and max 7px flakes
            d: Math.random() + 1 // density of the flakes
        })
    }
};