const btns = document.querySelectorAll(".top-btn")
const container = document.querySelector(".forms-container")

btns.forEach((e) => {
  e.addEventListener("click", onBtnClick)
})

function onBtnClick(ev) {
  const target = ev.target
  btns.forEach((e) => {
    e.classList.remove("btn-active")
  })
  target.classList.add("btn-active")
  if (target.classList.contains("enter")) {
    container.classList.add("switched")
  } else {
    container.classList.remove("switched")
  }
}
