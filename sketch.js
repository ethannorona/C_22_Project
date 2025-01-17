var starImg, starImg2, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	starImg2 = loadImage("images/starImage.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	// fairyVoice.play();

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

	fairy.velocityX = 0;

	if(starBody.position.y > 470){
		starBody.position.y = 480;
		fairyVoice.play();
		Matter.Body.setStatic(starBody , true);
	}

	keyPressed();

  drawSprites();

}

function keyPressed() {
	//write code here
	if(keyCode === LEFT_ARROW){
		fairy.velocityX = fairy.velocityX - 3;
	}

	if(keyCode === RIGHT_ARROW){
		fairy.velocityX = fairy.velocityX + 3;
	}

	if(keyCode === DOWN_ARROW){
		star.addImage("super_star", starImg2);
		star.changeImage("super_star", starImg2);
		star.scale = 0.05;
		star.x = starBody.position.x;
		star.y = starBody.position.y;
		Matter.Body.setStatic(starBody , false);
	}
}
