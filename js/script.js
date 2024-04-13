`use strict`;

const btnImg = document.querySelectorAll(".plus");
const hideBtns = document.querySelectorAll(".minus");
const answer = document.querySelectorAll(".answer");

// State Variable
let flag = false;

// Adding Event Listener to the show faq btn

for (let i = 0; i < btnImg.length; i++) {
  btnImg[i].addEventListener("click", (e) => {
    flag = true;
    const ans = document.getElementById("ans" + i);
    // Using the setTimeout() to delay
    setTimeout(() => {
      ans.classList.remove("hide");
      btnImg[i].classList.add("hide");
      hideBtns[i].classList.remove("hide");
    }, "200");
  });
}

// Evvent Listener to hide the faq
hideBtns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    const ans = document.getElementById("ans" + i);
    // Using the setTimeout() to delay
    setTimeout(() => {
      ans.classList.add("hide");
      btnImg[i].classList.remove("hide");
      hideBtns[i].classList.add("hide");
    }, "200");
  });
});
