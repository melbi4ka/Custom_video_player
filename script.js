const video = document.querySelector("#video");
const play = document.querySelector("#play");
const stop = document.querySelector("#stop");
const progress = document.querySelector("#progress");
const timestamp = document.querySelector("#timestamp");

//Event listeners
video.addEventListener("click", toggleVideoStatus);
video.addEventListener("pause", updatePlayIcon);
video.addEventListener("play", updatePlayIcon);
video.addEventListener("timeupdate", updateProgress);

play.addEventListener("click", toggleVideoStatus);

stop.addEventListener("click", stopVideo);

progress.addEventListener("change", setVideoProgress);

//play or pause video
function toggleVideoStatus() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

//update play/pause icon
function updatePlayIcon() {
  if (!video.paused) {
    play.firstElementChild.classList.remove("fa-play");
    play.firstElementChild.classList.add("fa-pause");
  } else {
    play.firstElementChild.classList.remove("fa-pause");
    play.firstElementChild.classList.add("fa-play");
  }
  //   if (video.paused) {
  //     play.innerHTML = '<i class="fa fa-play fa-2x"></i>';
  //   } else {
  //     play.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
  //   }
}

//update progress & timestamp
function updateProgress() {
  progress.value = (video.currentTime / video.duration) * 100;

  let minutes = Math.floor(video.currentTime / 60);
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let seconds = Math.floor(video.currentTime % 60);
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  timestamp.textContent = `${minutes}:${seconds}`;
}

//set video time progress
function setVideoProgress() {
  video.currentTime = (+progress.value * video.duration) / 100;
}

function stopVideo() {
  video.currentTime = 0;
  video.pause();
}
