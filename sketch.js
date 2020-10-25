var wall, thickness

var bullet, speed, weight;

//var 

function setup() {
  createCanvas(1600,400);
  
  thickness=random(22, 83);

  speed = random(223,321);
  weight = random(30,52);

  bullet=createSprite()

 wall = createSprite(1200, 200, thickness, height/2);

 boundary = createSprite(0, 55, 1600, 5);
 boundary2 = createSprite(0, 70, 1600, 5);
 boundary3 = createSprite(0, 105, 1600, 5);
 boundary4 = createSprite(0, 140, 1600, 5);
 //boundary5 = createSprite
}

 
function draw() {
  background(0);  
  
  blueCar.velocityX = speed;

  car.velocityX = speed;

  aliceblueCar.velocityX = speed;

  whiteCar.velocityX = speeed;

if(wall.x-blueCar.x <(car.width+wall.width)/2){
  blueCar.velocity=0;
  var deformation=0.5*weight*speed*speed/22509;
  if(deformation>180){
    blueCar.shapeColor=color(255, 0, 0);
  }
  if(deformation<180 && deformation>100){
    blueCar.shapeColor=color(255, 0, 0);
  }
  if(deformation<100){
    blueCar.shapeColor=color(0,255,0);
  }
} 
if(wall.x-car.x <(car.width+wall.width)){
  car.velocity=0;
  var deformation=0.5*weight*speed*speed/22509;
  if(deformation>180){
    car.shapeColor=color(255, 0, 0);
  }
  if(deformation<180 && deformation>100){
    car.shapeColor=color(255, 0, 0);
  }
  if(deformation<100){
    car.shapeColor=color(0,255,0);
  }
} 
if(wall.x-aliceblueCar.x <(aliceblueCar.width+wall.width)){
  aliceblueCar.velocity=0;
  var deformation=0.5*weight*speed*speed/22509;
  if(deformation>180){
    aliceblueCar.shapeColor=color(255, 0, 0);
  }
  if(deformation<180 && deformation>100){
   aliceblueCar.shapeColor=color(255, 0, 0);
  }
  if(deformation<100){
    aliceblueCar.shapeColor=color(0,255,0);
  }
} 
if(wall.x-whiteCar.x <(whiteCar.width+wall.width)){
  whiteCar.velocity=0;
  var deformation=0.5*weight*speed*speed/22509;
  if(deformation>180){
    whiteCar.shapeColor=color(255, 0, 0);
  }
  if(deformation<180 && deformation>100){
    whiteCar.shapeColor=color(255, 0, 0);
  }
  if(deformation<100){
    whiteteCar.shapeColor=color(0,255,0);
  }
} 
blueCar.display();
car.display();
aliceblueCar.display();
whiteCar.display();
  drawSprites(); 
}




