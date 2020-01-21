let myReactiveRects = [];
let myActiveReactiveRects = [];
let myPictures = [];
let _size = 51; 
let _posX = 5;
let _posY = 5;
let _marge = 10;
let _moveX = 0;
let _moveY = 0;

function preload() {
	myPictures.push(loadImage('./cartes/trait-01.png'));
	myPictures.push(loadImage('./cartes/trait-02.png'));
	myPictures.push(loadImage('./cartes/trait-03.png'));
	myPictures.push(loadImage('./cartes/trait-04.png'));
	myPictures.push(loadImage('./cartes/trait-05.png'));
	myPictures.push(loadImage('./cartes/trait-06.png'));
	myPictures.push(loadImage('./cartes/trait-07.png'));
	myPictures.push(loadImage('./cartes/trait-08.png'));
	myPictures.push(loadImage('./cartes/trait-09.png'));
	myPictures.push(loadImage('./cartes/trait-10.png'));
	myPictures.push(loadImage('./cartes/trait-11.png'));
	myPictures.push(loadImage('./cartes/trait-12.png'));
	myPictures.push(loadImage('./cartes/trait-13.png'));
	myPictures.push(loadImage('./cartes/trait-14.png'));
	myPictures.push(loadImage('./cartes/trait-15.png'));
	myPictures.push(loadImage('./cartes/trait-16.png'));
	myPictures.push(loadImage('./cartes/trait-17.png'));
	myPictures.push(loadImage('./cartes/trait-18.png'));
	myPictures.push(loadImage('./cartes/trait-19.png'));
}


function setup() {
	createCanvas(windowWidth, windowHeight);

	let cmpt = 0;
	while(_moveY<12){
		_moveX = 0;
		while(_moveX<12){
			myReactiveRects.push(
				new ReactiveRect(
					_posX+_moveX*(_marge+_size),
					_posY+_moveY*(_marge+_size),
					_size,
					color(0),
					myPictures[cmpt % myPictures.length]
				)
			);
			cmpt = cmpt+1;
			_moveX = _moveX + 1;
		}
		_moveY = _moveY + 1;
	}
}


function draw() {
	background(255);
	myReactiveRects.forEach(function(r){
		r.update();
	});
	myReactiveRects.forEach(function(r){
		r.draw();
	});
	myActiveReactiveRects.forEach(function(r){
		r.drawImage();
	});

}


//fonction pr définir l'objet' rect qui va réagir à la souris' pour pvr en créer plein d'autres
class ReactiveRect {

	constructor(posX, posY, size, activeColor, img){
		this.posX = posX;
		this.posY = posY;
		this.size = size;
		this.activeColor = activeColor;
		this.active = false;
		this.wasClicked = false;
		this.img = img;
	}

	//position du carré, donc condition de si la souris ce trouve dans ces paramètres, il va se passer quelque chose: voir draw plus bas
	isHover(){
		return mouseX > this.posX && 
		mouseX < this.posX + this.size &&
		mouseY > this.posY && 
		mouseY < this.posY + this.size;
	}

	isClicked(){
		return this.isHover() && mouseIsPressed;
	}

	drawImage(){
		image(this.img, width/1.76, height/2 - 250, 500, 500);
	}

	draw(){
		if (this.active) {
			image(this.img, this.posX, this.posY, this.size, this.size);
			//this.drawImage();
		//si tt ça est faut/false(que la souris n'est sur le carré)=rouge
		} else {
			fill(254);
			stroke(255);
			rect(this.posX, this.posY, this.size, this.size);
		}
		
	}



	update (){
        //si tt ça est vrai/true(que la souris est sur le carré)=blanc
		if ( this.isClicked() && this.wasClicked == false ) {
			this.active = !this.active;
			if(this.active == true){
				myActiveReactiveRects.push(this);
			}
			else {
				let cmpt = 0;
				while(cmpt<myActiveReactiveRects.length){
					if(myActiveReactiveRects[cmpt] == this){
						break;
					}
					cmpt= cmpt+1;
				}
				myActiveReactiveRects.splice(cmpt, 1);
			}

			this.wasClicked = true;
		}

		if(this.isClicked() == false && this.wasClicked == true){
			this.wasClicked = false;
		}
	}
}

