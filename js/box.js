//Objekt för box
function Box(posX, posY, width, height){
    
    //Deklarera egenskaper
    this.posX = posX;
    this.posY = posY;
    this.width = width;
    this.height = height;
    
    
    
    this.render = function (){
        
    //Måla ut hinder
    ctx.fillStyle = this.color;
    ctx.fillRect(box[i].posX - progressX, box[i].posY, box[i].width, box[i].height);
    
        
    }
}