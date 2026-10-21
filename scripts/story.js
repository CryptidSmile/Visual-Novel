// Stores the story data


const scenes = {
  prologue:{
    bg: "black",
    lines: [
      {speaker: "Narrator", text: "You’ve finally graduated from your boring apprentice status after X long years. It was a grueling experience, but you are now a full fledged detective of Riverbank."},
      {speaker: "Narrator", text: "For your final test, you will be let loose on a real criminal case alone. Your mentor will be there for help, but he will not solve the case for you."},
      {speaker: "Narrator", text: "Justice depends on you now, detective. Good luck."},
      {speaker: "Player", text: "The sun is an insult to your eyes as you walk to the Riverbank police station, your heart hammering at the thought of your first solo case."},
      {speaker: "Player", text: "No longer will the gilded cage of your apprenticeship hold you back, but the freedom outside won’t provide for you either."},
      {speaker: "Player", text: "Boris waits in the briefing room of the station — your mentor since the start of it all."},
      {speaker: "Boris", text: "Hey kid. Ready for your first ever case? I’ve got a good one picked out just for you."},
      {speaker: "Player", text: "Boris slides you a legal document."},
      {speaker: "Boris", text: "You’ll have to sign that document before we start though. Legal spiel that boils down to you agreeing to the terms required to begin officially working here."},
    ],
    next: "briefing",
  },

  briefing:{
    bg: "building",
    lines: [
      {speaker: "Narrator", text: "Briefing Text"},
      {speaker: "Player", text: "Player Text"},
    ],
    next: "office",
  },

  office:{
    bg: "office",
    lines: [
      {speaker: "Narrator", text: "Office Text"},
      {speaker: "Player", text: "Player Text"},
      { type: "get", id: "D00", name: "Evidence 0 - ??" }, 
      {
        type: "choice",
        prompt: "first 분기점 질문",
        options: [ 
          { text: "부검을 더 자세히해보자", next: "???", set: { tod_narrow: true } },
          { text: "dna 검사 요청했다.", next: "???", set: { dna_rush: true } },
          { text: "answer3", next: "???", set: { trust: +1 } },
        ],
      },
    ],
    next: "???",
  }
}


const story = [
  { speaker: "Narrator", text: "Once upon a time, in a land far away" },
  { speaker: "Narrator", text: "There lived a detective in a crime riddled city called Crimopolis"},
  { speaker:"Player", text:"This person has been arrested on suspicions of a crime. How do I get the truth out of them?" },
  { speaker:"Narrator", text:"What will you do?" },
  { speaker: "Player", text: "How did you know the victim?" },
  { speaker: "Suspect", text: "They were my next door neighbor, and we occasionally ran into each other in the neighborhood." },
  { speaker: "Player", text: "Are you sure that's all you knew them by?" },
];