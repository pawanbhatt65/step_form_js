// steps starts
const prevButton = document.querySelectorAll(".prev");
const nextButton = document.querySelectorAll(".next");
const progress = document.getElementById("progress");
const formStepCounter = document.querySelectorAll(".form-step-counter");
const progressItems = document.querySelectorAll(".progress-item");

let formStepNum = 0;

nextButton.forEach((btn) => {
  btn.addEventListener("click", () => {
    formStepNum++;
    updateFormStep();
    updateProgressBar();
  });
});

prevButton.forEach((btn) => {
  btn.addEventListener("click", () => {
    formStepNum--;
    updateFormStep();
    updateProgressBar();
  });
});

function updateFormStep() {
  formStepCounter.forEach((formStep) => {
    formStep.classList.contains("form-step-counter-active") &&
      formStep.classList.remove("form-step-counter-active");
  });
  formStepCounter[formStepNum].classList.add("form-step-counter-active");
}

function updateProgressBar() {
  progressItems.forEach((progressItem, index) => {
    if (index < formStepNum + 1) {
      progressItem.classList.add("progress-item-active");
    } else {
      progressItem.classList.remove("progress-item-active");
    }
  });

  const progressItemActive = document.querySelectorAll(".progress-item-active");
  progress.style.width =
    ((progressItemActive.length - 1) / (progressItems.length - 1)) * 100 + "%";
}
// steps end
