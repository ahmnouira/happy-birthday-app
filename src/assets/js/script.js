$(document).ready(() => {

     // for legacy browsers
     const AudioContext = window.AudioContext || window.webkitAudioContext;
     const audioContext = new AudioContext();
     // get the audio element
     const audioElement = document.querySelector('audio');
     // pass it into the audio context
     const track = audioContext.createMediaElementSource(audioElement);
     track.connect(audioContext.destination);
     const playButton = document.querySelector('button');

     playButton.addEventListener('click', () => {
         // check if context is in suspended state (autoplay policy)
         if (audioContext.state === 'suspended') {
             audioContext.resume();
         }
     
         // play or pause track depending on state
         if (playButton.getAttribute('data-playing') === 'false') {
             audioElement.play();
             playButton.setAttribute('data-playing','true');
             $("button").removeClass("btn-danger").addClass("btn-dark");
             $("button").text('Pause');
             
         } else if (playButton.getAttribute('data-playing') === 'true') {
             audioElement.pause();
             playButton.setAttribute('data-playing', 'false');
             $("button").removeClass("btn-dark").addClass("btn-danger");
             $("button").text("Play");
         }
     
     }, false);

     // ended music is not yet treated
     

    for (let i = 0; i < 85; i++ ) {
        $("#img").fadeIn(500);
        $("#img").fadeOut(500);
    }

    $("#img").fadeIn();

});
