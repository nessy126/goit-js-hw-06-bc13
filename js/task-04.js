let counterValue = 0

const refs = {
  decrement: document.querySelector('button[data-action="decrement"]'),
  increment: document.querySelector('button[data-action="increment"]'),
  counter: document.querySelector("span"),
}

refs.decrement.addEventListener("click", () => {
  counterValue -= 1
  refs.counter.textContent = counterValue
})

refs.increment.addEventListener("click", () => {
  counterValue += 1
  refs.counter.textContent = counterValue
})
