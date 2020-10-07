var gameState = 0;
var playerCount;
var database;
var player,form;
var allPlayers;
var car1,car2,car3,car4,cars;
var  car1img, car2img, car3img, car4img, groundimg, trackimg;
function preload(){
    car1img = loadImage("car1.png")
    car2img = loadImage("car2.png")
    car3img = loadImage("car3.png")
    car4img = loadImage("car4.png")
    groundimg = loadImage("ground.png")
    trackimg = loadImage("track.png")
}
function setup(){
database = firebase.database();
createCanvas(displayWidth,displayHeight-30);
game = new Game();
game.getState();
game.start();
}
 function draw(){
 if(gameState === 1 ){

    clear();
game.play();
 }

 if(playerCount === 4){
     game.update(1)
 }
 if(gameState === 2 ){

  game.end();
 }
 }














