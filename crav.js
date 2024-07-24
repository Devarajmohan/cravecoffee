"use strict";
const addEventOnElements = function(e, t, a) { for (let l = 0; l < e.length; l++) e[l].addEventListener(t, a) },
    [navbar, navToggler, navbarLinks] = [document.querySelector("[data-navbar]"), document.querySelector("[data-nav-toggler]"), document.querySelectorAll("[data-nav-link]")],
    toggleNavbar = function() { navbar.classList.toggle("active"), this.classList.toggle("active"), document.body.classList.toggle("active") };
navToggler.addEventListener("click", toggleNavbar);
const closeNavbar = function() { navbar.classList.remove("active"), navToggler.classList.remove("active"), document.body.classList.remove("active") };
addEventOnElements(navbarLinks, "click", closeNavbar);
const header = document.querySelector("[data-header]"),
    activeElemOnScroll = function() { window.scrollY >= 50 ? header.classList.add("active") : header.classList.remove("active") };
window.addEventListener("scroll", activeElemOnScroll);
const revealElements = document.querySelectorAll("[data-reveal]"),
    revealOnScroll = function() { for (let e = 0; e < revealElements.length; e++) revealElements[e].getBoundingClientRect().top < window.innerHeight / 1.1 && (revealElements[e].classList.add("revealed"), revealElements[e].classList.contains("btn") && setTimeout(function() { revealElements[e].style.transition = "0.25s ease" }, 1e3)) };
window.addEventListener("scroll", revealOnScroll), revealOnScroll(), document.addEventListener("DOMContentLoaded", e => { let t = ['url("Flat White.webp")', 'url("Latte.webp")', 'url("Macchiato.webp")'],
        a = 0,
        l = document.querySelector(".hero");

    function n() { a = (a + 1) % t.length, l.style.backgroundImage = t[a] }
    setInterval(n, 2e3) }), document.addEventListener("DOMContentLoaded", function() { let e = document.querySelectorAll("[data-reveal]"),
        t = new IntersectionObserver((e, t) => { e.forEach(e => { e.isIntersecting && (e.target.classList.add("is-visible"), t.unobserve(e.target)) }) }, { threshold: .1 });
    e.forEach(e => { t.observe(e) }) });
