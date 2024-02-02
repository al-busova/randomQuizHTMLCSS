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
              <div class="count-answers">${renderCarrot(count)}</div>
      </li>`;
    })
    .join("");
  pupilsList.innerHTML = "";
  pupilsList.insertAdjacentHTML("beforeend", result);
}

function renderCarrot(num) {
  if (num === 0) {
    return `0`;
  }
  if (num === 1) {
    return `
                <svg class="icon-carrot" width="20" height="26" >
                  <use xlink:href="./images/icons.svg#icon-carrot"></use>
                </svg>
              `;
  }
  if (num === 2) {
    return `
                <svg class="icon-carrot" width="20" height="26" >
                  <use xlink:href="./images/icons.svg#icon-carrot"></use>
                </svg>
                  <svg class="icon-carrot" width="20" height="26" >
                  <use xlink:href="./images/icons.svg#icon-carrot"></use>
                </svg>
              `;
  }
  if (num === 3) {
    return `
                 <svg class="icon-carrot" width="20" height="26" >
                  <use xlink:href="./images/icons.svg#icon-carrot"></use>
                </svg>
                  <svg class="icon-carrot" width="20" height="26" >
                  <use xlink:href="./images/icons.svg#icon-carrot"></use>
                </svg>
                  <svg class="icon-carrot" width="20" height="26" >
                  <use xlink:href="./images/icons.svg#icon-carrot"></use>
                </svg>
              `;
  }
  if (num === 4) {
    return `
               <svg class="icon-carrot" width="20" height="26" >
                  <use xlink:href="./images/icons.svg#icon-carrot"></use>
                </svg>
                  <svg class="icon-carrot" width="20" height="26" >
                  <use xlink:href="./images/icons.svg#icon-carrot"></use>
                </svg>
                 <svg class="icon-carrot" width="20" height="26" >
                  <use xlink:href="./images/icons.svg#icon-carrot"></use>
                </svg>
                  <svg class="icon-carrot" width="20" height="26" >
                  <use xlink:href="./images/icons.svg#icon-carrot"></use>
                </svg>
              `;
  }
  if (num === 5) {
    return `
                <svg class="icon-carrot" width="20" height="26" >
                  <use xlink:href="./images/icons.svg#icon-carrot"></use>
                </svg>
                  <svg class="icon-carrot" width="20" height="26" >
                  <use xlink:href="./images/icons.svg#icon-carrot"></use>
                </svg>
                <svg class="icon-carrot" width="20" height="26" >
                  <use xlink:href="./images/icons.svg#icon-carrot"></use>
                </svg>
                  <svg class="icon-carrot" width="20" height="26" >
                  <use xlink:href="./images/icons.svg#icon-carrot"></use>
                </svg>
                <svg class="icon-carrot" width="20" height="26" >
                  <use xlink:href="./images/icons.svg#icon-carrot"></use>
                </svg>
              `;
  }
}
