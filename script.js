console.log("welcome");
let playIcon =
  '<path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>';
let pauseIcon =
  '<path d="M48 64C21.5 64 0 85.5 0 112V400c0 26.5 21.5 48 48 48H80c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm192 0c-26.5 0-48 21.5-48 48V400c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H240z"/>';
let songIndex=0;
let audioElement = new Audio("1.mp3");
let masterPlay = document.getElementById("masterPlay");
let masterPlaySVG = document.getElementById("masterPlaySVG");
let progressBar = document.getElementById("progressBar");
// // let songItems=Array.from(document.getElementsByClassName('songItem'));
let songs=[
    {songName:"MyAudio",filePath:"1.mp3",coverpath:"cover1.jpg"},
    {songName:"MyAudegdfgfdggio",filePath:"1.mp3",coverpath:"cover1.jpg"},
    {songName:"MyAetudio",filePath:"1.mp3",coverpath:"cover1.jpg"},
    {songName:"MyAio",filePath:"1.mp3",coverpath:"cover1.jpg"},
    {songName:"MyAgryudio",filePath:"1.mp3",coverpath:"cover1.jpg"},
    {songName:"MyAggfdgfdudio",filePath:"1.mp3",coverpath:"cover1.jpg"},
    {songName:"MydgfgfdgfdgfAudio",filePath:"1.mp3",coverpath:"cover1.jpg"},
    {songName:"MyAttrtrudio",filePath:"1.mp3",coverpath:"cover1.jpg"},
    {songName:"MyAurrrtdio",filePath:"1.mp3",coverpath:"cover1.jpg"},

];
// songItems.forEach((element,i)=>{
//     element.getElementsByTagName('img')[0].src=songs[i].coverpath;
//     element.getElementsByTagName('span')[0].innerText=songs[i].songName;
// })

masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlaySVG.innerHTML = pauseIcon;
    masterPlay.classList.remove("up");
    masterPlay.classList.add("down");
  } else {
    audioElement.pause();
    masterPlaySVG.innerHTML = playIcon;
    masterPlay.classList.remove("down");
    masterPlay.classList.add("up");
  }
});

audioElement.addEventListener("timeupdate", () => {
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  if (audioElement.currentTime === audioElement.duration) {
    audioElement.pause();
    masterPlaySVG.innerHTML = playIcon;
    masterPlay.classList.remove("down");
    masterPlay.classList.add("up");
    progress = 0;
  }
  progressBar.value = progress;
});

progressBar.addEventListener("change", () => {
  audioElement.currentTime = (progressBar.value * audioElement.duration) / 100;
});

//  const makeAllplays=()=>{
//     Array.from(document.getElementsByClassName('songItemPlay')).forEach((e)=>{
//         e.classList.remove('fa-pause');
//         e.classList.add('fa-play');
//     })
// }
// Array.from(document.getElementsByClassName('songItemPlay')).forEach((e)=>{
//     e.addEventListener('click',(el)=>{
//         makeAllplays();
//         songIndex=parseInt(el.target.id);
//         el.target.classList.remove('fa-play');
//         el.target.classList.add('fa-pause');
//         audioElement.src=`${songIndex+1}.mp3`;
//         audioElement.currentTime=0;
//         audioElement.play();
//        masterPlay.classList.remove('fa-play');
//         masterPlay.classList.add('fa-pause');

//     })
// })

var next = document.getElementById("next");
next.addEventListener("click", (e) => {
  if(songIndex>=8){
      songIndex=0;
  }else{
      songIndex++;
  }
  next.classList.remove("up");
  next.classList.add("down");

//   audioElement.src=`${songIndex+1}.mp3`;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlaySVG.innerHTML = pauseIcon;
  masterPlay.classList.remove("up");
  masterPlay.classList.add("down");
  setTimeout(() => {
    next.classList.remove("down");
    next.classList.add("up");
  }, 100);
});

let previous = document.getElementById("previous");
previous.addEventListener("click", () => {
  if(songIndex<=0){
      songIndex=8;
  }else{
      songIndex--;
  }
//   audioElement.src=`${songIndex+1}.mp3`;
  
  previous.classList.remove("up");
  previous.classList.add("down");

  // audioElement.src=`${songIndex+1}.mp3`;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlaySVG.innerHTML = pauseIcon;
  masterPlay.classList.remove("up");
  masterPlay.classList.add("down");
  setTimeout(() => {
    previous.classList.remove("down");
    previous.classList.add("up");
  }, 100);
});
let theme={
    bgs1:"#eae9ef",
    bgs2:"orangered",
    bgs3:"green",
    bgs4:'#2f2c2c',
}
let svgs=Array.from( document.getElementsByTagName('svg'));
const greysvg=()=>{

    svgs.forEach(a => {
      a.classList.add("changefont")
    });
}
const blacksvg=()=>{
  svgs.forEach(a => {
    a.classList.remove("changefont")
  });
}

let bgs1=document.getElementById('bg-s1');
let bgs2=document.getElementById('bg-s2');
let bgs3=document.getElementById('bg-s3');
let bgs4=document.getElementById('bg-s4');
bgs1.addEventListener('click',()=>{
    bgs1.classList.remove("up");
  bgs1.classList.add("down");
    blacksvg();
  //   console.log(document.documentElement.style.);
    document.documentElement.style.setProperty("--color","#1d1c1b");
    document.documentElement.style.setProperty("--bgcolor",theme.bgs1);
    document.documentElement.style.setProperty("--topleftshadowcolor","white");
    document.documentElement.style.setProperty("--bottomrightshadowcolor","#6a6363");
    setTimeout(() => {
       bgs1.classList.remove("down");
       bgs1.classList.add("up");
      }, 100);
})
bgs2.addEventListener('click',()=>{
    bgs2.classList.remove("up");
    greysvg();
    bgs2.classList.add("down");
    document.documentElement.style.setProperty("--color","#ddd8d8");
    document.documentElement.style.setProperty("--bgcolor",theme.bgs2);
    document.documentElement.style.setProperty("--topleftshadowcolor","#fc6831");
    document.documentElement.style.setProperty("--bottomrightshadowcolor","#ad2f01");
    setTimeout(() => {
        bgs2.classList.remove("down");
        bgs2.classList.add("up");
       }, 100);
})
bgs3.addEventListener('click',()=>{
    bgs3.classList.remove("up");
    greysvg();
    bgs3.classList.add("down");
    document.documentElement.style.setProperty("--color","#ddd8d8");
    document.documentElement.style.setProperty("--bgcolor",theme.bgs3);
    document.documentElement.style.setProperty("--topleftshadowcolor","#029002");
    document.documentElement.style.setProperty("--bottomrightshadowcolor","#026802");
    setTimeout(() => {
        bgs3.classList.remove("down");
        bgs3.classList.add("up");
       }, 100);
})
bgs4.addEventListener('click',()=>{
    bgs4.classList.remove("up");
    greysvg();
    bgs4.classList.add("down");
    document.documentElement.style.setProperty("--color","#ddd8d8");
    document.documentElement.style.setProperty("--bgcolor",theme.bgs4);
    document.documentElement.style.setProperty("--topleftshadowcolor","#413c3c");
    document.documentElement.style.setProperty("--bottomrightshadowcolor","#211f1f");
    setTimeout(() => {
        bgs4.classList.remove("down");
        bgs4.classList.add("up");
       }, 100);
})