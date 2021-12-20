const mainUlEl = document.querySelector("#categories")
const mainLiEl = mainUlEl.querySelectorAll(".item")
console.log(`Number of categories: ${mainLiEl.length}`)

mainLiEl.forEach((li) => {
  console.log(`Category: ${li.querySelector("h2").textContent}`)
  console.log(`Elements: ${li.querySelectorAll("li").length}`)
})
