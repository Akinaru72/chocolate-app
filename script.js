// const openBtn = document.getElementById("openModalBtn");
// const backdrop = document.getElementById("modalBackdrop");
// const closeBtn = document.querySelector("#closeModalBackdrop");

const openHeaderBtn = document.getElementById("openHeaderBtn");
const headerMobileWindow = document.getElementById("headerWindow");
const closeHeaderBtn = document.querySelector("#closeHeaderBtn");

// openBtn.addEventListener("click", () => {
//   backdrop.classList.add("is-open");
// });

// closeBtn.addEventListener("click", () => {
//   backdrop.classList.remove("is-open");
// });

openHeaderBtn.addEventListener("click", () => {
  headerMobileWindow.classList.add("is-open");
});

closeHeaderBtn.addEventListener("click", () => {
  headerMobileWindow.classList.remove("is-open");
});
