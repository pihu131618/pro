class Form
{
    constructor(){
        this.button = createButton("Play");
       // this.bgImage = loadImage();

    }
     display(){
       this.button.position(displayWidth/2 , displayHeight/2);
       this.button.mousePressed(()=>{
           this.button.hide();
           background("green");
           Pinaki.display();
           target1.display();
           gameState = "PLAY";
       })
     }
}