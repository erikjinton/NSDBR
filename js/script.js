var ctx,
    progressX = 0,
    progressVX = 0,
    rightFootPix = [0, 0, 0, 0];

//Instansiera spelarobjekt
var pl = new Player(300, 630, 40, 120)

//Instansiera array med boxar
var box = [
    
    
];
//Instansiera array med spikar
var spike = [
    new Spike(500, 630 - 50, 50, 50)
];


function init() {

    var canvas = document.getElementById("canv");
    ctx = canvas.getContext("2d");

    window.setInterval(update, 8);

    //createjs.Sound.registerSound("ljud/horn.mp3", "mySound");   
}

function update() {
    pl.updatePos();

    ctx.clearRect(0, 0, 1200, 630);

    ctx.fillStyle = "black";
    ctx.fillRect(pl.posX, pl.posY, pl.width, pl.height);

    ctx.fillStyle = "red";
    for (var i = 0; i < box.length; i++) {
        ctx.fillRect(box[i].posX - progressX, box[i].posY, box[i].width, box[i].height);
    }

    ctx.fillStyle = "blue";
    for (var i = 0; i < spike.length; i++) {
        ctx.fillRect(spike[i].posX - progressX, spike[i].posY, spike[i].width, spike[i].height);
    }
    
    var imgd = ctx.getImageData(pl.posX + 48, pl.posY + 117, 1, 1);
    rightFootPix = imgd.data;

    var lfp = ctx.getImageData(pl.posX - 8, pl.posY + 117, 1, 1);
    leftFootPix = lfp.data;

    var ulfp = ctx.getImageData(pl.posX + 37, pl.posY + 122, 1, 1);
    underLeftFootPix = ulfp.data;

    var urfp = ctx.getImageData(pl.posX + 7, pl.posY + 122, 1, 1);
    underRightFootPix = urfp.data;
    
    var trp = ctx.getImageData(pl.posX + 47, pl.posY, 1, 1);
    topRightPix = trp.data;
    
    

    //console.log(pix);
    //console.log("Röd " + rightFootPix[0] + " Grön " + rightFootPix[1] + " Blå " + rightFootPix[2] + " Alpha " + rightFootPix[3])

    progressX = progressX + progressVX;

    if (progressVX >= 4) {
        progressVX = 4
    }

    if (progressVX <= -4) {
        progressVX = -4
    }

    if (pl.posY >= 510) {
        pl.posY = 510;
        pl.vy = 0;
    }

    if (rightFootPix[0] == 255) {
        progressVX = 0
    }

    if (leftFootPix[0] == 255) {
        progressVX = 0
    }

    if (underRightFootPix[0] == 255) {
        pl.vy = 0;
    }

    if (underLeftFootPix[0] == 255) {
        pl.vy = 0;
    }
    
    if (rightFootPix[2] == 255) {
        window.location.reload();
    }
    
    if (leftFootPix[2] == 255) {
        window.location.reload();
    }
    
    if (underLeftFootPix[2] == 255) {
        window.location.reload();
    }
    
    if (underRightFootPix[2] == 255) {
        window.location.reload();
    }
    
    if (topRightPix[0] == 255) {
        progressVX = 0;
    }
    
    
}

function keyDown(e) {

    //Höger
    if (e.keyCode == 39 && rightFootPix[0] !== 255) {
        progressVX = progressVX + 5
    }

    //Vänster
    if (e.keyCode == 37 && leftFootPix[0] !== 255) {
        progressVX = progressVX - 5
    }
    //Upp
    if (e.keyCode == 38 && pl.vy == 0) {
        pl.vy = -5;
        pl.gravity = 0.09;
    }
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
