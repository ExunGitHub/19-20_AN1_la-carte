//VARIABLES*

//VAR IMG
let f1;
let f2;
let f3;
let f4;
let f5;
let f6;
let f7;
let f8;

var Np00 ;
var Np01 ;
var Np02 ;
var Np03 ;
var Np04 ;
var Np05 ;
var Np06 ;
var Np07 ;
var Np08 ;
var Np09 ;

var PP00 ;
var PP01 ;
var PP02 ;
var PP03 ;
var PP04 ;
var PP05 ;

var PPb00 ;
var PPb01 ;
var PPb02 ;
var PPb03 ;
var PPb04 ;
var PPb05 ;

var Fl01 ;
var Fl02 ;
var Fl03 ;
var Fl04 ;
var Fl05 ;

var B;
var A;
var S;

var M0;
var M1;
var M2;

var T;

var C;

var S01;
var S02;
var S03;
var S04;
var S05;
var S06;
var S07;
var S08;
var S09;
var S10;
var S11;
var S12;

var Surp1;
var Surp2;
var Surp3;

let T1;
let T2;
let T3;
let T4;
let T5;
let T6;
let T7;

var PM = {
	x: 100,
	y: 200,
	xspeed: 0,
	yspeed: 21,
}


//VAR ANIM
let Surprise=[];
let animPM = [];
let BAS = [];
let animSrp = [];
let animDecors1 = [];
let animFl =[];
let titre =[];
let timeAtImageChange = 0;
let timeAtImageChange2 = 0;
let timeAtImageChange3 = 0;
let timeAtImageChange4 = 0;
let cursor = 0;
let cursor2 = 0;
let cursor3 = 0;
let cursor4 = 0;
let cursor5 = 0;
let cursor6 = 0;


let cursorBAS= 0;

/*let fr = 9;*/


let isWalking = false;
let isWalkingDelay;
//VAR MOD
var x= 0;
var y= 0;
var on = false;

//VAR SOURIS
var click;
var main;

			


//FUNCTIONS
//FCT PRELOAD
 function preload(){

 	//IMG SOURIS
 	click = loadImage("../DOC/click.png");
	main = loadImage("../DOC/main.png");

    f1 = loadImage("../DOC/F1.png");
 	f2 = loadImage("../DOC/F2.png");
 	f3 = loadImage("../DOC/F3.png");
 	f4 = loadImage("../DOC/F4.png");
 	f5 = loadImage("../DOC/F5.png");
 	f6 = loadImage("../DOC/F6.png");
 	f7 = loadImage("../DOC/F7.png");
 	f8 = loadImage("../DOC/F8.png");
     
    animDecors1.push(loadImage('../DOC/F1.png')); //0
 	animDecors1.push(loadImage('../DOC/F2.png')); //0
 	animDecors1.push(loadImage('../DOC/F3.png')); //0
 	animDecors1.push(loadImage('../DOC/F4.png')); //0
 	animDecors1.push(loadImage('../DOC/F5.png')); //0
 	animDecors1.push(loadImage('../DOC/F6.png')); //
 	animDecors1.push(loadImage('../DOC/F7.png')); //
 	animDecors1.push(loadImage('../DOC/F8.png')); //
     
    animFl.push(loadImage('../DOC/Fl01.png')); //0
 	animFl.push(loadImage('../DOC/Fl02.png')); //0
 	animFl.push(loadImage('../DOC/Fl03.png')); //0
 	animFl.push(loadImage('../DOC/Fl04.png')); //0
 	animFl.push(loadImage('../DOC/Fl05.png')); //0
 	//IMG ANIM
     
     animPM.push(loadImage('../DOC/M0.png'));
     animPM.push(loadImage('../DOC/M1.png'));
     animPM.push(loadImage('../DOC/M2.png'));

 	 Np00 = loadImage("../DOC/NP00.png");
     Np01 = loadImage("../DOC/NP01.png");
     Np02 = loadImage("../DOC/NP02.png");
     Np03 = loadImage("../DOC/NP03.png");
     Np04 = loadImage("../DOC/NP04.png");
     Np05 = loadImage("../DOC/NP05.png");
     Np06 = loadImage("../DOC/NP06.png");
     Np07 = loadImage("../DOC/NP07.png");
     Np08 = loadImage("../DOC/NP08.png");
     Np09 = loadImage("../DOC/NP09.png");
     
     PP00 = loadImage("../DOC/PP00.png");
     PP01 = loadImage("../DOC/PP01.png");
     PP02 = loadImage("../DOC/PP02.png");
     PP03 = loadImage("../DOC/PP03.png");
     PP04 = loadImage("../DOC/PP04.png");
     PP05 = loadImage("../DOC/PP05.png");
     
     PPb00 = loadImage("../DOC/PPb00.png");
     PPb01 = loadImage("../DOC/PPb01.png");
     PPb02 = loadImage("../DOC/PPb02.png");
     PPb03 = loadImage("../DOC/PPb03.png");
     PPb04 = loadImage("../DOC/PPb04.png");
     PPb05 = loadImage("../DOC/PPb05.png");
     
     
     Fl01 = loadImage("../DOC/Fl01.png");
     Fl02 = loadImage("../DOC/Fl02.png");
     Fl03 = loadImage("../DOC/Fl03.png");
     Fl04 = loadImage("../DOC/Fl04.png");
     Fl05 = loadImage("../DOC/Fl05.png");
     
     M0 = loadImage("../DOC/M0.png");
      M1 = loadImage("../DOC/M1.png");
      M2 = loadImage("../DOC/M2.png");
     
     Surp1 = loadImage("../DOC/Surprise1.png");
      Surp2 = loadImage("../DOC/Surprise2.png");
      Surp3 = loadImage("../DOC/Surprise3.png");
      
      
     B = loadImage("../DOC/Biff.png");
     A = loadImage("../DOC/Armes.png");
     S = loadImage("../DOC/Sex.png");
     
     S01 = loadImage("../DOC/S01.png");
     S02 = loadImage("../DOC/S02.png");
     S03 = loadImage("../DOC/S03.png");
     S04 = loadImage("../DOC/S04.png");
     S05 = loadImage("../DOC/S05.png");
     S06 = loadImage("../DOC/S06.png");
     S07 = loadImage("../DOC/S07.png");
     S08 = loadImage("../DOC/S08.png");
     S09 = loadImage("../DOC/S09.png");
     S10 = loadImage("../DOC/S10.png");
     S11 = loadImage("../DOC/S11.png");
     S12 = loadImage("../DOC/S12.png");
     
     T1 = loadImage("../DOC/T1.png");
     T2 = loadImage("../DOC/T2.png");
     T3 = loadImage("../DOC/T3.png");
     T4 = loadImage("../DOC/T4.png");
     T5 = loadImage("../DOC/T5.png");
     T6 = loadImage("../DOC/T6.png");
     T7 = loadImage("../DOC/T7.png");
     
     animSrp.push(loadImage("../DOC/S01.png"));
     animSrp.push(loadImage("../DOC/S02.png"));
     animSrp.push(loadImage("../DOC/S03.png"));
     animSrp.push(loadImage("../DOC/S04.png"));
     animSrp.push(loadImage("../DOC/S05.png"));
     animSrp.push(loadImage("../DOC/S06.png"));
     animSrp.push(loadImage("../DOC/S07.png"));
     animSrp.push(loadImage("../DOC/S08.png"));
     animSrp.push(loadImage("../DOC/S09.png"));
     animSrp.push(loadImage("../DOC/S10.png"));
     animSrp.push(loadImage("../DOC/S11.png"));
     animSrp.push(loadImage("../DOC/S12.png"));
     
     BAS.push(loadImage("../DOC/Biff.png"));
     BAS.push(loadImage("../DOC/Armes.png"));
     BAS.push(loadImage("../DOC/Sex.png"));
     
     Surprise.push(loadImage("../DOC/Surprise1.png"));
     Surprise.push(loadImage("../DOC/Surprise2.png"));
     Surprise.push(loadImage("../DOC/Surprise3.png"));
     
     titre.push(loadImage("../DOC/T1.png"));
     titre.push(loadImage("../DOC/T2.png"));
     titre.push(loadImage("../DOC/T3.png"));
     titre.push(loadImage("../DOC/T4.png"));
     titre.push(loadImage("../DOC/T5.png"));
     titre.push(loadImage("../DOC/T6.png"));
     titre.push(loadImage("../DOC/T7.png"));
     
     
     T = loadImage("../DOC/TXT-fin.png");
     
     C = loadImage("../DOC/C.png")

 }

//FCT SETUP
function setup(){

	//CANVAS
	createCanvas(windowWidth, 3850);
   /* frameRate(fr);*/
   
}


//FCT SCROLL

function mouseWheel(event) {
//fonction qui s'active en scrollant
//lorsqu'elle s'active, isWalking est true (donc l'animation se lance: voir ligne180 )
//après 200ms l'anim se coupe
  isWalking = true;
  clearTimeout(isWalkingDelay);
  isWalkingDelay = setTimeout(function(){
      isWalking = false;
  }, 200);  
    
  //move the square according to the vertical scroll amount
  
  //uncomment to block page scrolling
  //return false;
}
//FCT DRAW
function draw(){

     
	background(255);

	//VARIABLES

			//FCT ANIM
	
    
    //problem: pas de parallax....
			//FCT PARALLAX
			let normalizedMouseX = mouseX/width;
			let normalizedMouseY = mouseY/height;

	//FCT
	
	/*display();*/
	/*anim();*/
	/*souris();
	dispersionPerso();
*/
    //IMG et ARRAY
    image(C , x, y, width, C.height-50);
	
    
    image(Np09 , x, y, width, (width * Np09.height)/Np09.width);
    image(Np08 , x, y, width, (width * Np08.height)/Np08.width);
    image(Np07 , x, y, width, (width * Np07.height)/Np07.width);
    image(Np06 , x, y, width, (width * Np06.height)/Np06.width);
    image(Np05 , x, y, width, (width * Np05.height)/Np05.width);
    image(Np04 , x, y, width, (width * Np04.height)/Np04.width);
    image(Np03 , x, y, width, (width * Np03.height)/Np03.width);
    image(Np02 , x, y, width, (width * Np02.height)/Np02.width);
    image(Np01 , x, y, width, (width * Np01.height)/Np01.width);
	image(Np00 , x, y, width, (width * Np00.height)/Np00.width);

    image(animPM[cursor], PM.x, PM.y, width, (width * M0.height)/M0.width);
    image(animPM[cursor], PM.x, PM.y, width, (width * M1.height)/M1.width);
    image(animPM[cursor], PM.x, PM.y, width, (width * M2.height)/M2.width);
    
    image(PP05 , x, y + 1000, width, (width * PP05.height)/PP05.width);
    image(PP04 , x, y + 1000, width, (width * PP04.height)/PP04.width);
    image(PP03 , x, y + 1000, width, (width * PP03.height)/PP03.width);
    image(PP02 , x, y + 1000, width, (width * PP02.height)/PP02.width);
    image(PP01 , x, y + 1000, width, (width * PP01.height)/PP01.width);
	image(PP00 , x, y + 1000, width, (width * PP00.height)/PP00.width);
    
	
    image(PPb00 , x, y + 2000, width, (width * PPb00.height)/PPb00.width);
    image(PPb01 , x, y + 2000, width, (width * PPb01.height)/PPb01.width);
    image(PPb02 , x, y + 2000, width, (width * PPb02.height)/PPb02.width);
    image(PPb03 , x, y + 2000, width, (width * PPb03.height)/PPb03.width);
    image(PPb04 , x, y + 2000, width, (width * PPb04.height)/PPb04.width);
    image(PPb05 , x, y + 2000, width, (width * PPb05.height)/PPb05.width);
    
    image(animFl[cursor5], 0, 0,width, (width * Fl01.height)/Fl01.width );
	image(animFl[cursor5], 0, 0,width, (width * Fl02.height)/Fl02.width );
	image(animFl[cursor5], 0, 0,width, (width * Fl03.height)/Fl03.width );
	image(animFl[cursor5], 0, 0,width, (width * Fl04.height)/Fl04.width );
	image(animFl[cursor5], 0, 0,width, (width * Fl05.height)/Fl05.width );
    
    
    
    image(animDecors1[cursor2], 0, -100,width, (width * f1.height)/f1.width );
	image(animDecors1[cursor2], 0, -100,width, (width * f2.height)/f2.width );
	image(animDecors1[cursor2], 0, -100,width, (width * f3.height)/f3.width );
	image(animDecors1[cursor2], 0, -100,width, (width * f4.height)/f4.width );
	image(animDecors1[cursor2], 0, -100,width, (width * f5.height)/f5.width );
	image(animDecors1[cursor2], 0, -100,width, (width * f6.height)/f6.width );
	image(animDecors1[cursor2], 0, -100,width, (width * f7.height)/f7.width );
	image(animDecors1[cursor2], 0, -100,width, (width * f8.height)/f8.width );
    
    image(animSrp[cursor3] , x, 3000, width, (width * S01.height)/S01.width);
    image(animSrp[cursor3] , x, 3000, width, (width * S02.height)/S02.width);
    image(animSrp[cursor3] , x, 3000, width, (width * S03.height)/S03.width);
    image(animSrp[cursor3] , x, 3000, width, (width * S04.height)/S04.width);
    image(animSrp[cursor3] , x, 3000, width, (width * S05.height)/S05.width);
    image(animSrp[cursor3] , x, 3000, width, (width * S06.height)/S06.width);
    image(animSrp[cursor3] , x, 3000, width, (width * S07.height)/S07.width);
    image(animSrp[cursor3] , x, 3000, width, (width * S08.height)/S08.width);
    image(animSrp[cursor3] , x, 3000, width, (width * S09.height)/S09.width);
	image(animSrp[cursor3] , x, 3000, width, (width * S10.height)/S10.width);
    image(animSrp[cursor3] , x, 3000, width, (width * S11.height)/S11.width);
    image(animSrp[cursor3] , x, 3000, width, (width * S12.height)/S12.width);
    
    image(Surprise[cursor4] , x, 5000, width, (width * Surp1.height)/Surp1.width);
    
    image(titre[cursor6], 0, 0,width, (width * T1.height)/T1.width );
	image(titre[cursor6], 0, 0,width, (width * T2.height)/T2.width );
	image(titre[cursor6], 0, 0,width, (width * T3.height)/T3.width );
	image(titre[cursor6], 0, 0,width, (width * T4.height)/T4.width );
	image(titre[cursor6], 0, 0,width, (width * T5.height)/T5.width );
	image(titre[cursor6], 0, 0,width, (width * T6.height)/T6.width );
	image(titre[cursor6], 0, 0,width, (width * T7.height)/T7.width );
    

    move();
    
            
    anim();
    /*if(PM.y > screenY ){
        
        PM.y = screenY;
    }
    */
        if(on){
            
            image(T , x, 3000, width, (width * T.height)/T.width);
            animPM = Surprise;
            PM.yspeed = 0;        
            
        }else{
            
            
        }
        
    if(on){animSrp = BAS;
           
            if(PM.y<3100){
          cursor3 = 0;
               }
           
            if(PM.y<3300 && PM.y>3100){
          cursor3 = 1;
               }
           
            if(PM.y<4000 && PM.y>3300){
          cursor3 = 2;
               }
    
          }
}
function move(){

	if(isWalking){
        
	PM.x = PM.x + PM.xspeed;
	PM.y = PM.y + PM.yspeed;

	}else{
		PM.x = PM.x;
		PM.y = PM.y;
        
	}
    if(isWalking){
		
		if(PM.y > height ){
		PM.y = PM.y - 100 ;
            PM.yspeed =0;
		}else{
            PM.y = PM.y;
            PM.yspeed = 12;
        }
	}


}
/*function shuffleArray(BAS) {
    for (var i = BAS.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = BAS[i];
        BAS[i] = BAS[j];
        BAS[j] = temp;
    }
}*/
//FCT ANIM
function anim(){

	
	let time = millis(60);
    let time4 = millis(60);
    var durationSinceImageChange = time - timeAtImageChange;
    var durationSinceImageChange2 = time - timeAtImageChange2;
    var durationSinceImageChange3 = time4 - timeAtImageChange3;
    var durationSinceImageChange4 = time4 - timeAtImageChange4;
	//PERSO
	//CONDITIONS
    
    //Marche
	if(durationSinceImageChange > 71){
		timeAtImageChange = millis();
		if(isWalking){
		  cursor = cursor + 1;
        }
	}
	if(cursor >= animPM.length){

		cursor = 0
	}
    
    //FleursAccueil
    if(durationSinceImageChange2 > 71){
		timeAtImageChange2 = millis();
        
		  cursor2 = cursor2 + 1;
        }
    
    if(cursor2 >= animDecors1.length){

		cursor2 = 0
	}
    
    if(durationSinceImageChange > 71){
		timeAtImageChange = millis();
        
		  cursor5 = cursor5 + 1;
        }
    if(cursor5 >= animFl.length){

		cursor5 = 0
	}
    
    if(durationSinceImageChange > 71){
		timeAtImageChange = millis();
        
		  cursor6 = cursor6 + 1;
        }
    if(cursor6 >= titre.length){

		cursor6 = 0
	}
    
    
    //Serpents
    if(durationSinceImageChange3 > 71){
		timeAtImageChange3 = millis();
        
		  cursor3 = cursor3 + 1;
        }
    
    
    if(cursor3 >= animSrp.length){

		cursor3 = 0
	}
    
    if(durationSinceImageChange4 > 71){
		timeAtImageChange4 = millis();
        
		  cursor4 = cursor4 + 1;
        }
    
    
    if(cursor4 >= Surprise.length){

		cursor4 = 0
	}

}

//FCT SOURIS
function souris(){


}


//FCT MOUSEPRESSED
function mousePressed(){
    if(mouseX<width/2 && mouseY>3000){
    on = true;
}
}
