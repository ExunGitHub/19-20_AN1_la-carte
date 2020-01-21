
let selectedChapter;
let selectedChapterText = null;

document.addEventListener("DOMContentLoaded", function(){

  document.querySelectorAll(".chapitreTexte").forEach(function(chapitreTexte){
	chapitreTexte.style.visibility = "hidden";
  });

  document.querySelectorAll(".chapter").forEach(function(chapterArea){
    chapterArea.addEventListener('mouseover',function(){
      selectedChapter = document.querySelector('#Image'+this.getAttribute("id"));
      show();
    });
    chapterArea.addEventListener('mouseout',function(){
      hide();
    });
  });
  ImageMap('img[usemap]');

});


function changePage(chapter){
  ImageMap('img[usemap]');
  if (chapter!=="map"){
      if (selectedChapterText!==null)
             document.querySelector("#"+selectedChapterText +"texte").style.visibility = "hidden";
     else 
             document.querySelector("#map").style.visibility = "hidden";
     selectedChapterText = chapter;
     document.querySelector("#"+selectedChapterText +"texte").style.visibility = "visible";
  } else {
    document.querySelector("#"+selectedChapterText +"texte").style.visibility = "hidden";
    document.querySelector("#map").style.visibility = "visible";
  }
}

function show () {
    selectedChapter.style.display="block";
    selectedChapter.style.width=document.querySelector("#map").width/3.8 +"px";
    selectedChapter.style.height=document.querySelector("#map").height/1.6 +"px";
    //This allows the tooltip to display close to the mouse pointer
    window.addEventListener("mousemove", adjustPopupPosition);
}

function hide () {
    window.removeEventListener("mousemove", adjustPopupPosition);
    selectedChapter.style.display="";
}

function adjustPopupPosition(){
  selectedChapter.style.left = event.clientX + 5 +"px";
  selectedChapter.style.top = event.clientY + 5 +"px";
}
