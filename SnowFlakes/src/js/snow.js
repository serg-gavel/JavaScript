window.onload = function () {

    var canvas = document.getElementById('sky');
    var ctx = canvas.getContext('2d');

    var windowHeight = window.innerHeight;
    var windowWidth = window.innerWidth;
    canvas.height = windowHeight;
    canvas.width = windowWidth;

    var maximumFlakes = 100;
    var flakes = [];

    for(var i = 0; i < maximumFlakes; i++){
        flakes.push({
            x: Math.random()* windowWidth,
            y: Math.random()* windowHeight,
            r: Math.random()* 3 + 2, // min 2px and max 7px of flakes radius
            d: Math.random() + 1 // density of the flakes
        })
    }

    // draw flakes
    function drawFlakes() {
        ctx.clearRect(0, 0, windowWidth, windowHeight);
        ctx.fillStyle = '#fafafa';
        ctx.beginPath();
        for(var i = 0; i < maximumFlakes; i++){
            var fl = flakes[i];
            ctx.moveTo(fl.x, fl.y);
            ctx.arc(fl.x, fl.y, fl.r, 0, Math.PI*2, true);
        }
        ctx.fill();
        moveFlakes();
    }

    // animate flakes
    var angle = 0;

    function moveFlakes() {
        angle += 0.01;
        for(var i = 0; i < maximumFlakes; i++){
            var fl = flakes[i];

            fl.y += Math.pow(fl.d, 2) + 1;
            fl.x += Math.sin(angle) * 2;

            if(fl.y > windowHeight){
                flakes[i] = {
                    x: Math.random() * windowWidth,
                    y: 0,
                    r: fl.r,
                    d: fl.d
                }
            }
        }
    }

    setInterval(drawFlakes, 35);

};