const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myengine,myworld;
var ground;
var division = [];
var plinko = [];
var particle;
var score = 0;
var turn = 0;
var gs = "play";

function setup() {

  createCanvas(500,800);
  myengine = Engine.create();
  myworld = myengine.world;


  ground = new Ground(250,780,500,40);
  
  
  for(i=0;i<6;i=i+1){
    division[i] = new Division(100*i,600,20,350);
  }

  for(i=0;i<13;i=i+1){
    plinko[i]=[];
    for(j=0;j<4;j=j+1){
       plinko[i][j] = new Plinko(15+(50*i),130+(50*j),10);
    }
  }

  
}


function draw() {
  background("aquamarine");  
  Engine.update(myengine);
  ground.display();

  for(i=0;i<6;i=i+1){
    division[i].display();
  }

  for(i=0;i<13;i=i+1){
    for(j=0;j<4;j=j+1){
      plinko[i][j].display();
    }
  }
 
  textSize(30);
  text("Score: "+score,170,40);
  text("500",30,450);
  text("300",130,450);
  text("200",230,450);
  text("300",330,450);
  text("500",430,450);

  push();
  strokeWeight(5);
  stroke("yellow");
  line(0,400,500,400);
  pop();

  if(particle!=null){
    particle.display();
    if(particle.body.position.y>400 && particle.body.position.x < 170){
      score+=500;
      particle=null;
      if(turn>5){gs="end";}
    }
    else if(particle.body.position.y>400 && particle.body.position.x < 350){
      score+=100;
      particle=null;
      if(turn>5){gs="end";}
    }
    else if(particle.body.position.y>400 && particle.body.position.x < 500){
      score+=200;
      particle=null;
      if(turn>5){gs="end";}
    }

    
  }  

  if(gs==="end"){
    push();
    fill("purple");
    stroke("black");
    text("GameOver",150,350);
    pop();
    
  }
}

function mousePressed(){
  if(gs==="play"){
    turn=turn+1;
    particle = new Particle(mouseX,10,10);
  }
}