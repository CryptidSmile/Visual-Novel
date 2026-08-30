// Stores the game engine data

// 1. document에서 speaker, text를 가져와야 텍스트를 바꿀수있겠지
// id = speaker => element id로 가져오는거
//뭘 바꿀건데?
const speakerEl = document.querySelector("#speaker");
const textEl = document.querySelector("#text");
const diaBoxEl = document.querySelector("#dialogue-box");

// 2. 실제로 배열에 있는 내용으로 speaker, text를 교체 - function (parameter)
function displayText(index) {
    const line = story[index];
    speakerEl.textContent = line.speaker;
    textEl.textContent = line.text;
};

// 3. 배열을 순회(iterate)
// story 0, story 1 story 2
// 진짜 현재 index
let currentIndex = -1;
document.addEventListener("click", () => {
    currentIndex++;
    // 조건: 내 배열길이보다 작으면 함수를 호출해 or 내배열길이보다크면 아무것도하지마
    if(currentIndex >= story.length) {
        textEl.textContent = "The END";
        speakerEl.textContent = "Narrator";
    }
    displayText(currentIndex);
});