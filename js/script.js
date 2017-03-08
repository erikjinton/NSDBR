var ctx, progressX = 0, progressVX = 0;

//Instansiera spelarobjekt
var pl = new Player(300, 510, 35, 120);

//Instansiera array med boxar
var box = [
    new Box(500, 630 - 50, 50, 50),
    new Box(500, 630 - 100, 50, 50),
    new Box(500 - 50, 630 - 50, 50, 50),
    //new Box(500, 630, 50, 50),
    //new Box(500, 630, 50, 50),
    //new Box(500, 630, 50, 50),
    //new Box(500, 630, 50, 50),
    //new Box(500, 630, 50, 50),
    //new Box(500, 630, 50, 50),
    //new Box(500, 630, 50, 50),
    //new Box(500, 630, 50, 50),
    //new Box(500, 630, 50, 50),
    //new Box(500, 630, 50, 50),
    //new Box(500, 630, 50, 50),
    //new Box(500, 630, 50, 50);
    
];

//
function init() {
    
    var canvas = document.getElementById("canv");
    ctx = canvas.getContext("2d");
    
    window.setInterval(update, 20); 
    
    //createjs.Sound.registerSound("ljud/horn.mp3", "mySound");
}

function update() {
    
    ctx.clearRect(0, 0, 1200, 630);
    ctx.fillRect(pl.posX, pl.posY, pl.width, pl.height);
    
    for (var i = 0; i < box.length; i++) {
        ctx.fillRect(box[i].posX - progressX, box[i].posY, box[i].width, box[i].height);
    }
    
    progressX = progressX + progressVX;
}

function keyDown(e) {
    
    //Höger
        if (e.keyCode == 39) {
            progressVX = progressVX + 10
        }
    
    //Vänster
            if (e.keyCode == 37) {
            progressVX = progressVX - 10
        }
    
    //Upp
            /* if (e.keyCode == 39) {
            progressVX = progressVX + 10
        } */
}

function keyUp(e) {
    
    //Släpp höger
    if (e.keyCode == 39) {
            progressVX = 0
        }
    
    //Släpp vänster
    if (e.keyCode == 37) {
            progressVX = 0
        }
}