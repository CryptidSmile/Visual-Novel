  const BACKGROUNDS = {
    black:     null,                                  // black screen with no bg
    building: "assets/bg_images/Alleyway1.png",        // example background image (수정 필요))
    office:    "assets/bg_images/Alleyway1.png",         
  };

  const backgroundEl = "???"; // background element selector (수정 필요)


  function showBackground(name) {
    // background image 보여주는 로직 필요

  }

  const CHARACTERSTILLS = {

  };

  const charEl = document.querySelector("#character");
  const borisStill = new Image(100,200);
  borisStill.id = "boris";
  borisStill.src = "assets/character_stills/Char1.png";
  charEl.append(borisStill);