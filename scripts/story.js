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
      {speaker: "Boris", text: "Alright, let’s get started kid. Come on in, Hilda."},
      {speaker: "Narrator", text: "A CSI agent joins you and Boris in the office, holding a cream colored case file in her hands. She hands you the file."},
      {speaker: "Hilda", text: "It’s a suspected murder case. Victim was Casey Paludosus, age 26. His body was found in the alleyway behind the Crab Barrel Bar on Pearlweed Avenue, near the intersection with Frogbit Lane. Multiple external and internal wounds."},
      {speaker: "Hilda", text: "This file contains all the evidence we’ve gathered from the scene, as well as a list of suspects and individuals close to the victim."},
      {speaker: "Boris", text: "Thank you, dear."},
      {speaker: "Hilda", text: "Don’t call me ‘dear,’ Boris."},
      {speaker: "Boris", text: "Grouchy as usual, I see."},
      {speaker: "Boris", text: "Anyways, as Ms. Virilis so kindly briefed you — this is a likely murder case. Everything you’ll need you can find in that folder, and you can log any new findings in your notebook."},
      {speaker: "Boris", text: "Give it a look and you can pick where you want to start your investigation. I personally suggest you start with the autopsy report before you interrogate anyone though."},
      {
        type: "choice",
        prompt: "What do you want to do first?",
        options: [
          {text:"Review autopsy report", next:""},
          {text:"Review photos from the scene", next:""},
          {text:"Review witness report log", next:""},
          {text:"Speak with witnesses", next:""},
          {text:"Speak with suspects", next:""},
        ]
      }
    ],
  },
}