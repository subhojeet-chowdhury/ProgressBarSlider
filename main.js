const bar = document.querySelector(".bar");
const next = document.querySelector(".next");
const previous = document.querySelector(".previous");
const counters = document.querySelectorAll(".counter");

let counter = 0;

previous.addEventListener("click", regress);
next.addEventListener("click", progress);

function progress() {
  counter++;
  bar.style.width = `${counter * 0.333 * 600}px`;
  counters[counter].style.borderColor = "#4780e9";
  if (counter > 0) {
    previous.classList.remove("disable");
  }
  if (counter === 3) {
    next.classList.add("disable");
  }
}

function regress() {
  counter--;
  bar.style.width = `${counter * 0.333 * 600}px`;
  counters[counter + 1].style.borderColor = "#ccc";

  if (counter < 3) {
    next.classList.remove("disable");
  }
  if (counter === 0) {
    previous.classList.add("disable");
  }
}
