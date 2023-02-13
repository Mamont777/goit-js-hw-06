const categoriesRef = document.querySelectorAll("li.item");
console.log("Number of categoriesRef:", categoriesRef.length);

const categoriesList = document.querySelectorAll("#categories > li");
categoriesList.forEach((element) => {
  const titleRef = element.querySelector("h2");
  console.log("Category:", titleRef.textContent);
  const countRef = element.querySelectorAll("li");
  console.log("Elements:", countRef.length);
});
