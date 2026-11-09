  const BACKGROUNDS = {
    black:     "assets/bg_images/Alleyway1.png",                                  // black screen with no bg
    building: "assets/bg_images/Office_BG.png",        // example background image (수정 필요))
    office:    "assets/bg_images/Alleyway2.png",         
  };

  const backgroundEl = document.querySelector("#background"); // background element selector (수정 필요)
  // const backgroundEl = scenes[currentScene].bg

  function showBackground(bg_name) {
    // background image 보여주는 로직 필요
    backgroundEl.style.backgroundImage = BACKGROUNDS[bg_name];
  }

  const CHARACTERSTILLS = {

  };
