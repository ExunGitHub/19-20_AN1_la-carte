let imgRochers;
let imgCorbeau;
let imgPlan1;
let imgPlan2;
let imgLapins;
let imgPlan3;
let imgCerf;
let imgPlan4;
let imgLoup;
let imgPlan5;
let imgPlan6;
let imgBackground;

let celloRochers;
let celloPlan2;
let celloPlan3;
let celloPlan4;

let primitivePath;
function preload(){
	imgRochers = loadImage("images/parallax1/rochers.png");
    imgCorbeau = loadImage("images/animaux1/corbeau.png");
    imgPlan1 = loadImage("images/parallax1/plan1.png");
    imgPlan2 = loadImage("images/parallax1/plan2.png");
    imgLapins = loadImage("images/animaux1/lapins.png");
    imgPlan3 = loadImage("images/parallax1/plan3.png");
    imgCerf = loadImage("images/animaux1/cerf.png");
    imgPlan4 = loadImage("images/parallax1/plan4.png");
    imgLoup = loadImage("images/animaux1/loup.png");
    imgPlan5 = loadImage("images/parallax1/plan5.png");
    imgPlan6 = loadImage("images/parallax1/plan6.png");
    imgBackground = loadImage("images/parallax1/fond.jpg");
}

let corbeauposX = 2764;
let corbeauposY = 423;

let lapinsposX = 850;
let lapinsposY = 195;

let cerfposX = 1230;
let cerfposY = 205;

let loupposX = 215;
let loupposY = 275;

function setup() {
     createCanvas(windowWidth, windowHeight);
     celloRochers = createGraphics(4167, 750);
     celloPlan2 = createGraphics(4167, 750);
     celloPlan3 = createGraphics(4167, 750);
     celloPlan4 = createGraphics(4167, 750);
    
    celloRochers.image(imgRochers, 0, 0);
    celloRochers.image(imgCorbeau, corbeauposX, corbeauposY);

    celloPlan2.image(imgPlan2, 0, 0);
    celloPlan2.image(imgLapins, lapinsposX, lapinsposY);

    celloPlan3.image(imgPlan3, 0, 0);
    celloPlan3.image(imgCerf, cerfposX, cerfposY);

    celloPlan4.image(imgPlan4, 0, 0);
    celloPlan4.image(imgLoup, loupposX, loupposY);
    primitivePath=location.pathname;
}

function draw() {
	 background(0); 

    let normalizeMouseX=mouseX/width;
    let posRochers = -0.89 *(celloRochers.width - width)* normalizeMouseX;
    let posPlan1 =   -0.79 *(imgPlan1.width - width)* normalizeMouseX;
    let posPlan2 =   -0.5 *(celloPlan2.width - width)* normalizeMouseX;
    let posPlan3 =   -0.3 *(celloPlan3.width - width)* normalizeMouseX;
    let posPlan4 =   -0.2 *(celloPlan4.width - width)* normalizeMouseX;
    let posPlan5 =   -0.09 *(imgPlan5.width - width)* normalizeMouseX;
    let posPlan6 =   -0.05 *(imgPlan6.width - width)* normalizeMouseX;

    image(imgBackground, 0, 0);
    image(imgPlan6, posPlan6, 0);
    image(imgPlan5, posPlan5, 0);
    image(celloPlan4, posPlan4, 0);
    image(celloPlan3, posPlan3, 0);
    image(celloPlan2, posPlan2, 0);
    image(imgPlan1, posPlan1, 0);
    image(celloRochers, posRochers, 0);
   
   let corbeauPosXInScreen = corbeauposX+posRochers
   let lapinsPosXInScreen = lapinsposX+posPlan2
   let cerfPosXInScreen = cerfposX+posPlan3
   let loupPosXInScreen = loupposX+posPlan4


    if(
        mouseX > corbeauPosXInScreen &&
        mouseX < corbeauPosXInScreen +  imgCorbeau.width &&
        mouseY > corbeauposY &&
        mouseY < corbeauposY + imgCorbeau.height
    ){
       
    
         if(mouseIsPressed){
            location.pathname= primitivePath+"/pages/corbeau"
         }
    }


   if(
        mouseX > lapinsPosXInScreen &&
        mouseX < lapinsPosXInScreen +  imgLapins.width &&
        mouseY > lapinsposY &&
        mouseY < lapinsposY + imgLapins.height
    ){
         
    
         if(mouseIsPressed){
            location.pathname= primitivePath+"/pages/lapins"
         }
    }


    if(
        mouseX > cerfPosXInScreen &&
        mouseX < cerfPosXInScreen +  imgCerf.width &&
        mouseY > cerfposY &&
        mouseY < cerfposY + imgCerf.height
    ){
         
    
         if(mouseIsPressed){
            location.pathname= primitivePath+"/pages/cerf"
         }
    }

    if(
        mouseX > loupPosXInScreen &&
        mouseX < loupPosXInScreen +  imgLoup.width &&
        mouseY > loupposY &&
        mouseY < loupposY + imgLoup.height
    ){
         
    
         if(mouseIsPressed){
            location.pathname= primitivePath+"/pages/loup"
         }
    }

}


