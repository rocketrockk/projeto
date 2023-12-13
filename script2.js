function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/Avatar3.png")
  } else {
    img.setAttribute("src", "./assets/avatar-lightiron.png")
  }

  if (html.classList.contains("light")) {
    img.setAttribute(
      "alt",
      "homem de ferro olhando para frente com fundo claro"
    )
  } else {
    img.setAttribute("alt", "homem de ferro com fundo escuro")
  }
}
