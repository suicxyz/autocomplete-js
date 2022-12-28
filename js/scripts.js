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

for (let i of words) div.innerHTML += `<p>${i}</p>`

const searchInput = document.querySelector('#search')
searchInput.addEventListener("input", (e) => {
  const value = searchInput.value
  const matches = words.filter(s => s.toLowerCase().includes(value.toLowerCase()))

  div.innerHTML = ""
  for (let i of matches) div.innerHTML += `<p>${i}</p>`
})