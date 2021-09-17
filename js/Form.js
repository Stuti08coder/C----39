class Form{
constructor(){

   this.title = createElement('h1')
   this.input = createInput("Enter Your Name")
   this.button = createButton("PLAY")
   this.greeting = createElement('h2')
   this.reset = createButton("RESET")
}
display(){

this.title.html("Car Racing Game")

this.title.position(width/2,10)

this.input.position(width/2,height/2 -100)

this.button.position(width/2 +50,height/2)
this.reset.position(width-100,200)


this.button.mousePressed(()=>{
  this.input.hide()
  this.button.hide()

  player.name = this.input.value()


playerCount+= 1
player.index = playerCount
player.update()



player.updateplayercount(playerCount)
    this.greeting.position(width/2,height/2)
    this.greeting.html("Welcome")
    
})


this.reset.mousePressed(()=>{
  game.updategameState(0)

  player.updateplayercount(0)
player.updaterank(0)

})


}




hide(){
 
  this.input.hide()
  this.greeting.hide()
  this.button.hide()
  this.title.hide()

}





















}