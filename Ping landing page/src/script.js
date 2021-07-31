const trigger = document.getElementById("trigger");
const victim = document.getElementById("victim");
const email = document.getElementById("email");
console.log(email);

trigger.addEventListener("click", (e) => {
  e.preventDefault();
  check();
});

function check() {
  removeClass(victim);
  if (checkEmpty(getEmail())) {
    victim.classList.add("empty");
  } else if (!validateEmail(getEmail())) {
    victim.classList.add("invalid");
  }
}

function removeClass(obj) {
  obj.classList.remove("empty", "invalid");
}

function getEmail() {
  return email.value;
}

function checkEmpty(str) {
  return str.length === 0 ? true : false;
}

function validateEmail(str) {
  var format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (format.test(str)) {
    return true;
  } else {
    return false;
  }
}
