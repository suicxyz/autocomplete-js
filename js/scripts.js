const words = [
  "[GLOBAL] Front-End Developers",
  "[GLOBAL] Back-End Developers",
  "[GLOBAL] Full-Stack Developers",
  "[PTBR] Programadores Front-End",
  "[PTBR] Programadores Back-End",
  "[PTBR] Programadores Full-Stack",
  "Learn HTML/CSS/JS",
  "JS Masters",
  "JS/TS Tips",
  "CSS Masters",
  "Websites Ideas",
  "Free Sites Layouts",
]

const div = document.querySelector("#results")
div.innerHTML = `<p>Começe a digitar</p>`
var matches = []

const searchInput = document.querySelector('#search')
searchInput.addEventListener("input", (e) => {
  const value = searchInput.value
  matches = words.filter(s => s.toLowerCase().includes(value.toLowerCase()))

  div.innerHTML = ""

  let i = 0
  setInterval(function() {
    i = ++i % 4
    if (matches.length == 0) div.innerHTML = `<b>Nenhum resultado${Array(i+1).join(".")}</b>`
  }, 800)

  for (let i of matches) div.innerHTML += `<p>${i}</p>`


  if (value == "") div.innerHTML = `<p>Começe a digitar</p>`
})