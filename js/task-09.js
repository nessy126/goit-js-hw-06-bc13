const btnRef = document.querySelector(".change-color")
console.log(btnRef)
const text = document.querySelector(".color")

btnRef.addEventListener("click", (e) => {
  const color = getRandomHexColor()
  document.body.style.backgroundColor = color
  text.textContent = color
})

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`
}
