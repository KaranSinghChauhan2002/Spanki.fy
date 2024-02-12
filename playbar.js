let seekbar = document.getElementsByClassName("sb")[0]
async function initAudioControls() {
    let playButton = document.getElementsByClassName("p")[1];
    let audio = document.getElementsByClassName("aud")[0];

    playButton.addEventListener("click", () => {
        if (audio.paused) {
            audio.play();
            playButton.setAttribute("src", "images/icons8-pause-50.png");
        } else {
            audio.pause();
            playButton.setAttribute("src", "images/icons8-circled-play-50.png");
        }
    });
}











//////////////////////////////
initAudioControls();

let sound = document.getElementsByClassName("aud")[0];


document.getElementById("soundlevel").addEventListener("input", function () {
    let soundvol = document.getElementById("soundlevel").value;
    console.log(soundvol)
    sound.volume = soundvol / 100;

});




let muteButton = document.getElementById("mutednot");
muteButton.addEventListener("click", function () {

    if (sound.volume > 0) {

        sound.volume = 0;
        muteButton.setAttribute("src", "images/muted.png");
        document.getElementById("soundlevel").setAttribute("value", "0")
    } else {

        sound.volume = 0.7;
        muteButton.setAttribute("src", "images/sound.png");
        document.getElementById("soundlevel").setAttribute("value", "90")
    }
});
let res = 0;
let repeat = document.getElementsByClassName("repeat")[0];
let repeat1=document.getElementsByClassName("repeat1")[0]
function looped() {

        repeat.addEventListener("click", () => {
            if(res==0){
                document.getElementsByClassName("aud")[0].setAttribute("loop", "")
                repeat1.setAttribute("src","images/icons8-repeat-50.png")
                res = 1

          
            }
            else{
                document.getElementsByClassName("aud")[0].removeAttribute
                ("loop")
                repeat1.setAttribute("src","images/norepeat.png")
                res=0
            }

        })

}
looped()
