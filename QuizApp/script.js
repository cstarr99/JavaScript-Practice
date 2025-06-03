const form = document.querySelector("#quiz-form");
const answers = Array.from(document.querySelectorAll(".answer"));
const alert = document.querySelector("#alert");
const questions = Array.from(document.querySelectorAll(".question-item"));

form.addEventListener("submit", (e) => {
  e.preventDefault();
  //finds all selected answers out of all answer choices.
  selectedAnswers = answers.filter((answers) => answers.checked);
  questions.forEach((question) => {
    question.classList.add("incorrect");
    question.classList.remove("correct");
  });
  selectedAnswers.forEach((answer) => {
    //variable that sees is the answer is right
    const isTrue = answer.value === "true";
    //finds the answers closest question item parent.
    const questionItem = answer.closest(".question-item");
    //if the questions value is true it will make it correct, and if it is wrong it will make it incorrect.
    if (isTrue) {
      questionItem.classList.add("correct");
      questionItem.classList.remove("incorrect");
    } else {
      questionItem.classList.remove("correct");
      questionItem.classList.add("incorrect");
    }
    //variable that sees if every selected is answer is true
    const allTrue = selectedAnswers.every((answer) => answer.value === "true");
    //variable that see if every question is answered.
    const allAnswered = selectedAnswers.length === questions.length;
    //if statement that makes congratulations tab pop up and leave after 1 second.
    if (allTrue && allAnswered) {
      alert.classList.add("active");
      setTimeout(() => {
        alert.classList.remove("active");
      }, 1000);
    }
  });
});
