let spritesize = 64;
let nbcol = 15;
let nbln = 10;
let width = nbcol * spritesize; //960
let height = nbln * spritesize; //640

let nuit = true;
let minimapImg;
let minimapx = width - 140;
let minimapy = height - 140;
let minimapw = 128;
let minimaph = 128;
let reduceminimap = false;
let bigmapImg;
let showbigmap = false;

let cavemanData, cavemanImg;//contient les fichiers json et png
let eyeclose, eyeopen, eyelouche; //contient les animations des yeux ouverts, fermés, et louches 

let eyespeed = 0.08; //vitesse de défilement de l'animation des yeux [0.01,1[
let cavemanspeed = 0.08;
let xpos_ini = 64; //position initial du personnage quand le jeu commence
let ypos_ini = 64; //

let perso;//variable qui contiendra les differents animations du personnage
let caveman,cavemandroit, cavemangauche, cavemanhaut, cavemanbas;

let obstacleImg, obstacleData;
let obstacles = [];
let rocks = [];
let rocksi = [];

let decorImg, decorData;
let sol = []; //contient chaque image du sol

let grotteImg;
let grottex = 832;//768;
let grottey = 0;

let sortiey = spritesize; //zone de victoire;
let sortiex = width-128; //droite de l'ecran - largeur de la grotte

let torches = [{
    x : spritesize,
    y : height - (2*spritesize)
}]
//let torchex = spritesize;
//let torchey = height - (2*spritesize);
let torche, torcheImg, torcheData;

let texto,texto1, texto1Img, texto1Data;
let texto2, texto3, texto2Img, texto3Img, texto2Data, texto3Data;
let showtexto = false;
let timertexto = 0;
let timermax = 400;

function preload(){
    cavemanImg = loadImage('assets/caveman.png');
    cavemanData = loadJSON('assets/caveman.json');
    obstacleData = loadJSON('assets/obstacles.json'); //la carte des obstacles
    decorImg = loadImage('assets/decor.png');
    decorData = loadJSON('assets/decor.json');
    grotteImg = loadImage('assets/grotte.png');
    minimapImg = loadImage('assets/minimap.png');
    bigmapImg = loadImage('assets/map.png');
    texto1Img = loadImage('assets/texto1.png');
    texto1Data = loadJSON('assets/texto1.json');
    texto2Img = loadImage('assets/texto2.png');
    texto2Data = loadJSON('assets/texto2.json');
    texto3Img = loadImage('assets/texto3.png');
    texto3Data = loadJSON('assets/texto3.json');
    
    torcheImg = loadImage('assets/torche.png');
    torcheData = loadJSON('assets/torche.json');
}

function setup(){

    createCanvas(width, height);

    let from, to;
    torche = new Sprite(torcheImg, torcheData, torches[0].x, torches[0].y,
                        torcheData.meta.frameTags[0].from,
                        torcheData.meta.frameTags[0].to, cavemanspeed);
    eyeclose = new Sprite(cavemanImg, cavemanData, xpos_ini, ypos_ini, 
                            cavemanData.meta.frameTags[1].from,
                            cavemanData.meta.frameTags[1].to,eyespeed);
    
    eyeopen = new Sprite(cavemanImg, cavemanData, xpos_ini, ypos_ini,
                            cavemanData.meta.frameTags[2].from,
                            cavemanData.meta.frameTags[2].to, eyespeed);

    eyelouche = new Sprite(cavemanImg, cavemanData, xpos_ini, ypos_ini,
                            cavemanData.meta.frameTags[3].from,
                            cavemanData.meta.frameTags[3].to, eyespeed);

    caveman = new Sprite(cavemanImg, cavemanData, xpos_ini, ypos_ini,
                            cavemanData.meta.frameTags[5].from,
                            cavemanData.meta.frameTags[5].to, cavemanspeed);

    cavemanbas = new Sprite(cavemanImg, cavemanData, xpos_ini, ypos_ini,
                            cavemanData.meta.frameTags[0].from, 
                            cavemanData.meta.frameTags[0].to, cavemanspeed);

    cavemangauche = new Sprite(cavemanImg, cavemanData, xpos_ini, ypos_ini,
                            cavemanData.meta.frameTags[6].from, 
                            cavemanData.meta.frameTags[6].to, cavemanspeed);

    cavemandroit = new Sprite(cavemanImg, cavemanData, xpos_ini, ypos_ini,
                            cavemanData.meta.frameTags[4].from, 
                            cavemanData.meta.frameTags[4].to, cavemanspeed);

    cavemanhaut = new Sprite(cavemanImg, cavemanData, xpos_ini, ypos_ini,
                            cavemanData.meta.frameTags[7].from, 
                            cavemanData.meta.frameTags[7].to, cavemanspeed);
    texto1 = new Sprite(texto1Img, texto1Data, 0, 0, 0, texto1Data.frames.length-1, 0.4);
    texto2 = new Sprite(texto2Img, texto2Data, 0, 0, 0, texto2Data.frames.length-1, 0.4);
    texto3 = new Sprite(texto3Img, texto3Data, 0, 0, 0, texto3Data.frames.length-1, 0.4);


    texto = texto1;

    //chargement des sols
    from = decorData.meta.frameTags[0].from;
    to = decorData.meta.frameTags[0].to;
    for(let i=from;i<=to;i++){
        sol.push(decorImg.get(
            decorData.frames[i].frame.x,
            decorData.frames[i].frame.y,
            decorData.frames[i].frame.w,
            decorData.frames[i].frame.h
        ));
    }

    from = decorData.meta.frameTags[1].from;
    to = decorData.meta.frameTags[1].to;

    //chargement des murs
    for(let i=from;i<=to;i++){
        rocks.push(decorImg.get(
            decorData.frames[i].frame.x,
            decorData.frames[i].frame.y,
            decorData.frames[i].frame.w,
            decorData.frames[i].frame.h
        ));
    }

    for(let i=0; i<obstacleData.obstacles.length; i++){
        obstacles.push(obstacleData.obstacles[i]);    
    }

    perso = eyeopen;
}

function draw(){
    timertexto++;
    if(nuit){
        background(0);
        //on ne change d'animation seulement lorsque l'animation courante est terminée
        if(perso.ended() == true){
            let rng = floor(random(0,30));
            if (rng == 0){//eyelouche est chargé une fois sur 30
                perso = eyelouche;
            } 
            else if(rng < 8){//eyeclose est 7 chargé  fois sur 30
                perso = eyeclose;
            }
            else{ //dans les autres cas perso normal est chargé
                perso = eyeopen;
            }
        }   
    }
    if(showtexto == false && timertexto > timermax) {
        let rng = floor(random(0,500));
        if(rng == 0){
            timertexto = 0;
            texto.x = perso.x+spritesize;
            texto.y = perso.y-32;
            showtexto = true;
        }
    }

    //met les positions en x et y a jour quand on appuye sur les touches du clavier
    if(keyIsDown(LEFT_ARROW)){
        if(!collisions(perso.x-2,perso.y, obstacles) && !victory()){            
            perso.x = perso.x - 2;
            eyelouche.x = perso.x;
            eyeclose.x = perso.x;
            eyeopen.x = perso.x;
            texto.x = perso.x+spritesize;
            caveman.x = cavemanbas.x = cavemandroit.x = cavemangauche.x = cavemanhaut.x = perso.x;
        }        
    }
    if(keyIsDown(RIGHT_ARROW)){
        if(!collisions(perso.x+2,perso.y, obstacles) && !victory()){
            perso.x = perso.x + 2;
            eyelouche.x = perso.x;
            eyeclose.x = perso.x;
            eyeopen.x = perso.x;
            texto.x = perso.x+spritesize;
            caveman.x = cavemanbas.x = cavemandroit.x = cavemangauche.x = cavemanhaut.x = perso.x;
        }
    }
    if(keyIsDown(UP_ARROW)){
        if(!collisions(perso.x,perso.y-2, obstacles) && !victory()){
            perso.y = perso.y - 2;
            eyelouche.y = perso.y;
            eyeclose.y = perso.y;
            eyeopen.y = perso.y;
            texto.y = perso.y-32;
            caveman.y = cavemanbas.y = cavemandroit.y = cavemangauche.y = cavemanhaut.y = perso.y;
        }
        
    }
    if(keyIsDown(DOWN_ARROW)){
        if(!collisions(perso.x,perso.y+2, obstacles) && !victory()){
            perso.y = perso.y + 2;
            eyelouche.y = perso.y;
            eyeclose.y = perso.y;
            eyeopen.y = perso.y;
            texto.y = perso.y-32;
            caveman.y = cavemanbas.y = cavemandroit.y = cavemangauche.y = cavemanhaut.y = perso.y;
        }
    }
   
    if(!nuit){
        background(41,107,109);
        //displayGrounds();
        displayWalls();
        image(grotteImg,grottex,grottey);
    }
    if(collisions(perso.x,perso.y, torches)){
        nuit = false;
        perso = caveman;
        texto = texto2;
    }
    perso.next();
    if(showtexto) {
        texto.next();
        if(texto.ended()){
            showtexto = false;
        }
    }
    if(nuit){
        torche.next();
    } 
    if(showbigmap) 
        image(bigmapImg, 100, 0);
    else
        image(minimapImg, minimapx, minimapy, minimapw, minimaph);
}

function keyPressed() {
    if (keyCode === LEFT_ARROW) {
        if(!nuit) perso = cavemangauche;
    }
    else if (keyCode === RIGHT_ARROW) {
        if(!nuit) perso = cavemandroit;   
    }
    else if (keyCode === UP_ARROW){
        if(!nuit) perso = cavemanhaut;
    }
    else if (keyCode === DOWN_ARROW){
        if(!nuit) perso = cavemanbas;
    }
    else if (keyCode === ESCAPE){
        showbigmap = false;
    }
}

function mousePressed(){
    if(mouseX >= minimapx && mouseX <= minimapx+128
        && mouseY>= minimapy && mouseY <= minimapy+128 && !showbigmap){
            showbigmap = true;
    }
    else{
        showbigmap = false;
    }
}

function mouseMoved(){
    if(mouseX >= minimapx && mouseX <= minimapx+128
        && mouseY>= minimapy && mouseY <= minimapy+128){
        minimapx = width - 146;
        minimapy = height - 146;
        minimapw = 140;
        minimaph = 140;
        reduceminimap = true;
    }
    else{
        if(reduceminimap){
            reduceminimap=false;
            minimapx = width - 140;
            minimapy = height - 140;
            minimapw = 128;
            minimaph = 128;
        }
    }
}


function keyReleased(){
    if(!nuit){
        perso = caveman;
    }
}

function victory(){
    //affiche le message de victor
    if(perso.x>sortiex && perso.y<sortiey && !nuit){
        texto = texto3;
        timermax = 1;
        texto.x = perso.x - spritesize;
        texto.y = perso.y - 32;
        return true;
    }
    else {
        return false;
    }
}

function displayGrounds(){
    for(let i=0; i<nbln; i++){
        for(let j=0, k=0; j<nbcol; j++, k++){
            let x = j * spritesize;
            let y = i * spritesize;
            if(k>2) k=0;
            image(sol[k],x,y);
        }
    }
}

function displayWalls(){
    for(let i=0; i<obstacles.length; i++){
        //let rng = floor(random(0,rocks.length));
        image(rocks[i%3],obstacles[i].x,obstacles[i].y);    
    }
}

function collisions(x, y, obstacles){
    for(let i = 0; i< obstacles.length; i++){
        if(x+spritesize>obstacles[i].x && x<obstacles[i].x+spritesize
        && y+spritesize>obstacles[i].y && y<obstacles[i].y+spritesize){
            return true;
        }
    }
    return false;
}