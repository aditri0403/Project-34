var dog,happydog,database,foodS,foodstock,food;

function preload()
{
  vpetimg1=loadImage("images/dogImg.png");
  vpetimg2=loadImage("images/dogImg1.png");
}

function setup() {
  database = firebase.database();
  createCanvas(500, 500);
  food = createSprite(250,250,10,10);
  foodstock = database.ref('food/position');
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
  food.x = position.x;
  food.y = position.y;
}


