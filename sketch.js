var car,car2,car3,car4,wall,wall2,wall3,wall4;

function setup() {
  createCanvas(1600,800);
  car =  createSprite(400, 200, 10, 10);
  car2 = createSprite(400,130,10,10);
  car3 = createSprite(400,280,10,10);
  car4 = createSprite(400,340,10,10);

  wall2 = createSprite(1500,110,10,50);
  wall = createSprite(1500,200,10,50);
  wall3 = createSprite(1500,280,10,50);
  wall4 = createSprite(1500,340,10,50);

  car.shapeColor ="white";
  car2.shapeColor ="white";
  car3.shapeColor ="white";
  car4.shapeColor ="white";
}

function draw() {
  background("black");  
car.velocityX = 3;
car2.velocityX = 6;
car3.velocityX = 2;
car4.velocityX =4;

car.collide(wall);
if( car2.collide(wall2)){
  car2.shapeColor = "red";
}
if(car3.collide(wall3)){
  car3.shapecolor = "green";
}
if(car4.collide(wall4)){
  car4.shapeColor = "yellow";
}

  drawSprites();
}