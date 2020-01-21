// liste d'images 12 images = 2 x 6 images
// opération mélange
var a = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6];

var eltScore = document.getElementById('score');
var score = 0;
var step = 1;
var p1, p2;
var timer = null;

randomizer();

document.addEventListener('click', function(e){
    switch(step){
        case 1: 
            if (e.target.tagName=='IMG'){
                 e.target.setAttribute("src-default", e.target.getAttribute("src"));
                e.target.setAttribute("src", e.target.getAttribute("src2"));
               // e.target.src = e.target.src2;
                p1 = e.target;
                step = 2;
            }
            break;
        case 2:
            if (e.target.tagName=='IMG' && p1 != e.target){
                e.target.setAttribute("src-default", e.target.getAttribute("src"));
                e.target.setAttribute("src", e.target.getAttribute("src2"));
               // e.target.src = e.target.src2;
                p2 = e.target;
                step = 3;
                timer = setTimeout(check, 2000);
            }
            
            
            break;
        case 3:
            clearTimeout(timer);
            check();
            break;
    }
});

function check(){
    if (p1.getAttribute("src2")==p2.getAttribute("src2")){
        p1.replaceWith( document.createElement('span'));
        p2.replaceWith( document.createElement('span'));
        
        a = a.filter(function(value, index, arr){
           return value != parseInt(p1.getAttribute("data-num"));
        });
        
        score += 50;
    } else {
            p2.setAttribute("src", p2.getAttribute("src-default"));
            p1.setAttribute("src", p1.getAttribute("src-default"));
            randomizer();
            score = Math.max(0, score-30);
    }
    step = 1;
    eltScore.textContent = score;
    
    if (document.getElementsByTagName('img').length==0){
        eltScore.textContent += ' Gagné !';
    }
}

function randomizer(){
   a = a.map( p => [p, Math.random()])
        .sort( (a,b) => a[1]-b[1] )
        .map( p => p[0]);
    let pics = document.getElementsByTagName('img')
    for(let i = 0; i<pics.length; i++){
        pics[i].setAttribute("src2", 'pics/spr' + a[i] + '.png');
        pics[i].setAttribute("data-num",  a[i]);
    }
}
