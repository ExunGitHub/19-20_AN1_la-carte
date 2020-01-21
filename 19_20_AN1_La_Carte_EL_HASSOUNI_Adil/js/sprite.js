class Sprite{
    constructor(img, data, x, y, from, to, speed){
        this.spritesheet = [];
        this.length = 0;
        this.current = 0; //l'element courant qui sera utilisé par next()
        this.speed = 1; //le vitesse de défilement de l'animation
        this.height = 0; //la hauteur et largeur d'affichage
        this.width = 0;
        this.x = x; //les position initiale
        this.y = y;

        if(from < data.frames.length && to < data.frames.length){
            //valeur minimum est de 0.01 et maximum de 1
            if(speed > 1) this.speed = 1;
            else {
                if(speed < 0.01) this.speed = 0.01;
                else{
                    speed = speed*100
                    speed = floor(speed);
                    this.speed = speed/100;
                }
            }
            //tout les sprites ont la même height et width pour une animation
            this.height = data.frames[from].frame.h;
            this.width = data.frames[from].frame.w;

            for(let i=from; i<=to; i++){   
                this.spritesheet.push(
                    img.get(data.frames[i].frame.x, data.frames[i].frame.y, data.frames[i].frame.w, data.frames[i].frame.h)
                )
            }
            this.length = this.spritesheet.length;
        }
    }
}

Sprite.prototype.next = function(){
    if(this.current >= this.length) this.current = 0;
    let i = floor(this.current);
    image(this.spritesheet[i], this.x, this.y);
    this.current += this.speed; //this.current = this.current + this.speed
}

Sprite.prototype.ended = function(){
    if(floor(this.current) == this.length) return true;
    else return false;
}