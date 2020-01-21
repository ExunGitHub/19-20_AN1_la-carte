$(window).load(function(){

  var body = $("body"),
      universe = $("#universe"),
      solarsys = $("#solar-system");
        

 var init = function() {
    body.queue(function() {
      $(this).removeClass('hide-UI').addClass("set-speed");
      $(this).dequeue();
    });
  }
    
  
  var setView = function(view) { universe.removeClass().addClass(view); };
  var popup = $("#popup");
  var popup1 = $("#popup1");
  var popup2 = $("#popup2");
  var popup3 = $("#popup3");
  var popup4 = $("#popup4");
  var popup5 = $("#popup5");
    
     /*$("#ClickMe, #Exit").click(function(e) {
         popup.toggleClass('.transform-active');
           ;   
    });*/
    $("#ClickMe, #Exit").click(function(e) {
        //popup.toggle(); 
        popup.toggleClass("transform-active");
      ;   
    });
    
     $("#ClickMe1, #Exit1").click(function(e) {
        popup1.toggle();
      ;   
    });
    
     $("#ClickMe2, #Exit2").click(function(e) {
        popup2.toggle();
      ;   
    });
    
     $("#ClickMe3, #Exit3").click(function(e) {
        popup3.toggle();
      ;   
    });
    
     $("#ClickMe4, #Exit4").click(function(e) {
        popup4.toggle();
      ;   
    });
    
     $("#ClickMe5, #Exit5").click(function(e) {
        popup5.toggle();
      ;   
    });
    
    $("#ClickMe").mouseenter(function(e) {  
        let c = document.querySelector("#GlieseAlpha.orbit")
        c.style.animationDuration = "14s";
    //$("#GlieseAlpha.orbit").setAttribute();
    
    /*classList.replace('animation-duration: 4.89016s','animation-duration: 60s');*/
    
    /*setAttribute("animation-duration", "60s");*/
    });    $("#ClickMe").mouseleave(function(e) {  
        let c = document.querySelector("#GlieseAlpha.orbit")
        c.style.animationDuration = "4s";
    //$("#GlieseAlpha.orbit").setAttribute();
    
    /*classList.replace('animation-duration: 4.89016s','animation-duration: 60s');*/
    
    /*setAttribute("animation-duration", "60s");*/
    });

  $("#toggle-data").click(function(e) {
    body.toggleClass("data-open data-close");
    e.preventDefault();
  });

  $("#toggle-controls").click(function(e) {
    body.toggleClass("controls-open controls-close");
    e.preventDefault();
  });

  $("#data a").click(function(e) {
    var ref = $(this).attr("class");
    solarsys.removeClass().addClass(ref);
    $(this).parent().find('a').removeClass('active');
    $(this).addClass('active');
    e.preventDefault();
  });

  $(".set-view").click(function() { body.toggleClass("view-3D view-2D"); });
 /* $(".set-zoom").click(function() { $(".pos, .planet").addClass("animation-play-state=paused") });*/
  $(".set-speed").click(function() { setView("scale-stretched set-speed"); });
  $(".set-size").click(function() { setView("scale-s set-size"); });
  $(".set-distance").click(function() { setView("scale-d set-distance"); });

  init();

});