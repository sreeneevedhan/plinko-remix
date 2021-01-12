const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var divisionHeight=300;
var divisions=[];
var plinkos=[];
var particles=[];


function setup() {
  createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;

  //createSprite(400, 200, 50, 50);
  ground = new Ground(240,790,480,10);
  

 // ground= new Ground(240,790,480,10);
 
    for (var k=0;k<=width;k=k+80) {
     divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
     
    }

    for (var j=50; j<=width; j=j+50){
       plinkos.push(new Plinko(j,80));
    }

    for (var j=25; j<=width-10; j=j+50){
      plinkos.push(new Plinko(j,180));
   }

   for (var j=50; j<=width; j=j+50){
    plinkos.push(new Plinko(j,280));
 }

 for (var j=25; j<=width-10; j=j+50){
  plinkos.push(new Plinko(j,380));
}



}

function draw() {
  background(0); 
  Engine.update(engine);

  if(frameCount%60===0){
    particles.push(new Particle(random(10,width/2+10),10,10));
  }

 
  ground.display();
    for (var k = 0; k < divisions.length; k++) {
      divisions[k].display();
    }

    for (var j= 0; j<plinkos.length; j++) {
      plinkos[j].display();
    }

    for(var p=0; p<particles.length; p++ ){
      particles[p].display();
    }
  
  
}