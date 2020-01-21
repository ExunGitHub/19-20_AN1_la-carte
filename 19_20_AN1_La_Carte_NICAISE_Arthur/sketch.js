let img1; let img2;
let cello1; let cello2;
let c; let x; let y;
let P1; let P2; let P3;
let P4; let P5; let P6;

function preload() {
    img1 = loadImage("img/2.jpg");
    img2 = loadImage("img/1.jpg");
}

function setup() {
    createCanvas(1279.5, 720);
   
    cello1 = createGraphics(width, height);
    cello2 = createGraphics(width, height);
    cello1.image(img1, 0, 0, width, height);
    
    p1 = document.querySelector("#P1");
    p2 = document.querySelector("#P2");
    p3 = document.querySelector("#P3");
    p4 = document.querySelector("#P4");
    p5 = document.querySelector("#P5");
    p6 = document.querySelector("#P6");
}

function draw() { 
    image(cello1, 0, 0, width, height);
    cello2.image(img2, -639.75, 0, width, height);
    image(cello2, 639.75, 0, width, height);
        
    noFill();
    stroke(255,255,255);
    strokeWeight(2.5);
    ellipse(639.75, 360, 35, 35);
    line(639.75,0,639.75,342.5);
    line(639.75,377.5,639.75,720);
    triangle(639.75-3,368.75,639.75-8.75-3,360,639.75-3,351.25);
    triangle(639.75+3,368.75,639.75+8.75+3,360,639.75+3,351.25);
    
    if (mouseX < 480 && mouseY < 853) {
    cursor('grab');
    }
    
    if(mousePressed) {}
}

function mouseMoved() {
    
    if(x>300) {
        noFill(); noStroke();
        rect(0,55,300,330);
        if(mouseX>0 && mouseX<0+300 && mouseY>55 && mouseY<55+330) {
            p1.classList.remove("hide");
        } else { p1.classList.add("hide"); }
    }
    
    if(x>1000) {
        noFill(); noStroke();
        rect(675,0,320,50);
        if(mouseX>675 && mouseX<675+320 && mouseY>0 && mouseY<0+50) {
            p2.classList.remove("hide");
        } else { p2.classList.add("hide"); }
    }
    
    if(x>950) {
        noFill(); noStroke();
        rect(500,325,450,250);
        if(mouseX>500 && mouseX<500+450 && mouseY>325 && mouseY<325+250) {
            p3.classList.remove("hide");
        } else { p3.classList.add("hide"); }
    }
    
    if(x<1279.5-300) {
        noFill(); noStroke();
        rect(1279.5-300,55,300,330);
        if(mouseX>1279.5-300 && mouseX<1279.5-300+300 && mouseY>55 && mouseY<55+330) {
            p4.classList.remove("hide");
        } else { p4.classList.add("hide"); }
    }
    
    if(x<550) {
        noFill(); noStroke();
        rect(550,200,425,50);
        if(mouseX>550 && mouseX<550+425 && mouseY>200 && mouseY<200+50) {
            p5.classList.remove("hide");
        } else { p5.classList.add("hide"); }
    }
    
    if(x<=100) {
        noFill(); noStroke();
        rect(100,125,425,425);
        if(mouseX>100 && mouseX<100+425 && mouseY>125 && mouseY<125+425) {
            p6.classList.remove("hide");
        } else { p6.classList.add("hide"); }
    }
}

function mouseDragged() {
    x = mouseX;
    
    if(mouseX<100) {
        x = 100;
    }
    
    if(mouseX>1179.5) {
        x = 1179.5;
    }
    
    if(mouseX>1279.5) {
        return false;
    }
    
    if(mouseX<0) {
        return false;
    }
    
    if(mouseY>720) {
        return false;
    }
    
    if(mouseY<0) {
        return false;
    }
    
    image(cello1, 0, 0, width, height);
    cello2.image(img2, -x, 0, width, height);
    image(cello2, x, 0, width, height);
    
    noFill();
    stroke(255,255,255);
    strokeWeight(2.5);
    ellipse(x, 360, 35, 35);
    line(x,0,x,342.5);
    line(x,377.5,x,720);
    triangle(x-3,368.75,x-8.75-3,360,x-3,351.25);
    triangle(x+3,368.75,x+8.75+3,360,x+3,351.25);
    
    
    
    return false;
}

