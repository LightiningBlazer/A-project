var movingRect, fixedRect, gameRect



function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 100, 100);
  movingRect = createSprite(300,300,50,50);
  gameRect = createSprite(100,200,100,100);
  fixedRect.shapeColor = "Blue";
  movingRect.shapeColor = "Blue";
  gameRect.shapeColor = "Blue";
  fixedRect.debug =  true;
  movingRect.debug = true;
  gameRect.debug = true;
}

function draw() {
  background(0);  
  
  movingRect.y = mouseY;
  movingRect.x = mouseX;

  if(touching(movingRect,fixedRect)){
    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "red";
  }else{
    fixedRect.shapeColor = "blue";
    movingRect.shapeColor = "blue";
  }
  if(touching(movingRect,gameRect)){
    gameRect.shapeColor = "red";
    movingRect.shapeColor = "red";
  }else{
    gameRect.shapeColor = "blue";
    movingRect.shapeColor = "blue";
  }

  drawSprites();
}
