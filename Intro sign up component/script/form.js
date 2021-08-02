const btn = document.querySelector(".form__btn");
const inputs = document.querySelectorAll(".form__input");

btn.addEventListener("click", () => {
  inputs.forEach((input) => {
    input.parentElement.classList.remove("error");
    const category = input.name;
    const toggle = toggleElementClass.bind(input.parentElement);
    if (category.includes("email")) toggle(checkEmailValidity(input.value));
    else toggle(checkEmptyValue(input.value));
  });
});

function checkEmailValidity(str) {
  str = str.trim();
  if (str.length >= 1 && str.includes("@") && !str.includes(" ")) {
    const strParts = str.split("@");
    if (strParts.length <= 2 && strParts[0].length && strParts[1].includes("."))
      return true;
  } else return false;
}

function checkEmptyValue(str) {
  str = str.trim();
  return str.length > 0 ? true : false;
}

function toggleElementClass(result) {
  !result ? this.classList.add("error") : this.classList.remove("error");
}
