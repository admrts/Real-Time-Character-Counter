const textArea = document.getElementById("textarea");
const totalCounter = document.querySelector(".total-counter");
const remainingCounter = document.querySelector(".remaining-counter");

textArea.addEventListener("keyup", () => {
  updateCounter();
  console.log(textArea.maxLength);
});

const updateCounter = () => {
  totalCounter.innerText = textArea.value.length;
  remainingCounter.innerText = textArea.maxLength - textArea.value.length;
};
