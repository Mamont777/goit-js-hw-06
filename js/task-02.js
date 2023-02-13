const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listIngredients = document.querySelector("#ingredients");

const listElements = ingredients.map((element) => {
  const listRef = document.createElement("li");
  listRef.classList.add("item");
  listRef.textContent = element;
  return listRef;
});

listIngredients.append(...listElements);

console.log(listElements);
