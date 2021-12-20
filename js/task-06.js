const input = document.querySelector("input")
console.log(input.dataset.length)

input.addEventListener("blur", (e) => {
  input.classList.remove("valid", "invalid")
  if (input.value.length === Number(input.dataset.length)) {
    input.classList.add("valid")
    // input.classList.replace('invalid','valid')
  } else {
    input.classList.add("invalid")
    // input.classList.replace('valid', 'invalid')
  }
  console.log(Number(input.dataset.length))
})
