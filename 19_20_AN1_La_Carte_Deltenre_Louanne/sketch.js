

let img;
let img2;
let mouse; 	
let monAnimation = [];
let monAnimation2 = [];
let cello;
let oreille;
let p1;
let p2;
let p3;
let p4;

function preload() { // PUSH ajoute une valeur à la fin du tableau
	monAnimation.push (loadImage ('animation_tête_testbis2/0001.png'));
	monAnimation.push (loadImage ('animation_tête_testbis2/0002.png'));
	monAnimation.push (loadImage ('animation_tête_testbis2/0003.png'));
	monAnimation.push (loadImage ('animation_tête_testbis2/0004.png'));
	monAnimation.push (loadImage ('animation_tête_testbis2/0005.png'));
	monAnimation.push (loadImage ('animation_tête_testbis2/0006.png'));
	monAnimation.push (loadImage ('animation_tête_testbis2/0007.png'));
	monAnimation.push (loadImage ('animation_tête_testbis2/0008.png'));
	monAnimation.push (loadImage ('animation_tête_testbis2/0009.png'));
	monAnimation.push (loadImage ('animation_tête_testbis2/0010.png'));
	monAnimation.push (loadImage ('animation_tête_testbis2/0011.png'));
	monAnimation.push (loadImage ('animation_tête_testbis2/0012.png'));
	monAnimation.push (loadImage ('animation_tête_testbis2/0013.png'));
	monAnimation.push (loadImage ('animation_tête_testbis2/0014.png'));
	monAnimation.push (loadImage ('animation_tête_testbis2/0015.png'));
	monAnimation.push (loadImage ('animation_tête_testbis2/0016.png'));
	monAnimation.push (loadImage ('animation_tête_testbis2/0017.png'));
	monAnimation.push (loadImage ('animation_tête_testbis2/0018.png'));
	monAnimation.push (loadImage ('animation_tête_testbis2/0019.png'));
	monAnimation.push (loadImage ('animation_tête_testbis2/0020.png'));
	monAnimation.push (loadImage ('animation_tête_testbis2/0021.png'));
	monAnimation.push (loadImage ('animation_tête_testbis2/0022.png'));
	monAnimation.push (loadImage ('animation_tête_testbis2/0023.png'));
	monAnimation.push (loadImage ('animation_tête_testbis2/0024.png'));
	monAnimation.push (loadImage ('animation_tête_testbis2/0025.png'));
	monAnimation.push (loadImage ('animation_tête_testbis2/0026.png'));
	monAnimation.push (loadImage ('animation_tête_testbis2/0027.png'));
	monAnimation.push (loadImage ('animation_tête_testbis2/0028.png'));
	monAnimation.push (loadImage ('animation_tête_testbis2/0029.png'));
	monAnimation.push (loadImage ('animation_tête_testbis2/0030.png'));
	monAnimation.push (loadImage ('animation_tête_testbis2/0031.png'));
	monAnimation.push (loadImage ('animation_tête_testbis2/0032.png'));
	monAnimation.push (loadImage ('animation_tête_testbis2/0033.png'));
	monAnimation.push (loadImage ('animation_tête_testbis2/0034.png'));
	monAnimation.push (loadImage ('animation_tête_testbis2/0036.png'));
	monAnimation.push (loadImage ('animation_tête_testbis2/0037.png'));
	monAnimation.push (loadImage ('animation_tête_testbis2/0038.png'));
	monAnimation.push (loadImage ('animation_tête_testbis2/0039.png'));
	monAnimation.push (loadImage ('animation_tête_testbis2/0040.png'));
	monAnimation.push (loadImage ('animation_tête_testbis2/0041.png'));
	monAnimation.push (loadImage ('animation_tête_testbis2/0042.png'));
	monAnimation.push (loadImage ('animation_tête_testbis2/0043.png'));
	monAnimation.push (loadImage ('animation_tête_testbis2/0044.png'));
	monAnimation.push (loadImage ('animation_tête_testbis2/0045.png'));
	monAnimation.push (loadImage ('animation_tête_testbis2/0046.png'));
	monAnimation.push (loadImage ('animation_tête_testbis2/0047.png'));
	monAnimation.push (loadImage ('animation_tête_testbis2/0048.png'));
	monAnimation.push (loadImage ('animation_tête_testbis2/0049.png'));
	monAnimation.push (loadImage ('animation_tête_testbis2/0050.png'));
	monAnimation.push (loadImage ('animation_tête_testbis2/0051.png'));
	monAnimation.push (loadImage ('animation_tête_testbis2/0052.png'));
	monAnimation.push (loadImage ('animation_tête_testbis2/0053.png'));
	monAnimation.push (loadImage ('animation_tête_testbis2/0054.png'));
	monAnimation.push (loadImage ('animation_tête_testbis2/0055.png'));
	monAnimation.push (loadImage ('animation_tête_testbis2/0056.png'));
	monAnimation.push (loadImage ('animation_tête_testbis2/0057.png'));
	monAnimation.push (loadImage ('animation_tête_testbis2/0058.png'));
	monAnimation.push (loadImage ('animation_tête_testbis2/0059.png'));
	monAnimation.push (loadImage ('animation_tête_testbis2/0060.png'));



	monAnimation2.push (loadImage ('animation_tête_testbis/0001.png'));
	monAnimation2.push (loadImage ('animation_tête_testbis/0002.png'));
	monAnimation2.push (loadImage ('animation_tête_testbis/0003.png'));
	monAnimation2.push (loadImage ('animation_tête_testbis/0004.png'));
	monAnimation2.push (loadImage ('animation_tête_testbis/0005.png'));
	monAnimation2.push (loadImage ('animation_tête_testbis/0006.png'));
	monAnimation2.push (loadImage ('animation_tête_testbis/0007.png'));
	monAnimation2.push (loadImage ('animation_tête_testbis/0008.png'));
	monAnimation2.push (loadImage ('animation_tête_testbis/0009.png'));
	monAnimation2.push (loadImage ('animation_tête_testbis/0010.png'));
	monAnimation2.push (loadImage ('animation_tête_testbis/0011.png'));
	monAnimation2.push (loadImage ('animation_tête_testbis/0012.png'));
	monAnimation2.push (loadImage ('animation_tête_testbis/0013.png'));
	monAnimation2.push (loadImage ('animation_tête_testbis/0014.png'));
	monAnimation2.push (loadImage ('animation_tête_testbis/0015.png'));
	monAnimation2.push (loadImage ('animation_tête_testbis/0016.png'));
	monAnimation2.push (loadImage ('animation_tête_testbis/0017.png'));
	monAnimation2.push (loadImage ('animation_tête_testbis/0018.png'));
	monAnimation2.push (loadImage ('animation_tête_testbis/0019.png'));
	monAnimation2.push (loadImage ('animation_tête_testbis/0020.png'));
	monAnimation2.push (loadImage ('animation_tête_testbis/0021.png'));
	monAnimation2.push (loadImage ('animation_tête_testbis/0022.png'));
	monAnimation2.push (loadImage ('animation_tête_testbis/0023.png'));
	monAnimation2.push (loadImage ('animation_tête_testbis/0024.png'));
	monAnimation2.push (loadImage ('animation_tête_testbis/0025.png'));
	monAnimation2.push (loadImage ('animation_tête_testbis/0026.png'));
	monAnimation2.push (loadImage ('animation_tête_testbis/0027.png'));
	monAnimation2.push (loadImage ('animation_tête_testbis/0028.png'));
	monAnimation2.push (loadImage ('animation_tête_testbis/0029.png'));
	monAnimation2.push (loadImage ('animation_tête_testbis/0030.png'));
	monAnimation2.push (loadImage ('animation_tête_testbis/0031.png'));
	monAnimation2.push (loadImage ('animation_tête_testbis/0032.png'));
	monAnimation2.push (loadImage ('animation_tête_testbis/0033.png'));
	monAnimation2.push (loadImage ('animation_tête_testbis/0034.png'));
	monAnimation2.push (loadImage ('animation_tête_testbis/0036.png'));
	monAnimation2.push (loadImage ('animation_tête_testbis/0037.png'));
	monAnimation2.push (loadImage ('animation_tête_testbis/0038.png'));
	monAnimation2.push (loadImage ('animation_tête_testbis/0039.png'));
	monAnimation2.push (loadImage ('animation_tête_testbis/0040.png'));
	monAnimation2.push (loadImage ('animation_tête_testbis/0041.png'));
	monAnimation2.push (loadImage ('animation_tête_testbis/0042.png'));
	monAnimation2.push (loadImage ('animation_tête_testbis/0043.png'));
	monAnimation2.push (loadImage ('animation_tête_testbis/0044.png'));
	monAnimation2.push (loadImage ('animation_tête_testbis/0045.png'));
	monAnimation2.push (loadImage ('animation_tête_testbis/0046.png'));
	monAnimation2.push (loadImage ('animation_tête_testbis/0047.png'));
	monAnimation2.push (loadImage ('animation_tête_testbis/0048.png'));
	monAnimation2.push (loadImage ('animation_tête_testbis/0049.png'));
	monAnimation2.push (loadImage ('animation_tête_testbis/0050.png'));
	monAnimation2.push (loadImage ('animation_tête_testbis/0051.png'));
	monAnimation2.push (loadImage ('animation_tête_testbis/0052.png'));
	monAnimation2.push (loadImage ('animation_tête_testbis/0053.png'));
	monAnimation2.push (loadImage ('animation_tête_testbis/0054.png'));
	monAnimation2.push (loadImage ('animation_tête_testbis/0055.png'));
	monAnimation2.push (loadImage ('animation_tête_testbis/0056.png'));
	monAnimation2.push (loadImage ('animation_tête_testbis/0057.png'));
	monAnimation2.push (loadImage ('animation_tête_testbis/0058.png'));
	monAnimation2.push (loadImage ('animation_tête_testbis/0059.png'));
	monAnimation2.push (loadImage ('animation_tête_testbis/0060.png'));



}
function setup() {

	noCursor();	


	createCanvas(windowWidth, windowHeight);
	cello = createGraphics(300, 300);
	p1 = document.querySelector("#P1");
	p2 = document.querySelector("#P2");
	p3 = document.querySelector("#P3");
	p4 = document.querySelector("#P4");
}

function draw() {
	image (monAnimation[0], 0, 0, width, height)
	cello.tint(245, 0, 0);
	cello.image (monAnimation2[0], -mouseX, -mouseY, width, height);
	//image (monAnimation[0], mouseX, mouseY);
	
	let imageTemp = monAnimation.shift();
	monAnimation.push(imageTemp);

	let imageTemp2 = monAnimation2.shift();
	monAnimation2.push(imageTemp2);	
	//oreille.draw();

	image(cello, mouseX, mouseY, 300, 300);

// carré P1
	noStroke();
	rect(650, 50, 600, 300);
	noFill();
	
	if( mouseX > 650 &&
		mouseX < 650 + 600 &&
		mouseY > 50 &&
		mouseY < 50 + 300
	){
 		p1.classList.remove("hide");
 		

	}else{
		p1.classList.add("hide");
	}

// carré P2
	noStroke();
	rect(650, 370, 600, 200);
	noFill();

	if( mouseX > 650 &&
		mouseX < 650 + 600 &&
		mouseY > 370 &&
		mouseY < 370 + 200
	){
 		p2.classList.remove("hide");

	}else{
		p2.classList.add("hide");
		
	}

// carré P3
	
	noStroke();
	rect(1400, 450, 90, 310);
	noFill();

	if( mouseX > 1400 &&
		mouseX < 1400 + 90 &&
		mouseY > 450 &&
		mouseY < 450 + 310
	){
 		p4.classList.remove("hide");

	}else{
		p4.classList.add("hide");
	}

// carré P4

	noStroke();
	rect(650, 600, 600, 200);
	noFill();

	if( mouseX > 650 &&
		mouseX < 650 + 600 &&
		mouseY > 600 &&
		mouseY < 600 + 200
	){
 		p3.classList.remove("hide");
 		
	}else{
		p3.classList.add("hide");
		
	}
	

}


class ReactiveRect {
	constructor(posX, posY, w, h , activeColor = color(255)) {
		this.posX = posX;
		this.posY = posY;
		this.w = w;
		this.h = h;
		this.activeColor = activeColor;
		this.active = false;
	} // s'execute lorsque l'on veut créer l'objet, il s'agit d'une fonction, un block de code

	

	

}