var garden;
var tom;
var jerry;
var tom1Image;
var tom2Image;
var tom3Image;
var tom4Image;
var jerry1Image;
var jerry2Image;
var jerry3Image;
var jerry4Image;
var gardenImage;

function preload() {
    //load the images here

    gardenImage = loadImage("garden.png");
    tom1Image = loadImage("cat1.png");
    tom2Image = loadImage("cat2.png");
    tom3Image = loadImage("cat3.png");
    tom4Image = loadImage("cat4.png");
    jerry1Image = loadImage("mouse1.png");
    jerry2Image = loadImage("mouse2.png");
    jerry3Image = loadImage("mouse3.png");
    jerry4Image = loadImage("mouse4.png");
}

function setup(){
    createCanvas(1000,1000);
    //create tom and jerry sprites here
    
    garden = createSprite(500,500,5,5);

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    garden.addImage(gardenImage);

    drawSprites();
    
    text(mouseX + ',' + mouseY, 10,45);
}


function keyPressed(){

  //For moving and changing animation write code here

  if(keyDown === LEFT_ARROW){
      tom.velocityX = -5;
      tom.addAnimation("tomRunning",tom2Image);
      tom.changeAnimation("tomRunning");
  }

}
