var mario,marioImg;
var platformGroup;
var packageIMG, packageSprite, helicopter, helicopterIMG;

function preload(){
  marioImg=loadImage("1.png")
}

function setup() {
  createCanvas(windowWidth,668);
  var countDistanceX = 0;
  var platform;
  packageSprite=createSprite(400, 50, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopter=createSprite(400, 50, 10,10);
	helicopter.addImage(helicopterIMG)
	helicopter.scale=0.6
  var gap;
  mario = new Player();
  mario.addImage(marioImg)
  platformGroup= createGroup();
  for (var i=0;i<14;i++)
	 {
      platform = new Platform(countDistanceX);
      platformGroup.add(platform.spt);
      gap=random([0,0,0,0,80]);
      countDistanceX = countDistanceX + platform.rw + gap; 
   }
 
}

function draw() {
  background('skyblue');
  translate(-mario.spt.x+width/2,0);
  mario.applyGravity();
  mario.spt.collide(platformGroup);
  drawSprites();
  if(keyDown("right")){
    mario.MoveRight();
  }
  if(keyDown("left")){
    mario.MoveLeft();
  }
  if(keyDown("up")){
    mario.Jump();
  }
}



