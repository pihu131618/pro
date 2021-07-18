class Target2
{
  constructor(x,y,width,height)
  {
    var options={
        isStatic:true
    }
    this.body = Bodies.rectangle(x,y,width,height);
    this.width = width
    this.height= height
   //this.image = loadImage("t2.png")
  }
  display(){
      push ();
      translate(this.body.position.x, this.body.position.y);
      imageMode(CENTER);
      //image(this.image,displayWidth/4, displayHeight/4);
      pop ();
  }
}