var dog,happydog,database,foodS,foodstock;

function preload()
{
  vpetimg1=loadImage("images/dogImg.png");
  vpetimg2=loadImage("images/dogImg1.png");
}

function setup() {
  database = firebase.database();
  createCanvas(500, 500);
  dog = createSprite(250,250,10,10);
  dog.addImage(vpetimg1);
  foodstock = database.ref('food');
  foodstock.on("value",readstock);
}


function draw() {  
  background(46,139,87);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(vpetimg2);
  }
  drawSprites();
}
function writeStock(x){
  if(x<=0){
    x=0;
  }
  else{
    x = x-1;
  }
 database.ref('/').update({
   food : x
 })
}
function readstock(data){
  foodS = data.val();
}


