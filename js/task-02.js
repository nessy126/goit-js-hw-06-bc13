const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
]
const ingredientsEl = document.querySelector("#ingredients")

function markup() {
  const list = ingredients.map((element) => {
    const item = document.createElement("li")
    item.classList.add(".item")
    item.textContent = element
    return item;
  })
  return ingredientsEl.append(...list)
}
markup()