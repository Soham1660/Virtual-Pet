//Create variables here
var dog1;
var happyDog;
var database;
var FoodS;
var foodStock;
function preload()
{
  dog1 = loadImage("images/dogImg.png");
  happyDog1 = loadImage("images/dogImg1.png");
	//load images here
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();
  dog = createSprite(200,200,10,10);
  dog.addImage(dog1);
  dog.scale = 0.5;
  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
  
}


function draw() {  
  background(46,139,87);

  if (keyDown(UP_ARROW)) {
    dog.addImage(happyDog1);
    writeStock(FoodS);
    
  }

  drawSprites();
  //add styles here
  text("Note: Press UP Arrow to feed the dog",100,450);

}
function readStock(data) {
  FoodS = data.val();
}

function writeStock(x) {
  if (x<= 0 ) {
    x = 0
  }
  else {
    x = x- 1;
  }
  database.ref('/').update({
    Food:x
  })
}