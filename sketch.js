const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground,Platform;
var i
var box = [i];
var ball;

function setup(){
    createCanvas(1200,500);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(250,height,1200,30);
    Platform = new Ground(850,350,400,15);
    
   
    box1 = new Box(850,349,30,50);
    box2 = new Box(880,349,30,50);
    box3 = new Box(820,349,30,50);
    box4 = new Box(833,249,30,50);
    box5 = new Box(867,249,30,50);
    box6 = new Box(850,200,30,50);
    
    box7 = new Box(500,450,30,50);
    box8 = new Box(530,450,30,50);
    box9 = new Box(470,450,30,50);
    box10 = new Box(560,450,30,50);
    box11 = new Box(440,450,30,50);
    box12 = new Box(590,450,30,50);

    box13 = new Box(500,399,30,50);
    box14 = new Box(530,399,30,50);
    box15 = new Box(470,399,30,50);
    box16 = new Box(560,399,30,50);
    
    box17 = new Box(500,348,30,50);
    box18 = new Box(530,348,30,50);
    
    box19 = new Box(515,230,30,50);
   
    ball = new Ball(200,200,30,50);
    
   
    slingShot = new SlingShot( ball.body,{x:193 ,y:320 });
    
}

function draw(){
    background(56,44,44);
    Engine.update(engine);
     

    ground.display();
    Platform.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();  

    ball.display();

    slingShot.display();

}
function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    slingShot.fly();
}

function KeyPressed(){
    if(keyCode === 32){
        slingShot.attach(ball.body);
    }

}