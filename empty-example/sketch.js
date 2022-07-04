let paleta = ["#ccf381", "#4831d4", "#fefefe", "#101010"];
function windowResized() {
  resizeCanvas(windowWidth*0.965, windowHeight*0.965);
}

var canvas;
var pg;
let randomVel;
let randomX;
let randomY;
let randomPomX;
let randomPomY;
let for1;
var crticeX1, crticeY1, crticeL1, crticeSmjer1, crticeBoja1;
var crticeX2, crticeY2, crticeL2, crticeSmjer2, crticeBoja2;
var crticeX3, crticeY3, crticeL3, crticeSmjer3, crticeBoja3;
var kojiOblik1, kojiOblik2, kojiOblik3;


function miks(){ 
  
  randomVel1 = random(90,115);
  randomVel2 = random(34,66);
  randomX1 = random(0.6, 0.8);
  randomY1 = random(0.4, 0.6);
  randomX2 = random(0.1, 0.4);
  randomY2 = random(0.5, 0.8);
  randomPomX = random(10);
  randomPomY = random(10);
  if(randomPomX>5) randomPomX = random(-0.02, -0.01);
  else randomPomX = random(0.01, 0.02); 
  if(randomPomY>5) randomPomY = random(-0.04, -0.01);
  else randomPomY = random(0.01, 0.02); 
  crticeX1 = random(windowWidth*0.1, windowWidth*0.3);
  crticeY1 = random(windowHeight*0.7, windowHeight*0.9);
  crticeL1 = random(1, 3);
  crticeSmjer1 = random(10);
  crticeBoja1 = random(10);
  crticeX2 = random(windowWidth*0.45, windowWidth*0.55);
  crticeY2 = random(windowHeight*0.7, windowHeight*0.9);
  crticeL2 = random(1, 3);
  crticeSmjer2 = random(10);
  crticeBoja2 = random(10);
  crticeX3 = random(windowWidth*0.8, windowWidth*0.9);
  crticeY3 = random(windowHeight*0.3, windowHeight*0.4);
  crticeL3 = random(1, 3);
  crticeSmjer3 = random(10);
  crticeBoja3 = random(10);
  kojiOblik1 = random(30);
  kojiOblik2 = random(30);
  kojiOblik3 = random(30);
  windowResized();
}


function setup() {
  canvas = createCanvas(windowWidth*0.965, windowHeight*0.965);
  canvas.position(0, 0);
  canvas.style("z-index", "-1");

  var gumb = createButton("Klikni me");
  gumb.position(110, 375);
  gumb.mousePressed(miks);
 

  noStroke();
  rectMode(CENTER); 

  randomVel1 = random(90,115);
  randomVel2 = random(34,66);
  randomX1 = random(0.6, 0.8);
  randomY1 = random(0.4, 0.6);
  randomX2 = random(0.1, 0.4);
  randomY2 = random(0.5, 0.8);
  randomPomX = random(10);
  randomPomY = random(10);
  if(randomPomX>5) randomPomX = random(-0.02, -0.01);
  else randomPomX = random(0.01, 0.02); 
  if(randomPomY>5) randomPomY = random(-0.04, -0.01);
  else randomPomY = random(0.01, 0.02); 
  crticeX1 = random(windowWidth*0.1, windowWidth*0.3);
  crticeY1 = random(windowHeight*0.7, windowHeight*0.9);
  crticeL1 = random(1, 3);
  crticeSmjer1 = random(10);
  crticeBoja1 = random(10);
  crticeX2 = random(windowWidth*0.45, windowWidth*0.55);
  crticeY2 = random(windowHeight*0.7, windowHeight*0.9);
  crticeL2 = random(1, 3);
  crticeSmjer2 = random(10);
  crticeBoja2 = random(10);
  crticeX3 = random(windowWidth*0.8, windowWidth*0.9);
  crticeY3 = random(windowHeight*0.3, windowHeight*0.4);
  crticeL3 = random(1, 3);
  crticeSmjer3 = random(10);
  crticeBoja3 = random(10);
  kojiOblik1 = random(30);
  kojiOblik2 = random(30);
  kojiOblik3 = random(30);
 
   
}


function crtice(x, y, l, smj, boja){ 
  strokeJoin(MITER);
  noFill();
  if(windowWidth<800){
    l = 7;
    strokeWeight(1);
  }
  else{
    l = 11;
    strokeWeight(1);
  }
  if(boja<5)
    stroke(paleta[3]);
  else
    stroke(paleta[0]);


  if(smj<5){
  line(x, y, x+l, y+0);
  line(x+l, y+0, x+l, y+l);
  line(x+l, y+l, x+2*l, y+l);
  line(x+2*l, y+l, x+2*l, y+2*l);
  line(x+2*l, y+2*l, x+3*l, y+2*l);
  line(x+3*l, y+2*l, x+3*l, y+3*l);
  line(x+3*l, y+3*l, x+4*l, y+3*l);
  line(x+4*l, y+3*l, x+4*l, y+4*l);
  }

  else{
    line(x, y, x-l, y);
    line(x-l, y, x-l, y+l);
    line(x-l, y+l, x-2*l, y+l);
    line(x-2*l, y+l, x-2*l, y+2*l);
    line(x-2*l, y+2*l, x-3*l, y+2*l); 
  } 
}


function kruzici(x, y){
  var pom = 10;
  noFill();
  strokeWeight(1);
  stroke(paleta[3]);
  if(randomPomX>0) stroke(paleta[2]);
  var vel = 10;
  if(windowWidth<800) {vel = 7; pom = 10;}
  else {vel = 12; pom = 19;}
  ellipse(x, y, vel, vel);
  ellipse(x+pom, y, vel, vel);
  ellipse(x-+pom, y, vel, vel); 
}

function tockice(x, y){
    push();
    translate(x, y);
    noFill();
    stroke(paleta[2]);
    var vel = 120;
    var razm = 8;
    for(var i = 0; i < vel; i+=razm){
      for(var j = 0; j < vel; j+=razm){
        ellipse(i, j, 1, 1);
      }
    }

    pop();
}
 
var vr = 0;
var t1;
function draw() {   
  var rad1 = randomVel1*windowWidth/500;
  var rad2 = randomVel2*windowWidth/900;
  var pomX = windowWidth*randomPomX;
  var pomY = windowWidth*randomPomY;
  t1 = createVector(windowWidth*randomX1, windowHeight*randomY1);
  t2 = createVector(windowWidth*randomX2, windowHeight*randomY2);
  vr+=1;
  background(paleta[1]); 

  //crtanje oblika
  if(kojiOblik1 < 10)
  crtice(crticeX1, crticeY1, 3, crticeSmjer1, crticeBoja1);
else if(kojiOblik1 < 20)
  kruzici(crticeX1, crticeY1);
else
  tockice(crticeX1, crticeY1); 


if(kojiOblik2 < 10)
crtice(crticeX2, crticeY2, 3, crticeSmjer2, crticeBoja2);
else if(kojiOblik2 < 20)
kruzici(crticeX1, crticeY1);
else
tockice(crticeX1, crticeY1); 


if(kojiOblik3 < 10)
crtice(crticeX3, crticeX3, 3, crticeSmjer3, crticeBoja3);
else if(kojiOblik3 < 20)
kruzici(crticeX3, crticeY3);
else
tockice(crticeX3, crticeX3); 

  ////kvadrati
  strokeWeight(1);
  stroke(paleta[2]);
  noFill();
  rect(t1.x+pomX, t1.y+pomY, rad1, rad1);
  fill(paleta[0]);
  noStroke();
  rect(t1.x, t1.y, rad1, rad1);

  
  strokeWeight(1);
  stroke(paleta[2]);
  noFill();
  rect(t2.x+pomX/3, t2.y+pomY/3, rad2, rad2);
  fill(paleta[0]);
  noStroke();
  rect(t2.x, t2.y, rad2, rad2);
  
  
  ////kursor
  let c = color(paleta[0]);
  noStroke();
  push();
  translate(mouseX, mouseY);
  var brz = dist(mouseX, mouseY, pmouseX, pmouseY);
  var kut = map(brz, 0, 680, 1, 15);
  fill(paleta[0]); 
  brz = map(brz, 0, 80, 51, 5); 
  var nn = 10*noise(vr*0.01);
  rotate(radians(vr*0.7)+nn*0);
  krug(); 
  pop();   
   
}

 
var tajm = 0;
var magnit = 0;
function krug(){ 
  tajm+=2;
   
  noStroke();
  fill(paleta[0]);
  noFill();
  strokeWeight(1);
  stroke(paleta[0]);
  var pom = 90; 
  beginShape();  
  for(var kut = 0; kut <= 360; kut+=pom){   
    magnit = 25+7*sin(radians(tajm*2)+0.3);
    var x = magnit * cos(radians(kut));
    var y = magnit * sin(radians(kut)); 
    vertex(x, y); 
  }
  endShape(); 


  beginShape();  
  for(var kut = 0; kut <= 360; kut+=pom){   
    magnit = 21+7*sin(radians(tajm*2)+0.6);
    var x = magnit * cos(radians(kut));
    var y = magnit * sin(radians(kut)); 
    vertex(x, y); 
  }
  endShape(); 



  beginShape();  
  for(var kut = 0; kut <= 360; kut+=pom){   
    magnit = 17+7*sin(radians(tajm*2)+0.9);
    var x = magnit * cos(radians(kut));
    var y = magnit * sin(radians(kut)); 
    vertex(x, y); 
  }
  endShape(); 


  beginShape();  
  for(var kut = 0; kut <= 360; kut+=pom){   
    magnit = 13+7*sin(radians(tajm*2)+1.2);
    var x = magnit * cos(radians(kut));
    var y = magnit * sin(radians(kut)); 
    vertex(x, y); 
  }
  endShape();  
}
