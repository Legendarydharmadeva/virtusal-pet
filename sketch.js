//Create variables here
var dog, happyDog;
var database;
var foods, foodStock; 

function preload()
{
  //load images here

}

function setup() {
 var canvas = createCanvas(500,500);
foodStock = database.ref('Food');
foodStock.on("value",readStock);
 
 var dog = createSprite(250,250,20,20);
 dog.addImage("happydog.png");
  
}


function draw() {  
  background(46,139,87);

  drawSprites();
  //add styles here
  

}

function readStock(data){
  foodS = data.val();
}

function writeStock(){

if(x<=0){
  x=0;
}else{
  x=x-1;
}


  database.ref('/').upDate({
    Food:x
  })
}

function keyPressed(){
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogHappy);
  }
}

function showError(){
  console.log("error");
}

