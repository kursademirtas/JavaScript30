const player =document.querySelector(".player");
const video =document.querySelector(".player__video");
const progress =document.querySelector(".progress");
const progressBar =document.querySelector(".progress__filled");
const play =document.querySelector(".toggle");
const playerSlider =document.querySelectorAll(".player__slider");
const skipButtons =document.querySelectorAll("[data-skip]");
const full = document.querySelector(".full");

function togglePlay() {
    if(video.paused){
        video.play();
        play.textContent ="⏸️";
    }else {
        video.pause();
        play.textContent ="▶";
    }
}

function skip() {
    video.currentTime += parseFloat(this.dataset.skip);
}

function handleSlideUpdate() {
    video[this.name] = this.value;

}

function handleProgress() {
    const percent = (video.currentTime/video.duration)*100;
    progressBar.style.flexBasis =`${percent}%`;

}

function handleScrub(e) {
    const scrubTime = (e.offsetX/progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}


let isFullScreen = false;
function handleFullScreen(){
    if(!isFullScreen) {
        player.style.width = "100%"
        isFullScreen= true;
    }else {
        player.style.width = "50%"
        isFullScreen = false;
    }
}

video.addEventListener('timeupdate', handleProgress);
video.addEventListener('click', togglePlay);

play.addEventListener('click', togglePlay);
skipButtons.forEach(button => button.addEventListener('click',skip));

playerSlider.forEach(slider => slider.addEventListener('change', handleSlideUpdate));
playerSlider.forEach(slider => slider.addEventListener('mousemove', handleSlideUpdate));

progress.addEventListener('click', handleScrub);
progress.addEventListener('mousemove', handleScrub);

full.addEventListener('click', handleFullScreen);

let mouseDown = false;

progress.addEventListener('click', handleScrub);

