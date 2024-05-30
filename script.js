const ratings_ele = document.querySelectorAll(".emoji");
const btn_ele = document.getElementById("btn");

const containerEl = document.getElementById("container");

let rating_selection = "";

ratings_ele.forEach((ratingEl) => {
  ratingEl.addEventListener("click", (event) => {
    removeActive();
    rating_selection =
      event.target.innerText || event.target.parentNode.innerText;
    event.target.classList.add("active");
    event.target.parentNode.classList.add("active");
  });
});

btn_ele.addEventListener("click", () => {
  if (rating_selection !== "") {
    containerEl.innerHTML = `
        <strong>Thank you!</strong>
        <br>
        <br>
        <strong>Feedback: ${rating_selection}</strong>
        <p>We'll use your feedback to improve our customer support.</p>
        `;
  }
});

function removeActive() {
  ratings_ele.forEach((ratingEl) => {
    ratingEl.classList.remove("active");
  });
}