const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-links");
const body = document.querySelector("body");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    document.body.classList.toggle('no-scroll')
}

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    document.body.classList.remove('no-scroll')
}

gsap.fromTo(".title", {opacity: 0, y: 100}, {opacity: 1, y: 0, duration: 2});
gsap.fromTo(".subtitle", {opacity: 0, y: 100}, {opacity: 1, y: 0, duration: 2}, "-=1");
gsap.fromTo("#smallText", {opacity: 0, y: 20}, {opacity: 1, y: 0, duration: 1}, "-=1");
gsap.fromTo("#social", {opacity: 0, x: 20}, {opacity: 1, x: 0, duration: 1}, "-=1");

gsap.fromTo(".header", {opacity: 0}, {opacity: 1, duration: 3}, "-=1");
gsap.fromTo("#last", {opacity: 0, y: -20}, {opacity: 1, y: 0, duration: 1 }, "-=3");

var tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#about",
        start: "top center",
        end: "+=300"
    }
});

tl.fromTo("#about", {opacity: 0, y: 50}, {opacity: 1, y: 0, ease: "power2", duration: 1});

var tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#experience",
        start: "top center",
        end: "+=300"
    }
});

tl.fromTo("#experience", {opacity: 0, y: 50}, {opacity: 1, y: 0, ease: "power2", duration: 1});

var tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#project",
        start: "top center",
        end: "+=300"
    }
});

tl.fromTo("#project", {opacity: 0, y: 50}, {opacity: 1, y: 0, ease: "power2", duration: 1});

var tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#contact",
        start: "top center",
        end: "+=300"
    }
});

tl.fromTo("#contact", {opacity: 0, y: 50}, {opacity: 1, y: 0, ease: "power2", duration: 1});
