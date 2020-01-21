let imgDivin;
let imgPsychopompe;
let imgSagesse;
let imgForet;
let imgRochers;
let imgPlan1;
let imgPlan2;
let imgPlan3;
let imgPlan4;
let imgPlan5;
let imgPlan6;
let imgBackground;



function preload(){
    imgDivin = loadImage("../../images/animaux/cerf.png");
    imgPsychopompe = loadImage("../../images/animaux/psychopompe.png");
    imgSagesse = loadImage("../../images/animaux/sagesse.png");
    imgForet = loadImage("../../images/animaux/foret.png");
    imgRochers = loadImage("../../images/parallax2/rochers.png");
    imgPlan1 = loadImage("../../images/parallax2/plan1.png");
    imgPlan2 = loadImage("../../images/parallax2/plan2.png");
    imgPlan3 = loadImage("../../images/parallax2/cerf.png");
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
    let posPsychopompe =   +0.1 *(imgPsychopompe.width - width)* normalizeMouseX;
    let posSagesse =       +0.2 *(imgSagesse.width - width)* normalizeMouseX;
    let posForet =         +0.4 *(imgForet.width - width)* normalizeMouseX;
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
    image(imgPsychopompe, -posPsychopompe+400, mouseY-200);
    image(imgSagesse,     -posSagesse+800,     mouseY-70);
    image(imgForet,       -posForet+100,       mouseY+150);
   

let divinPosXInScreen = divinposX+ (posDivin+480)

    if(
        mouseX > divinPosXInScreen &&
        mouseX < divinPosXInScreen +  imgDivin.width &&
        mouseY > divinposY &&
        mouseY < divinposY + imgDivin.height
       ) 

    {
        if(mouseIsPressed){
         location.pathname= "/19-20_Carte_SanMartin_Carole/"}
    }

}
