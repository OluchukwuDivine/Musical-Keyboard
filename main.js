const dohBtn = document.querySelector(".doh-btn");
const rehBtn = document.querySelector(".reh-btn");
const mihBtn = document.querySelector(".mih-btn");
const fahBtn = document.querySelector(".fah-btn");
const sohBtn = document.querySelector(".soh-btn");
const lahBtn = document.querySelector(".lah-btn");
const tihBtn = document.querySelector(".tih-btn");
const bigDohBtn = document.querySelector(".big-doh-btn");
const octaveOneBtn = document.querySelector(".octave-btn-1");
const octaveTwoBtn = document.querySelector(".octave-btn-2");
const octaveThreeBtn = document.querySelector(".octave-btn-3");
const displayNote = document.querySelector(".display-note");


const dohAudio = new Audio("sounds/doh.wav");
const rehAudio = new Audio("sounds/reh.wav");
const mihAudio = new Audio("sounds/mih.wav");
const fahAudio = new Audio("sounds/fah.wav");
const sohAudio = new Audio("sounds/soh.wav");
const lahAudio = new Audio("sounds/lah.wav");
const tihAudio = new Audio("sounds/tih.wav");
const bigDohAudio = new Audio("sounds/big-doh.wav");
const octaveOneAudio = new Audio("sounds/octave.wav");
const octaveTwoAudio = new Audio("sounds/octave2.wav");
const octaveThreeAudio = new Audio("sounds/octave3.wav");


dohBtn.addEventListener("click", () => {
  dohAudio.play();
  displayNote.textContent = "Doh";
});
rehBtn.addEventListener("click", () => {
    rehAudio.play();
    displayNote.textContent = "Reh";
  });
  mihBtn.addEventListener("click", () => {
    mihAudio.play();
    displayNote.textContent = "Mih";
  });
  fahBtn.addEventListener("click", () => {
    fahAudio.play();
    displayNote.textContent = "Fah";
  });
  sohBtn.addEventListener("click", () => {
    sohAudio.play();
    displayNote.textContent = "Soh";
  });
  lahBtn.addEventListener("click", () => {
    lahAudio.play();
    displayNote.textContent = "Lah";
  });
  tihBtn.addEventListener("click", () => {
    tihAudio.play();
    displayNote.textContent = "Tih";
  });
  bigDohBtn.addEventListener("click", () => {
    bigDohAudio.play();
    displayNote.textContent = "Doh-Octave";
  });
  octaveOneBtn.addEventListener("click", () => {
    octaveOneAudio.play();
    displayNote.textContent = "Default Octave";
  });
  octaveTwoBtn.addEventListener("click", () => {
    octaveTwoAudio.play();
    displayNote.textContent = "Default Octave -2";
  });
  octaveThreeBtn.addEventListener("click", () => {
    octaveThreeAudio.play();
    displayNote.textContent = "Default Octave -3";
  });


