const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint

var engine, world;
var posx, posy
var gameState;
var Pinaki, Medal1, Medal2, Medal3, Medal4;
var target1, target2, target3, target4;
var MedalGiver;
var pImage;


function setup() {
    createCanvas(displayWidth, displayHeight);
    background("blue");
    engine=Engine.create();
    world = engine.world;
    Pinaki = new Scout(displayWidth/2+30, displayHeight/2-30, 250, 300);

    target1 = new Target1(displayWidth/3, displayHeight/5,80,150);
    button1 = new Form();
    button1.display();
}

function draw() {
   
   Engine.update(engine);
   button1.display();
   if(gameState === "PLAY"){
    background("green");
    Pinaki.display();
    target1.display();
       posx= Pinaki.body.position.x
       posy = Pinaki.body.position.y
   }
   
    //drawSprites();
}
function keyPressed(){
    
    posx= Pinaki.body.position.x
    posy = Pinaki.body.position.y
    if(keyCode === UP_ARROW){
        console.log("hello"+ posx + posy);

        Matter.Body.setPosition(Pinaki.body, {x:posx, y: posy-50})
    }
}