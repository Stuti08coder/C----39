var database;
var playerCount = 0;
var form;
var game;
var player;
var distance = 0;
var allplayers
var gameState = 0
var car1,car2,car3,car4,cars;
var car1img,car2img,car3img,car4img,trackimg;
function preload(){

    car1img = loadImage("images/car1.png")
car2img = loadImage("images/car2.png")
car3img = loadImage("images/car3.png")
car4img = loadImage("images/car4.png")
trackimg = loadImage("images/track.jpg")


}

function setup(){
database=firebase.database()
createCanvas(windowWidth,windowHeight);
game = new Game()
game.getstate()
game.start()



}

function draw(){
  //  background("red");

if(playerCount===4){

    game.updategameState(1)
}


if(gameState===1){
    game.play()
}

if(gameState===2){
    game.end();
//console.log("gameended")
}




  
}
