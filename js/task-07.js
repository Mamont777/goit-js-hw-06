const inputEl = document.querySelector("#font-size-control");

const textInput = document.querySelector("#text");

inputEl.addEventListener("input", onInputChange);

function onInputChange() {
  textInput.style.fontSize = inputEl.value + "px";
}
