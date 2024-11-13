// on document ready ...
$(function() {
    console.log("loaded");
    var canvas = document.getElementById("gameCanvas");
    var ctx = canvas.getContext("2d");
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;

    var jim = new Player(ctx, "jim", 200, 200, 3);
/*     var carl = new Player(ctx, "carl", 400, 400, 100); */
    
    onkeydown = (event) => {
        console.log(event);
        console.log("pressed");

        jim.move(event.key);
    }

    onkeyup = (event) => {
        console.log(event);
        console.log("depressed");

        jim.stop(event.key);
    }

    let lastTime = 0;
    const desiredFPS = 60;

    function render(timestamp) {
        const deltaTime = timestamp - lastTime;
        // Calculate time between frames
        if (deltaTime >= 1000 / desiredFPS) {
            ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
            jim.redrawPlayer();

            lastTime = timestamp;
        }
        window.requestAnimationFrame(render);
    }

    window.requestAnimationFrame(render);
});
