var ctx;

//Instansiera spelarobjekt
var pl = new Player(300, 510, 35, 120);

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
}