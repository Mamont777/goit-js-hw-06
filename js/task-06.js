const input = document.querySelector("input");

input.addEventListener("blur", onInputBlur);
const inputLength = input.dataset.length;
function onInputBlur(event) {
  const text = event.currentTarget.value;
  if (text.length === +inputLength) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
}
