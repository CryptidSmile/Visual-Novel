// Stores the game engine data

// 1. document에서 speaker, text를 가져와야 텍스트를 바꿀수있겠지
// id = speaker => element id로 가져오는거
//뭘 바꿀건데?


const speakerEl = document.querySelector("#speaker");
const textEl = document.querySelector("#text");
const diaBoxEl = document.querySelector("#dialogue-box");
const startBtnEl = document.querySelector("#start-btn");
const bgmEl = document.querySelector("#bg-music");
const titleScrn = document.querySelector("#title-screen");
const storyScrn = document.querySelector("#story-screen");
const gameScrn = document.querySelector("#game-screen");
const modalScrn = document.querySelector("#modal-screen");
const overlay = document.querySelector("#overlay");
const titleBgm = document.querySelector("#title-music");
const muteBtn = document.querySelector("#mute-btn");

const winHeight = window.innerHeight;
const winWidth = window.innerWidth;



const HEIGHT = 1080;
const WIDTH = 1920;

let currentScene;
let currentIndex;

// scenes -> prologue 를 가져와야하는데 key를 문자열로 줄지, 오브젝트를 처음부터 넘겨줄지? 

function fitScreen(){
    console.log("resized!")
    // 1920 1080 , user A: w, h ;
    //vw/gw = A
    //vh/gh = B
    //if A > B = gh*B
    //else = gw*A

    const widthBy = winWidth / WIDTH;
    const heightBy = winHeight / HEIGHT;
    const smallerValue = Math.min(widthBy, heightBy);

    // window. -> 
    // 1. 곱해야하는 숫자를 구해야하지.
    // 2. window WIDTH / gamescreen WIDTH = A , window HEIGHT / gamescreen HEIGHT = B
    // 3. A 와 B중 작은 값을 쓴다. min(A,B)
    // 4. transform: .... translate 주고, scale 주고 
    gameScrn.style.transform = `translate(-50%, -50%) scale(${smallerValue})`;
}

window.addEventListener("resize", fitScreen);
fitScreen();

//game 도중 esc 버튼 누르면 모달(세팅)창이 뜨게 만들기
document.addEventListener("keydown", (e) => {
    console.log("keydown here");
    if(e.key === "Escape") {
        overlay.hidden = false;
    }
    
});

// 커튼을 클릭하면 좌우로 열리고 타이틀 음악 재생
// (브라우저는 사용자가 한 번 클릭하기 전엔 소리를 막기 때문에 이 클릭이 필요하다)
const curtainEl = document.querySelector("#curtain");
curtainEl.addEventListener("click", (e) => {
    e.stopPropagation(); // 이 클릭이 대사 넘기기로 세어지지 않게
    curtainEl.classList.add("open");
    titleBgm.play();
    setTimeout(() => { curtainEl.hidden = true; }, 1500); // 다 열리면 치우기 (CSS 1.5s와 맞춤)
});

function goToScene(name){
    currentScene = name;
    currentIndex = 0;
    // 텍스트 디스플레이 해줘
    showLine();
}

// game start 버튼을 누르면 노래가 재생된다.
startBtnEl.addEventListener("click", () => {
    titleBgm.pause();
    bgmEl.play();
    titleScrn.hidden = true;
    storyScrn.hidden = false;
    goToScene("prologue");
});


function showLine() {
    const line = scenes[currentScene].lines[currentIndex];
    speakerEl.textContent = line.speaker;
    textEl.textContent = line.text;
};

function nextLine(){
    ++currentIndex;
    const myScene = scenes[currentScene];
    if (myScene.lines.length === currentIndex){
        goToScene(myScene.next);
    }
}

muteBtn.addEventListener("click", () => {
    //오디오태그를 다 가져와서 뮤트 해버림
    const audios = document.querySelectorAll("audio"); // NodeList .forEach
    audios.forEach((audio) => {
        audio.muted = !audio.muted
        if ( audio.muted == true)
        {muteBtn.textContent = "Unmute"}
        else {muteBtn.textContent = "Mute"}
    });
});

storyScrn.addEventListener("click", () => {
    nextLine();
    showLine();
});

