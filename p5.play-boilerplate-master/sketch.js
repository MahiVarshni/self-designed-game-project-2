var rider, riderImg;
var bgImg, logImg, coinImg;
var ground, log, coin;
var monster,monsterImg;
var coinsGroup,monsterGroup;

function preload() {

  bgImg = loadImage("assets/Forest1.jpg");
  riderImg = loadAnimation("assets/giphy 1.png", "assets/giphy 2.png", "assets/giphy 3.png", "assets/giphy 4.png", "assets/giphy 4.png");
  logImg = loadImage("assets/log.png");
  coinImg = loadAnimation("assets/coin1.png", "assets/coin2.png", "assets/coin3.png", "assets/coin4.png", "assets/coin5.png", "assets/coin6.png", "assets/coin7.png", "assets/coin8.png", "assets/coin9.png", "assets/coin10.png", "assets/coin11.png", "assets/coin12.png");
  monsterImg=loadAnimation("assets/warrior1.png","assets/warrior2.png","assets/warrior3.png","assets/warrior4.png","assets/warrior5.png","assets/warrior6.png","assets/warrior7.png","assets/warrior8.png","assets/warrior9.png","assets/warrior10.png","assets/warrior11.png","assets/warrior12.png");
}
function setup() {
  createCanvas(800, 400);
  bg = createSprite(750, 30,300, 200);
  bg.addImage(bgImg);
  bg.scale = 0.5;
  bg.velocityX = -4;
//  bg.x = bg.width / 4;


  rider = createSprite(70, 320, 20, 50);
  rider.addAnimation("abc", riderImg);
  ground = createSprite(200, 380, 800, 10);
  ground.visible = false;

  coinsGroup=new Group();
  monsterGroup=new Group();
}

function draw() {
  background("lightblue");
  drawSprites();

  textSize(20);
  text(mouseX + "," + mouseY, mouseX, mouseY);


  if (keyDown("UP_ARROW")) {
    rider.velocityY = -10;
  }

  if(rider.isTouching ){

  }

 // if (bg.x < 0) {
 //bg.x = bg.width/16;
    
  //}
  spawnObstacles();
  spawnCoins();
  spawnMonster();
  rider.velocityY = rider.velocityY + 0.8;
  rider.collide(ground);

}

function spawnObstacles() {
  if (frameCount % 150 === 0) {
    log = createSprite(810, 360, 10, 10);
    log.velocityX = -5;
    log.addImage(logImg);
    log.scale = 0.2;
  }
}

function spawnCoins() {
  if (frameCount % 200 === 0) {
    coin = createSprite(810, random(220, 320), 10, 10);
    coin.velocityX = -2;
    coin.addAnimation("bcd", coinImg);
    coin.scale = 0.4;
  }
}

function spawnMonster(){
  if(frameCount%250 ===0){
    monster=createSprite(810,360,10,10);
    monster.velocityX=-3;
    monster.addAnimation("cde",monsterImg);

  }


}