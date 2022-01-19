const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;

var engine, world;


function setup(){
    var canvas = createCanvas(1000,600);
    engine = Engine.create();
    world = engine.world;
    Ground = new ground(500,590,1000,20);
    Box1 = new box(900,100,70,70);
    Box2 = new box(900,100,70,70);
    Box3 = new box(900,100,70,70);
    Box4 = new box(800,100,70,70);
    Box5 = new box(800,100,70,70);
    Box6 = new box(800,100,70,70);
    Box7 = new box(800,100,70,70);
    Box8 = new box(800,100,70,70);
    Box9 = new box(700,100,70,70);
    Box10 = new box(700,100,70,70);
    Box11 = new box(700,100,70,70);
    Box12 = new box(700,100,70,70);
    Box13 = new box(700,100,70,70);
    Box14 = new box(700,100,70,70);
    Box15 = new box(700,100,70,70);
    Box16 = new box(600,100,70,70);
    Box17 = new box(600,100,70,70);
    Box18 = new box(600,100,70,70);
    Box19 = new box(600,100,70,70);
    Box20 = new box(600,100,70,70);
    ball = new Ball(200,100,200,200);
    riata = new Riata(ball.body,({x:500,y:50}));

    
}

function draw(){
  
    background('skyblue');
    Engine.update(engine);
    Ground.display();
    Box1.display();
    Box2.display();
    Box3.display();
    Box4.display();
    Box5.display();
    Box6.display();
    Box7.display();
    Box8.display();
    Box9.display();
    Box10.display();
    Box11.display();
    Box12.display();
    Box13.display();
    Box14.display();
    Box15.display();
    Box16.display();
    Box17.display();
    Box18.display();
    Box19.display();
    Box20.display();
    ball.display();
    riata.display();

 
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}
