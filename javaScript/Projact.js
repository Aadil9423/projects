let songIndex = 0;
let audioElement = new Audio("1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let songItem = Array.from(document.getElementsByClassName("songItem"));
let songs = [
  {
    songName: "Salam-e-Ishq",
    filepath: "song/1.mp3",
    coverPath: "covers/1.jpg",
  },
  {
    songName: "Salam-e-Ishq",
    filepath: "song/2.mp3",
    coverPath: "covers/2.jpg",
  },
  {
    songName: "Salam-e-Ishq",
    filepath: "song/3.mp3",
    coverPath: "covers/3.jpg",
  },
  {
    songName: "Salam-e-Ishq",
    filepath: "song/4.mp3",
    coverPath: "covers/4.jpg",
  },
  {
    songName: "Salam-e-Ishq",
    filepath: "song/5.mp3",
    coverPath: "covers/5.jpg",
  },
  {
    songName: "Salam-e-Ishq",
    filepath: "song/6.mp3",
    coverPath: "covers/6.jpg",
  },
  {
    songName: "Salam-e-Ishq",
    filepath: "song/7.mp3",
    coverPath: "covers/7.jpg",
  },
  {
    songName: "Salam-e-Ishq",
    filepath: "song/8.mp3",
    coverPath: "covers/8.jpg",
  },
  {
    songName: "Salam-e-Ishq",
    filepath: "song/9.mp3",
    coverPath: "covers/9.jpg",
  },
  {
    songName: "Salam-e-Ishq",
    filepath: "song/10.mp3",
    coverPath: "covers/10.jpg",
  },
];

songItem.forEach((element, i) => {
  console.log(element, i);
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByTagName("songNmae")[0].innerText = songs[i].songName;
});

// audioElement.play()
// handle play/pause Click

masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-circle-pause");
    masterPlay.classList.add("fa-circle-play");
    gif.style.opacity = 0;
  }
});
//Listen to Event
audioElement.addEventListener("timeupdate", () => {
  // console.log("timeupdate");
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  // console.log(progress)
  myProgressBar.value = progress;
});

myProgressBar.addEventListener("changr", () => {
  audioElement.currentTime = (myProgressBar.value * audioElement.duratin) / 100;
}); 
Array.from( document.getElementsByClassName('songeplay').forEach((elem)=>{
  elem.addEventListener('click',(e)=>{
  console.log(e)
  makeAllplays();
  e.target.classList.remove('fa-play-circle')
  e.target.classList.add('fa-pause-circle')
  }
)})
)
