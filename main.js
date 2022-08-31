//variaveis globais
var eu,nave;
var space,fundo;






function preload(){
    fundo = loadAnimation("fundo.gif");
    nave = loadAnimation("nave.gif");



}



function setup(){
    createCanvas(1000,300);
    space = createSprite(300,150,100,100);
    space.addAnimation("oi",fundo);
    space.scake = 10;
    eu = createSprite(300,270,20,20);
    eu.addAnimation("ola",nave);
    eu.scale = 0.1;



eu.debug = true;
}





function draw(){


    drawSprites();
}