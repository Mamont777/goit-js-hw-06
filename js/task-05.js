const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

textInput.addEventListener("input", (event) => {
  const inputEl = event.currentTarget.value;
  inputEl !== ""
    ? (output.textContent = inputEl)
    : (output.textContent = "Anonymous");
});
