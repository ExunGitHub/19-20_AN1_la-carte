let myAudioTrack;
function preload(){
   myAudioTrack = loadSound("musique.mp3");
    
}

function setup(){

    

    let cardWrapper = document.querySelector(".cardWrapper");
    cardWrapper.onmouseenter = playAudio;
    cardWrapper.onmouseleave = stopAudio;
}

function playAudio(){
	myAudioTrack.play();

}
function stopAudio(){
	myAudioTrack.stop();
}