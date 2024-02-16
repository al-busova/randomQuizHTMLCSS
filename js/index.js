import { guestions } from "../utils/guestions.js";
import { renderPupils } from "./renderPupils.js";
import { pupils } from "../utils/pupils.js";

const btnChooseQuestion = document.querySelector(".btn-quiz");
const fieldQuestion = document.querySelector(".question");
const wrapperQuestion = document.querySelector(".question-wrapper");
export const pupilsList = document.querySelector(".pupils-list");

let pupilItem;
let countQuestions = 0;
let alreadyPupils = [];

if (localStorage.getItem("pupils") === null) {
  localStorage.setItem("pupils", JSON.stringify(pupils));
  renderPupils(JSON.parse(localStorage.getItem("pupils")));
} else {
  renderPupils(JSON.parse(localStorage.getItem("pupils")));
}

if (localStorage.getItem("guestions") === null) {
  localStorage.setItem("guestions", JSON.stringify(guestions));
}

pupilsList.addEventListener("click", removePupil);
btnChooseQuestion.addEventListener("click", chooseQuestion);

function chooseQuestion() {
  pupilItem = document.querySelectorAll(".pupils-item");
  const pupils = JSON.parse(localStorage.getItem("pupils"));
  
  let randomPupil;
  for (let i = 0; i < pupilItem.length; i++) {
    randomPupil = pupils[getRandomIntInclusive(0, pupils.length - 1)];
    if (alreadyPupils.includes(randomPupil.id)) {
      continue;
    } else {
      for (let i = 0; i < pupilItem.length; i++) {
        pupilItem[i].classList.remove("select-pupil");
        if (pupilItem[i].dataset.id === randomPupil.id) {
          pupilItem[i].classList.add("select-pupil");
        }
      }
      alreadyPupils.push(randomPupil.id);
      if (alreadyPupils.length === 11) {
        alreadyPupils = [];
      }
      break;
    }
  }

  wrapperQuestion.classList.add("is-show");
  fieldQuestion.innerHTML = `<div class="bouncer"><div></div><div></div>
  <div></div><div></div></div>`;

  setTimeout(showQuestion, 1000);
  function showQuestion() {
    const localQuesions = JSON.parse(localStorage.getItem("guestions"));

    const randomQ =
      localQuesions[getRandomIntInclusive(0, localQuesions.length - 1)];
    if (randomQ === undefined) {
      fieldQuestion.innerHTML = `<p class="question-text">Питання закінчилися!</p>`;
      return btnChooseQuestion.removeEventListener("click", chooseQuestion);
    }
    fieldQuestion.innerHTML = `<p class="question-text">${randomQ}</p>`;

    const newListQ = JSON.parse(localStorage.getItem("guestions")).filter(
      (el) => {
        return el !== randomQ;
      }
    );

    localStorage.setItem("guestions", JSON.stringify(newListQ));
  }

  countQuestions = countQuestions + 1;
  btnChooseQuestion.innerHTML = `${countQuestions}`;

  wrapperQuestion.addEventListener("click", checkAnswer);
  function checkAnswer(e) {
    if (e.target.nodeName !== "BUTTON") {
      return;
    }
    if (e.target.dataset.id === "correct") {
      const newList = pupils.map((el) => {
        if (el.id === randomPupil.id) {
          return { id: `${el.id}`, name: `${el.name}`, count: el.count + 1 };
        } else {
          return el;
        }
      });
      localStorage.setItem("pupils", JSON.stringify(newList));
      renderPupils(newList);
    } else {
      fieldQuestion.innerHTML = `<p class="question-text">Шкода(( Спробуй наступного разу!</p>`;
    }
  }
}

function removePupil(e) {
  if (e.target.nodeName !== "svg" && e.currentTarget.nodeName !== "BUTTON") {
    return;
  }
  const needPupilId = e.target.dataset.id;
  const newList = JSON.parse(localStorage.getItem("pupils")).filter((el) => {
    return el.id !== needPupilId;
  });
  localStorage.setItem("pupils", JSON.stringify(newList));
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
