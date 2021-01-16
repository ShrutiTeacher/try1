
var graden,gardenImage, jerryTeasing, jerryeatingCheese, jerry,tom, tomWalking, tomSitting; 
function preload() {
    gardenImage = loadImage("garden.png");
   jerryTeasing = loadImage("jerryThree.png")
    tomSitting = loadImage("tomOne.png");
    tomWalking = loadImage("tomTwo.png")
    jerryeatingCheese = loadImage("jerryOne.png")
}

function setup(){
    createCanvas(1000,800);
 garden = createSprite(500,400,1000,800);
   garden.addImage(gardenImage)
  jerry=createSprite(75,650,50,50);
  tom=createSprite(925,650,50,50);
  jerry.addImage(jerryeatingCheese);
  tom.addImage(tomSitting);
  tom.scale=0.1;
  jerry.scale=0.1;
}

function draw() {
    background(255);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
    keyPressed();
}


function keyPressed(){
if(keyDown(LEFT_ARROW)){
  tom.velocityX= -5;
  tom.addAnimation("tom walking",tomWalking);
  tom.changeAnimation("tom walking");
  jerry.addImage(jerryTeasing);
  jerry.changeImage(jerryTeasing);

}
if(keyWentUp(LEFT_ARROW)){
  tom.velocityX=0;
  tom.changeImage(tomSitting);
}

}
