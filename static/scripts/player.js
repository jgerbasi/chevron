class Player {

    // movement keys mapping
    static LEFT = "a";
    static RIGHT = "d";
    static UP = "w";
    static DOWN = "s";

    constructor(ctx, name, startingX, startingY, speed) {
        this.ctx = ctx;
        this.name = name;
        this.isMoving = true;
        this.movementKeys = {};
        this.x = startingX;
        this.y = startingY;
        this.velX = 0;
        this.velY = 0;
        this.maxV = 10;
        this.friction = 0.90;
        this.speed = speed; // 3 
        this.image = new Image();
        this.image.src = 'images/player.png';
        this.image.onload = () => {
            ctx.drawImage(this.image, this.x, this.y, 200, 200);
        }
    }

    applyMovement() {
        console.log(this.velX);
        // move left
        if (this.movementKeys[Player.LEFT]) {
            if (this.velX < this.maxV) {
                this.velX += this.speed;
            }
            this.velX *= this.friction;
            this.x -= this.velX;
        }

        // move right
        if (this.movementKeys[Player.RIGHT]) {
            if (this.velX < this.maxV) {
                this.velX += this.speed;
            }
            this.velX *= this.friction;
            this.x += (this.velX * this.friction);
        }

        // move up
        if (this.movementKeys[Player.UP]) {
            if (this.velY < this.maxV) {
                this.velY += this.speed;
            }
            this.velY *= this.friction;
            this.y -= (this.velY * this.friction);
        }

        // move down
        if (this.movementKeys[Player.DOWN]) {
            if (this.velY < this.maxV) {
                this.velY += this.speed;
            }
            this.velY *= this.friction;
            this.y += (this.velY * this.friction);
        }
    }

    move(key) {
        this.movementKeys[key] = true;
    }

    stop(key) {
        this.movementKeys[key] = false;
        this.velX = 0;
        this.velY = 0;
    }

    redrawPlayer() {
        this.applyMovement();
        this.ctx.drawImage(this.image, this.x, this.y, 50, 50);
        console.log("x: " + this.x + "y: " + this.y);
    }
}