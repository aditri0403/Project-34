var dog,happydog,database,foodS,foodstock;

function preload()
{
  vpetimg1=loadImage("images/dogImg.png");
  vpetimg2=loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(500, 500);
  database = firebase.database;

  foodstock = database.ref('food');
  foodstock.on("value",readstock);
  dog = addImage(vpetimg1);

}


function draw() {  
  background(46,139,87);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(vpetimg2);
  }
  drawSprites();
  textSize(20);
  fill("black");
}
function writeStock(x){
  database.ref('food').set({ 
    x: food.x + x,
    y: food.y + y
 })
}
function readstock(data){
  foodS = data.val();
}


