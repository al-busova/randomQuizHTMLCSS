import { pupilsList } from "./index.js";

export function renderPupils(pupils) {
  const result = pupils
    .map(({ id, name, count }) => {
      return `<li class="pupils-item" data-id=${id}>
            <h2 class="pupil-name" >
              ${name}
            </h2>
               <button type="button" class="btn-remove-pupil" data-id=${id}>
                <svg class="icon-close" width="12" height="12" data-id=${id}>
                  <use xlink:href="./images/icons.svg#close"></use>
                </svg>
              </button>
              <div class="count-answers" data-count=${count}></div>
      </li>`;
    })
    .join("");
  pupilsList.innerHTML = "";
  pupilsList.insertAdjacentHTML("beforeend", result);
  document.querySelectorAll(".count-answers").forEach((el) => {
    if (el.dataset.count === `0`) {
      el.insertAdjacentHTML("beforeend", `0`);
    } else {
      for (let step = 0; step < el.dataset.count; step++) {
        el.insertAdjacentHTML(
          "beforeend",
          `<svg class="icon-carrot" width="20" height="26" >
                <use xlink:href="./images/icons.svg#icon-carrot"></use>
                </svg>`
        );
      }
    }
  });
}

