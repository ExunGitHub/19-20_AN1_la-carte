let bg
let y = 0
let myReactiveRect;
let hisReactiveRect;


function setup() {

    bg = loadImage('back.png');
    createCanvas(1920, 1039);
    myReactiveRect = new ReactiveRect(1490, 250, 50, color(255, 0, 0));
    hisReactiveRect = new ReactiveRect(1730, 418, 50, color(0, 255, 0));
    
    input = createInput();
    input.position(20,65);
    
    button = createButton('submit');
    button.position(input.x + input.width, 65);
    button.mousePressed(greet);
    
    greeting = createElement('h2', 'what is your name ?');
    greeting.position(20, 5);
    
    
}

function greet() {
    
    const name = input.value();
greeting.html('hello' + name + '!');
input.value('');

for (let i = 0; i < 200; i++) {
push();
    fill(random(255), 255, 255);
    translate(random(width), random(height));
    rotate(random(2 * PI));
    text(name, 0, 0);
    pop();
}
}


function draw() {
    
  
    background(bg);
    
    stroke(random(255), random(255), random(255));
    line(0, y, width, y);
    
    y++;
    if (y > height) {
        y = 0;
        
    }
    
     myReactiveRect.draw();
    hisReactiveRect.draw();
    
    
    
}
    
class ReactiveRect {
    
    constructor(posX, posY, size, activeColor){
        this.posX = posX;
        this.posY = posY;
        this.size = size;
        this.activeColor = activeColor;
        this.active = false;
        
        
    }
    
    isHover(){
        
        return mouseX > this.posX &&
        mouseX < this.posX + this.size &&
        mouseY > this.posY &&
        mouseY < this.posY + this.size;
        
    }
    
    isClicked(){
        return this.isHover() && mouseIsPressed;
    }
    
    draw(){
        
  updatePixels();
        
        if(this.isClicked() ) {
           this.active = true;
            
        } 
        
        if(this.active) {
            
            fill(this.activeColor);
            fill(random(255), random(255), random(255));
            ellipse(mouseX, mouseY, 50, 50);
            
        }
        
        else {
            fill(50);
        }
        
        
        
        rect(this.posX, this.posY, this.size, this.size);
        
    }
    
}