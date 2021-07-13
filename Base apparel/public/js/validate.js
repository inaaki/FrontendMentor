const input = document.getElementById("email");
const btn = document.getElementById("trigger");
const toggler = document.querySelector(".form");

btn.addEventListener("click", function (e) {
  e.preventDefault();
  isValid(input.value)
    ? toggler.classList.remove("error")
    : toggler.classList.add("error");
});

function isValid(string) {
  if (string.length > 0 && string.includes("@")) {
    let input = string.trim();
    const arr = input.split("@");
    if (arr.length === 2) return arr[1].includes(".") ? true : false;
  }
}
