
var movingRect, fixedRect;
var go1, go2, go3, go4;


function setup() {
  createCanvas(1200,800);
  movingRect = createSprite(600,200,50,100);
  fixedRect = createSprite(400,200,100,50);
  
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";

  movingRect.debug = true;
  fixedRect.debug = true;


  go1 = createSprite(100,100,50,50);
  go2 = createSprite(200,100,50,50);
  go3 = createSprite(0,600,50,50);
  go4 = createSprite(400,600,50,50);

  go3.velocityX = 5;  // -5
  go4.velocityX = -5; // 5
  

  go1.shapeColor = "yellow";
  go2.shapeColor = "yellow";
  go3.shapeColor = "yellow";
  go4.shapeColor = "yellow";
  
  
}

function draw() {
  background("black");  
  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

bounceOff(go3, go4);
  
  if(isTouching(movingRect, go1))
  {
      go1.shapeColor = "pink";

  }

  else
  {
    go1.shapeColor = "yellow";
  
  }
 drawSprites();
}


function isTouching(ob1, ob2)
{

  if(ob1.x - ob2.x < ob2.width/2 + ob1.width/2 &&
    ob2.x - ob1.x <ob2.width/2+ob1.width/2  &&
    ob1.y - ob2.y< ob2.height/2 + ob1.height/2 &&
    ob2.y - ob1.y < ob2.height/2 + ob1.height/2
    
    )
  {
      return true;
  }

  else
  {
      return false;
  }


}

function bounceOff(ob1, ob2){

if ( ob1.y - ob2.y< ob2.height/2 + ob1.height/2 &&
  ob2.y - ob1.y < ob2.height/2 + ob1.height/2 )
  {
    ob1.velocityY= ob1.velocityY *(-1); ///-5 * -1 = 5
    ob2.velocityY= ob2.velocityY * (-1);
}

if (ob1.x - ob2.x < ob2.width/2 + ob1.width/2 &&
  ob2.x - ob1.x <ob2.width/2+ob1.width/2)
  {
    ob1.velocityX= ob1.velocityX *(-1);
    ob2.velocityX= ob2.velocityX *(-1);
  }
}
 