const refs = {
  form: document.querySelector(".login-form"),
  email: document.querySelector('input[type="email"]'),
  password: document.querySelector('input[type="password"]'),
  submit: document.querySelector('button[type="submit"]'),
}
console.log(refs.submit)
const data = {
  email: "email",
  password: "password",
}

refs.form.addEventListener("submit", (e) => {
  e.preventDefault()
  const password = refs.form.elements.password.value
  const email = refs.form.elements.email.value
  if (!password || !email) {
    alert("Все поля должны быть заполнены!")
  } else {
    console.log({ email, password })
    refs.form.reset()
  }
})
