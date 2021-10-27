//Create variables here
var dog, database;
var dogImg, dogHappyImg;
var foodS;
function preload()
{
	//load images here
  dogImg=loadImage('images/Dog.png');
  dogHappyImg=loadImage('images/happydog.png');

}

function setup() {
  database = firebase.database()
	createCanvas(500, 500);
  dog = createSprite(250,200,125,125);
  dog.addImage(dogImg);
  dog.scale=0.2;


  foodStock=database.ref("Food");
  foodStock.on("value",readStock);

}


function draw() {  
  background(46, 139, 87);
  
  if (keyDown(UP_ARROW)) {
    writeStock(foodS);
    dog.addImage(dogHappyImg);
  }
  drawSprites();
 
  //add styles here
  textSize(5)
  fill("white")
  textSize(17)
  text("Note:Press Up arrow to feed milk to the dog",100,60);
  text("Milk remaining: "+ foodS, 158, 350)
}

function readStock(data) {
  foodS=data.val();

}

function writeStock(x) {

  if(x<=0){
    x=o;

  }else{
    x=x-1;
  }
  database.ref('/').update({
    Food:x
  })
}




