
const modal = document.querySelector(".modal-overlay");
const modalBtn = document.querySelector(".modal-btn").addEventListener("click", () => {
    modal.classList.add("open-modal");
  });
const closeBtn = document.querySelector(".close-btn").addEventListener("click",() => {
    modal.classList.remove("open-modal");
  });


