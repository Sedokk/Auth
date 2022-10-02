var btns = document.querySelectorAll(".top-btn");
var container = document.querySelector(".forms-container");
var subBtns = document.querySelectorAll(".btn");
btns.forEach(function (e) {
    e.addEventListener("click", onBtnClick);
});
subBtns.forEach(function (e) {
    e.addEventListener("click", function (ev) { return ev.preventDefault(); });
});
function onBtnClick(ev) {
    var target = ev.target;
    btns.forEach(function (e) {
        e.classList.remove("btn-active");
    });
    target.classList.add("btn-active");
    target.classList.contains("enter")
        ? container === null || container === void 0 ? void 0 : container.classList.add("switched")
        : container === null || container === void 0 ? void 0 : container.classList.remove("switched");
}
