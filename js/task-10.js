function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const refs = {
  input: document.querySelector("[type='number']"),
  createBtn: document.querySelector("[data-create]"),
  destroyBtn: document.querySelector("[data-destroy]"),
  boxes: document.querySelector("#boxes"),
};

refs.createBtn.addEventListener("click", createBoxes);
refs.destroyBtn.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  let boxSize = 30;
  amount = refs.input.value;

  for (let i = 0; i < amount; i += 1) {
    let box = document.createElement("div");

    box.classList.add("box");
    box.style.width = `${boxSize + i * 10}px`;
    box.style.height = `${boxSize + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();
    refs.boxes.append(box);
  }
}
function destroyBoxes() {
  boxes.innerHTML = "";
}
