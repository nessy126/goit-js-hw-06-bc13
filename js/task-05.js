const refs = {
  input: document.querySelector("#name-input"),
  hi: document.querySelector("h1"),
  name: document.querySelector("#name-output"),
}
const fixName = refs.name.textContent
refs.input.addEventListener("input", (e) => {
  if (refs.input.value === "") refs.name.textContent = fixName
  else {
    refs.name.textContent = refs.input.value
  }
})
