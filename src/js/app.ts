const btns = document.querySelectorAll(
  ".top-btn"
) as NodeListOf<HTMLButtonElement>
const container = document.querySelector(".forms-container") as HTMLDivElement
const subBtns = document.querySelectorAll(
  ".btn"
) as NodeListOf<HTMLButtonElement>

btns.forEach((e) => {
  e.addEventListener("click", onBtnClick)
})
subBtns.forEach((e) => {
  e.addEventListener("click", (ev: any) => ev.preventDefault())
})

function onBtnClick(ev: any) {
  const target: HTMLButtonElement = ev.target
  btns.forEach((e) => {
    e.classList.remove("btn-active")
  })
  target.classList.add("btn-active")
  target.classList.contains("enter")
    ? container?.classList.add("switched")
    : container?.classList.remove("switched")
}
