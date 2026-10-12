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

let currentScene = ("prologue")
let currentIndex = [0]

// scenes -> prologue 를 가져와야하는데 key를 문자열로 줄지, 오브젝트를 처음부터 넘겨줄지? 

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


function displayText(index) {
    // 내가필요한 프롤로그 오브젝트 가져오기
    
    // 
    const line = scenes.prologue.lines[index];
    speakerEl.textContent = line.speaker;
    textEl.textContent = line.text;

};

function goToScene(name){
    currentScene = name;
    currentIndex = 0;
    // 텍스트 디스플레이 해줘
    displayText(currentIndex);
}

// game start 버튼을 누르면 노래가 재생된다.
startBtnEl.addEventListener("click", () => {
    titleBgm.pause();
    bgmEl.play();
    titleScrn.hidden = true;
    storyScrn.hidden = false;
    goToScene("prologue");
});



document.addEventListener("click", () => {
    // scenes에서 대사가져오기
    // display text를 이용해서 대사 출력하기
    let currentIndex = +1
    displayText();
});

