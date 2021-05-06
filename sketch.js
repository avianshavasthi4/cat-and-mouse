var cat
var mouse
var canvas
var bg

function preload() {
    //load the images here
bg = loadImage("images/garden.png");

cat_img1 = loadAnimation("images/cat1.png");
cat_img2 = loadAnimation("images/cat2.png","images/cat3.png");
cat_img3 = loadAnimation("images/cat4.png");

mouse_img1 = loadAnimation("images/mouse1.png");
mouse_img2 = loadAnimation("images/mouse2.png","images/mouse3.png");
mouse_img3 = loadAnimation("images/mouse4.png");




}

function setup(){
  canvas =  createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(670,730);

    cat.addAnimation("catSleeping",cat_img1);
    cat.scale = 0.2;

    mouse = createSprite(200,730);

    mouse.addAnimation("mouseStanding",mouse_img1);
    mouse.scale = 0.15;

    console.log (cat);
    console.log(mouse);
}

function draw() {
    background(bg);

    if(cat.x - mouse.x<(cat.width - mouse.width)/2){
        cat.velocityX = 0;
        cat.addAnimation("superCatspeed",cat_img3);
        cat.changeAnimation("superCatspeed");
        
        mouse.addAnimation("ohNo",mouse_img3);
        mouse.changeAnimation("ohNo");
        
    }

    drawSprites();
}


function keyPressed(){

  if(keyCode === LEFT_ARROW){
      cat.velocityX = -5;
      cat.addAnimation("tomRunning",cat_img2);
      cat.changeAnimation("tomRunning");

      mouse.addAnimation("mouseTeasing",mouse_img2);
      mouse.changeAnimation("mouseTeasing");
  }  

}
