class Game{
constructor(){


}



getstate(){
    var gameStateref = database.ref('gameState').on("value",(data)=>{
        gameState = data.val()
    })
    
    
    
    }
    
    updategameState(state){
        database.ref('/').update({
          gameState:state      
        })
        }


async start(){

if(gameState===0){
    player = new Player();
    var playerCountref = await database.ref('playerCount').once("value")
if(playerCountref.exists()){

playerCount = playerCountref.val()
player.getcount()


}


form = new Form()
form.display();
}


car1 = createSprite(500,200,20,20)
car2 = createSprite(400,200,20,20)
car3 = createSprite(600,200,20,20)
car4 = createSprite(700,200,20,20)
cars=[car1,car2,car3,car4]

car1.addImage("car1img",car1img)
car2.addImage("car2img",car2img)
car3.addImage("car3img",car3img)
car4.addImage("car4img",car4img)


}


play(){
form.hide()


player.getrank();


player.playerinfo()

if(allplayers!==undefined){


background("black")

image(trackimg,0,-displayHeight*4,displayWidth,displayHeight*5)


var index = 0;
var x = 170;
var y ;




for(var i in allplayers){

index = index+1
x = x+250
y = displayHeight-allplayers[i].distance
cars[index-1].x = x
cars[index-1].y = y

if(index===player.index){
    fill("cyan")
    ellipse (x,y,100,100)
    cars[index-1].shapecolor = "cyan";



    camera.position.x = displayWidth/2
camera.position.y = cars[index-1].y





}

}

}
if(keyDown(UP_ARROW)){
player.distance+=10
player.update()

}

if(player.distance>4200){

gameState = 2

player.rank += 1
player.updaterank(player.rank)




}
drawSprites();




}

end(){
 
 
    console.log("gameended")
console.log(player.rank) 
}
}