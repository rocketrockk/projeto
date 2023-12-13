function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/Avatar2.png")
  } else {
    img.setAttribute("src", "./assets/avatar-lightflash.png")
  }

  if (html.classList.contains("light")) {
    img.setAttribute("alt", "Logo do flash amarelo com detalhes vermelhos")
  } else {
    img.setAttribute("alt", "logo do flash vermelhoc com fundo preto")
  }
}
