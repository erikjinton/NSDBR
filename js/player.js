//Objekt för player
function Player(posX, posY, width, height){
    
    //Deklarera egenskaper    
    this.posX = posX;
    this.posY = posY;
    this.width = width;
    this.height = height;
    this.vy = 0;
    this.gravity = 0;
    
    this.updatePos = function(){
        this.posY = this.posY + this.vy;
        this.vy = this.vy + this.gravity;
    }
}