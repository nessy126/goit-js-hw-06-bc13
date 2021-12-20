const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
]

const ingredientsEl = document.querySelector("#ingredients")
ingredients.map((element) => {
  const item = document.createElement("li")
  item.classList.add(".item")
  item.textContent = element
  ingredientsEl.prepend(item)
})
