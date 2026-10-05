// Stores the story data

const scenes = {
  prologue:{
    bg: "black",
    lines: [
      {speaker: "Narrator", text: "Narrator Text"},
      {speaker: "Player", text: "Player Text"},
    ],
    next: "briefing",
  },

  briefing:{
    bg: "building",
    lines: [
      {speaker: "Narrator", text: "Briefing Text"},
      {speaker: "Player", text: "Player Text"},
    ],
    next: "interrogation",
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
          { text: "answer1", next: "???", set: { tod_narrow: true } },
          { text: "answer2", next: "???", set: { dna_rush: true } },
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