$(document).ready(function(){
    //BEGIN


    /*
        Fa un refresh della pagina ogni qualvolta la finestra 
        viene ridimensionata
    */
    $(window).resize(function() 
    {
        setTimeout(function()
        {
            window.location.reload(1);
        }, 20);
    });

    /************************************************************************************

        GLOBAL VARIABLES
    *************************************************************************************/

    var grad2rad = Math.PI / 180;
    var velSyst = 0.5; // velocità dei pianeti
    var ellipseSim = 0.66; //porre uguale a 0.66 se vogliamo simulare una traiettoria ellittica, 1 per traiettoria circolare
    var aphelium = 45 //afelio/perielio tx


    /************************************************************************************

        SUN GLOBAL VARIABLES
    *************************************************************************************/

    var sunPos = $('#sun').position(), //posizione del sole
        sunRad = $('#sun').width() * 0.5, // raggio del sole
        cx = sunPos.left + sunRad, // coordinata X
        cy = sunPos.top + sunRad, // coordinata Y








    /************************************************************************************

        PLANET OBJECT CONSTRUCTOR
    *************************************************************************************/

     Planet = function (name, radius, orbDist, speedIncr, col){   
        this.Name = name; // Name of the planet, the same name of the DIV's Id attribute
        this.Radius = radius; // Radius of the planet
        this.Distance = orbDist; // Distance between sun and planet's surfaces
        this.startPos = 180; // Start Position angle
        this.speedIncr = speedIncr;


        this.update = function()
        {
            this.startPos = (this.startPos + this.speedIncr * velSyst); 

            /*
                Questo comando condizionale serve per evitare che 
                a lungo andare lo startPos possa oltrepassare i limiti
                della codifica interna. 
            */

            if (this.startPos  > 360) this.startPos = this.startPos- 360;


            //R è la somma del raggio del pianeta, della distanza tra la superficie del sole e del pianeta e del raggio del sole
            var R = (this.Radius + this.Distance + sunRad)


            /*
                Ottengo le coordinate della nuova posizione 
                Per simulare la traiettoria ellittica moltiplicare la funzione per "ellipseSim";
                per avere lo stesso effetto, ma in verticale moltiplicare ellipseSim per il coseno.
            */

            var alpha = this.startPos * grad2rad; // Angolo in radianti

            // Coordinate
            var x = cx + aphelium + R * Math.cos(alpha);
            var y = cy + R * Math.sin(alpha) * ellipseSim;


            //restituisco un oggetto newPos per avere separate le coordinate della nuova posizione
            return newPos = 
            {
                X: x, 
                Y: y        
            };
        }
    }



    /************************************************************************************

        Planet's Instances in an array planet
        //Planet(name, radius, orbDist, speedIncr, col)

    *************************************************************************************/
    var AllPopUps = $(".PShow"),
        Popup0  = $("#Popup0"),
        Popup1 = $("#Popup1"),
        Popup2 = $("#Popup2"),
        Popup3 = $("#Popup3"),
        Popup4 = $("#Popup4"),
        ImgP0 = $("#ImageP0"),
        ImgP0Z = $("#ImageP0Z"),
        ImgP1 = $("#ImageP1"),
        ImgP1Z = $("#ImageP1Z"),
        ImgP2 = $("#ImageP2"),
        ImgP2Z = $("#ImageP2Z"),
        ImgP3 = $("#ImageP3"),
        ImgP3Z = $("#ImageP3Z"),
        ImgP4 = $("#ImageP4"),
        ImgP4Z = $("#ImageP4Z");


    var planets = [
                                //    Name      Radius   OrbitDist    V      col //
        GlieseAlpha = new Planet("GlieseAlpha",   0,    100.909175,   1,    "blue"),

        VoynichGamma = new Planet("VoynichGamma", 0,    138.208930, 0.583, "purple"),

        Zelonb = new Planet("Zelon-b",            0,    186.598262, 0.788, "green"),

        GliesePrime = new Planet("GliesePrime",   0,    227.936640, 0.348, "red"),

        Vilarius7 = new Planet("Vilarius7",       0,    312.412010, 0.489, "orange"),

    ];

    
    $("#Galaxy").click(function() {
        
        hideAllPopup()
    });
 


        $("#GlieseAlpha").mouseenter(function(e) {
            GlieseAlpha.speedIncr = GlieseAlpha.speedIncr = 0.05;
        });

        $("#GlieseAlpha").mouseleave(function(e) {
            GlieseAlpha.speedIncr = GlieseAlpha.speedIncr = 1;
        });

        $("#GlieseAlpha").click(function(e) { 
            e.stopPropagation();
            hideAllPopup();
            Popup0.toggleClass('Transform-Active');
        });

        ImgP0.click(function() {
            ImgP0.css('display', 'none');
            ImgP0Z.css('display', 'block');
            ImgP0Z.click(function() {
                ImgP0Z.css('display', 'none');
                ImgP0.css('display', 'block');
            })
            
        });

        $("#VoynichGamma").mouseenter(function(e) {
            VoynichGamma.speedIncr = VoynichGamma.speedIncr = 0.1;
        });

        $("#VoynichGamma").mouseleave(function(e) {
            VoynichGamma.speedIncr = VoynichGamma.speedIncr = 0.583;
        }); 

         $("#VoynichGamma").click(function(e) {
             
               e.stopPropagation();
             hideAllPopup()
                Popup1.toggleClass('Transform-Active');
                return false;
         });

            ImgP1.click(function() { 
                ImgP1.css('display', 'none');
            ImgP1Z.css('display', 'block');
            ImgP1Z.click(function() {
                ImgP1Z.css('display', 'none');
                ImgP1.css('display', 'block');
            });
    });

         $("#Zelon-b").mouseenter(function(e) {
                Zelonb.speedIncr = Zelonb.speedIncr = 0.1;
    });

        $("#Zelon-b").mouseleave(function(e) {
                Zelonb.speedIncr = Zelonb.speedIncr = 0.788;
    });

        $("#Zelon-b").click(function(e) { 
            hideAllPopup()
            e.stopPropagation();
            Popup2.toggleClass('Transform-Active');
        });

        ImgP2.click(function() { 
            ImgP2.css('display', 'none');
            ImgP2Z.css('display', 'block');
            ImgP2Z.click(function() {
                ImgP2Z.css('display', 'none');
                ImgP2.css('display', 'block');
            });
    });

        $("#GliesePrime").mouseenter(function(e) {
            GliesePrime.speedIncr = GliesePrime.speedIncr = 0.1;
    });

        $("#GliesePrime").mouseleave(function(e) {
            GliesePrime.speedIncr = GliesePrime.speedIncr = 0.348;
    });

        $("#GliesePrime").click(function(e) {
            hideAllPopup();
            e.stopPropagation();
            Popup3.toggleClass('Transform-Active');
           
        });

        ImgP3.click(function() {
            ImgP3.css('display', 'none');
            ImgP3Z.css('display', 'block');
            ImgP3Z.click(function() {
                ImgP3Z.css('display', 'none');
                ImgP3.css('display', 'block');
            });
    });

        $("#Vilarius7").mouseenter(function(e) {
            Vilarius7.speedIncr = Vilarius7.speedIncr = 0.1;
    });

        $("#Vilarius7").mouseleave(function(e) {
            Vilarius7.speedIncr = Vilarius7.speedIncr = 0.489;
    });

        $("#Vilarius7").click(function(e) {
            hideAllPopup();
            e.stopPropagation();
            Popup4.toggleClass('Transform-Active');
            
        });

         ImgP4.click(function() { 
            ImgP4.css('display', 'none');
            ImgP4Z.css('display', 'block');
            ImgP4Z.click(function() {
                ImgP4Z.css('display', 'none');
                ImgP4.css('display', 'block');
            });
    });

    /************************************************************************************

        RENDER FUNCTION
    *************************************************************************************/

    function render() 
    {
        for(var i = 0; i<planets.length; i++)
        {
            //Coordinate di ogni pianeta
            var x = planets[i].update().X,
                y = planets[i].update().Y;


            //Elemento DIV nel file HTML
            var planet = $("#"+planets[i].Name)


            planet.css(
            {
                width: planets[i].Radius * 2,
                height: planets[i].Radius * 2,
                left: x - planets[i].Radius, 
                top: y - planets[i].Radius,

            });
        }
        requestAnimationFrame(render);
    }


    //Calling the render() function
    render();

/*if (ImgP0.height() < 504 && ImgP0.width() < 896 ) {
                ImgP0.css({"height":"504px", "width":"896px", "top":"32px", "left":"5px", "display":"block"});
            } else if (ImgP0.height() >= 504 && ImgP0.width() >= 896 ) { 
                $('body').click(function() {
                    ImgP0.css({"height":"210px", "width":"344px", "top":"16px", "left":"8px", "display":"block"});
                });
            };*/

    //END $(document).ready()

});


function hideAllPopup(){
    document.querySelectorAll(".Transform-Active").forEach( function( elem){
      elem.classList.remove("Transform-Active") ;
    });
}