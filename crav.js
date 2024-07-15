let slider = document.querySelector(".slider .list"),
    items = document.querySelectorAll(".slider .list .item"),
    next = document.getElementById("next"),
    prev = document.getElementById("prev"),
    dots = document.querySelectorAll(".slider .dots li"),
    lengthItems = items.length - 1,
    active = 0;
next.onclick = function() { active = active + 1 <= lengthItems ? active + 1 : 0, reloadSlider() }, prev.onclick = function() { active = active - 1 >= 0 ? active - 1 : lengthItems, reloadSlider() };
let refreshInterval = setInterval(() => { next.click() }, 3e3);

function reloadSlider() {
    let e = items[active].offsetWidth,
        t = -active * e;
    slider.style.left = t + "px";
    document.querySelector(".slider .dots li.active").classList.remove("active"), dots[active].classList.add("active"), clearInterval(refreshInterval), refreshInterval = setInterval(() => { next.click() }, 1500)
}

function toggleMenu() {
    let e = document.querySelector(".off-screen-menu");
    e.classList.toggle("active")
}

function closeMenu() {
    let e = document.querySelector(".off-screen-menu");
    setTimeout(() => { e.classList.remove("active") }, 800)
}
window.onresize = function(e) { reloadSlider() }, document.querySelector(".footer").addEventListener("click", function() { window.scrollTo({ top: 0, behavior: "smooth" }) });
