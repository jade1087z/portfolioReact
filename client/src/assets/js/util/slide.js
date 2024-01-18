const slideWidth = 830; // Slide's width
const slideDuration = 30; // Slide's duration
const slideGap = 0; // Gap between slides
const slideContainer = document.querySelector('.loop__slide__container');
const slideCount = slideContainer.querySelectorAll('.loop__slide').length / 2;
const totalWidth = (slideWidth * slideCount) + slideGap; // Total width of the slides including the gap
const speed = totalWidth / slideDuration; // Speed of the animation

const staggerValue = slideGap / speed; // Calculate the stagger value

gsap.timeline({repeat: -1, stagger: staggerValue})
.to(".loop__slide__group:first-child", {
    x: `-=${slideCount * slideWidth}`,
    ease: "none",
    duration: slideCount * slideDuration
}, 0)
.to(".loop__slide__group:last-child", {
    x: `-=${slideCount * slideWidth}`,
    ease: "none",
    duration: slideCount * slideDuration
}, staggerValue)
.set(".loop__slide__group", {x: 0});
