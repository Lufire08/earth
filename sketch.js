var diam1 = 0;
var diam2 = 300;
var diam3 = 0;
var diam4 = 500;

function setup() {
    // put setup code here
    createCanvas(500, 500);
   
}

function draw() {
  // put drawing code here
     background("black");
    
    fill("blue");
    stroke("green");
    strokeWeight(10);
    ellipse(diam3, diam4,diam2,diam2);
    
   
    fill("red");
    stroke("red");
    ellipse(mouseX,mouseY,diam1,diam1);
    
    fill("red");
    stroke("black");
    textSize(40);
    textFont("chiller");
    textStyle(ITALIC);
    textAlign(CENTER);
    text("CODE RED!", 100, 50);   
}

function mousePressed()  {
   if(diam1>400){
       diam3 = 0;
       diam4 = 0;
       diam2 = 0;
       diam1 = 800;
       
   }else{
    diam1=diam1+30;
   }
}