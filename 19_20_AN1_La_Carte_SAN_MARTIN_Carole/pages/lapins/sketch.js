let imgDivin;
let imgEaux;
let imgMetamorphose;
let imgLunaire;
let imgRochers;
let imgPlan1;
let imgPlan2;
let imgPlan3;
let imgPlan4;
let imgPlan5;
let imgPlan6;
let imgBackground;


function preload(){
    imgDivin = loadImage("../../images/animaux/lapins.png");
    imgEaux = loadImage("../../images/animaux/eaux.png");
    imgMetamorphose = loadImage("../../images/animaux/metamorphose.png");
    imgLunaire = loadImage("../../images/animaux/lunaire.png");
    imgRochers = loadImage("../../images/parallax2/rochers.png");
    imgPlan1 = loadImage("../../images/parallax2/plan1.png");
    imgPlan2 = loadImage("../../images/parallax2/lapins.png");
    imgPlan3 = loadImage("../../images/parallax2/plan3.png");
    imgPlan4 = loadImage("../../images/parallax2/plan4.png");
    imgPlan5 = loadImage("../../images/parallax2/plan5.png");
    imgPlan6 = loadImage("../../images/parallax2/plan6.png");
    imgBackground = loadImage("../../images/parallax2/fond.jpg");


}

let divinposX = 0;
let divinposY = 0;

function setup() {
     createCanvas(windowWidth, windowHeight);

}

function draw() {
     background(0); 

    let normalizeMouseX=mouseX/width;
    let posDivin =         +0.4 *(imgDivin.width - width)* normalizeMouseX;
    let posEaux =          +0.7 *(imgEaux.width - width)* normalizeMouseX;
    let posMetamorphose =  +0.25 *(imgMetamorphose.width - width)* normalizeMouseX;
    let posLunaire =       +0.25 *(imgLunaire.width - width)* normalizeMouseX;
    let posRochers =       -0.89 *(imgRochers.width - width)* normalizeMouseX;
    let posPlan1 =         -0.79 *(imgPlan1.width - width)* normalizeMouseX;
    let posPlan2 =         -0.5 *(imgPlan2.width - width)* normalizeMouseX;
    let posPlan3 =         -0.3 *(imgPlan3.width - width)* normalizeMouseX;
    let posPlan4 =         -0.2 *(imgPlan4.width - width)* normalizeMouseX;
    let posPlan5 =         -0.09 *(imgPlan5.width - width)* normalizeMouseX;
    let posPlan6 =         -0.05 *(imgPlan6.width - width)* normalizeMouseX;

    image(imgBackground, 0, 0);
    image(imgPlan6, posPlan6, 0);
    image(imgPlan5, posPlan5, 0);
    image(imgPlan4, posPlan4, 0);
    image(imgPlan3, posPlan3, 0);
    image(imgPlan2, posPlan2, 0);
    image(imgPlan1, posPlan1, 0);
    image(imgRochers, posRochers, 0);
    image(imgDivin, posDivin+480, -mouseY+370);
    image(imgEaux,         -posEaux+200,          mouseY+100);
    image(imgMetamorphose, -posMetamorphose+300,  mouseY-200);
    image(imgLunaire,      -posLunaire+850,       mouseY-200);
   

let divinPosXInScreen = divinposX+ (posDivin+480)

    if(
        mouseX > divinPosXInScreen &&
        mouseX < divinPosXInScreen +  imgDivin.width &&
        mouseY > divinposY &&
        mouseY < divinposY + imgDivin.height
    ){
        
         if(mouseIsPressed){
            location.pathname= "/19-20_AN1_la-cart/19_20_AN1_La_Carte_SAN_MARTIN_Carole/"
         }
    }


   }


