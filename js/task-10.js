const refs = {
  input: document.querySelector("input"),
  create: document.querySelector("button[data-create]"),
  destroy: document.querySelector("button[data-destroy]"),
}
console.log(refs.input)

function createBoxes(amount) {
  console.log(amount)
}
createBoxes(refs.input)
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`
}

refs.input.addEventListener("input")
console.log(createBoxes(refs.input.value))
