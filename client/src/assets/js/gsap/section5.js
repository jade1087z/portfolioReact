import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const animate5 = (element) => {
const timelineBTT11_12 = gsap.timeline({ paused: true, onComplete: () => timelineBTT10.play() });
const timelineBTT10 = gsap.timeline({ paused: true });

const tl5 = gsap.timeline({ paused: true });

gsap.set(".split4-1", { opacity: 0, y: 10, x: 0 });
gsap.set(".split4-2", { opacity: 0, y: 10, x: 0 });
gsap.set(".split4-3", { opacity: 0, y: 10, x: 0 });
gsap.set(".split4-4", { opacity: 0, y: 10, x: 0 });
gsap.set(".split4-5", { opacity: 0, y: 10, x: 0 });
gsap.set(".split4-6", { opacity: 0, y: 10, x: 0 });
gsap.set(".split4-7", { opacity: 0, y: 10, x: 0 });
gsap.set(".split4-8", { opacity: 0, y: 10, x: 0 });
gsap.set(".split4-9", { opacity: 0, y: 10, x: 0 });
gsap.set(".split4-10", { opacity: 0, y: 10, x: 0 });
gsap.set(".split4-11", { opacity: 0, y: 10, x: 0 });
gsap.set(".split4-12", { opacity: 0, y: 10, x: 0 });
gsap.set(".split4-13", { opacity: 0, y: 10, x: 0 });
gsap.set(".split4-14", { opacity: 0, y: 10, x: 0 });
gsap.set(".split4-15", { opacity: 0, y: 10, x: 0 });
gsap.set(".split4-16", { opacity: 0, y: 10, x: 0 });
gsap.set(".split4-17", { opacity: 0, y: 10, x: 0 });
gsap.set(".split4-18", { opacity: 0, y: 10, x: 0 });
gsap.set(".split4-19", { opacity: 0, y: 10, x: 0 });

    const hide4 = (item) => {
        gsap.set(item, { autoAlpha: 0 });
    };

    const animateBTT11_12 = (item, y) => {
        const timeline = gsap.timeline();

        timeline.fromTo(
            item,
            {
                autoAlpha: 1,
                y: y,
            },
            {
                autoAlpha: 1,
                y: 0,
                duration: 0.8,
                overwrite: "auto",
                ease: "power2.inOut",
            }
        );

        if (item.classList.contains("BTT11")) {
            timeline.fromTo(
                item,
                {
                    x: 0,
                },
                {
                    x: 13 + "vw",
                    duration: 1.1,
                    overwrite: "auto",
                    ease: "power2.inOut",
                }
            );
        }

        return timeline;
    };

    const animateBTT10 = (item) => {
        return timelineBTT10.fromTo(
            item,
            { x: -250, autoAlpha: 1 },
            { x: 0, autoAlpha: 1, duration: 1, overwrite: "auto", ease: "power2.inOut" }
        );
    };

gsap.utils.toArray(".reveal5").forEach((item) => {
    
    hide4(item);
    
    if (item.classList.contains("BTT11") || item.classList.contains("BTT12")) {
        // BTT7, BTT9 애니메이션을 timelineBTT7_9에 추가
        timelineBTT11_12.add(animateBTT11_12(item, 200), "start");
        
    } else if (item.classList.contains("BTT10")) {
        // BTT8 애니메이션을 timelineBTT8에 추가
        animateBTT10(item);
    }

    ScrollTrigger.create({
        trigger: item,
        start: "top +=700",
        end: "bottom top",
        markers: true,
        onEnter: () => {
            if (!timelineBTT11_12.isActive()) {
                timelineBTT11_12.play().then(()=>{
                    tl5.to(".split4-1", {opacity: 1 ,y: 0, x: 0, stagger: 0, duration: 0.7, ease: "power2.inOut",},"-=0.5");
                    tl5.to(".split4-2", {opacity: 1 ,y: 0, x: 0, stagger: 0, duration: 0.7, ease: "power2.inOut",},"-=0.5");
                    tl5.to(".split4-3", {opacity: 1, y: 0, x: 0, stagger: 0, duration: 0.7, ease: "power2.inOut",},"-=0.5");    
                    tl5.to(".split4-4", {opacity: 1, y: 0, x: 0, stagger: 0, duration: 0.7, ease: "power2.inOut",},"-=0.5");    
                    tl5.to(".split4-5", {opacity: 1 ,y: 0, x: 0, stagger: 0, duration: 0.7, ease: "power2.inOut",},"-=0.5");
                    tl5.to(".split4-6", {opacity: 1 ,y: 0, x: 0, stagger: 0, duration: 0.7, ease: "power2.inOut",},"-=0.5");
                    tl5.to(".split4-7", {opacity: 1 ,y: 0, x: 0, stagger: 0, duration: 0.7, ease: "power2.inOut",},"-=0.5");
                    tl5.to(".split4-8", {opacity: 1 ,y: 0, x: 0, stagger: 0, duration: 0.7, ease: "power2.inOut",},"-=0.5");
                    tl5.to(".split4-9", {opacity: 1 ,y: 0, x: 0, stagger: 0, duration: 0.7, ease: "power2.inOut",},"-=0.5");
                    tl5.to(".split4-10", {opacity: 1 ,y: 0, x: 0, stagger: 0, duration: 0.7, ease: "power2.inOut",},"-=0.5");
                    tl5.to(".split4-11", {opacity: 1 ,y: 0, x: 0, stagger: 0, duration: 0.7, ease: "power2.inOut",},"-=0.5");
                    tl5.to(".split4-12", {opacity: 1 ,y: 0, x: 0, stagger: 0, duration: 0.7, ease: "power2.inOut",},"-=0.5");
                    tl5.to(".split4-13", {opacity: 1, y: 0, x: 0, stagger: 0, duration: 0.7, ease: "power2.inOut",},"-=0.5");    
                    tl5.to(".split4-14", {opacity: 1, y: 0, x: 0, stagger: 0, duration: 0.7, ease: "power2.inOut",},"-=0.5");    
                    tl5.to(".split4-15", {opacity: 1 ,y: 0, x: 0, stagger: 0, duration: 0.7, ease: "power2.inOut",},"-=0.5");
                    tl5.to(".split4-16", {opacity: 1 ,y: 0, x: 0, stagger: 0, duration: 0.7, ease: "power2.inOut",},"-=0.5");
                    tl5.to(".split4-17", {opacity: 1 ,y: 0, x: 0, stagger: 0, duration: 0.7, ease: "power2.inOut",},"-=0.5");
                    tl5.to(".split4-18", {opacity: 1 ,y: 0, x: 0, stagger: 0, duration: 0.7, ease: "power2.inOut",},"-=0.5");
                    tl5.to(".split4-19", {opacity: 1 ,y: 0, x: 0, stagger: 0, duration: 0.7, ease: "power2.inOut",},"-=0.5");
                    tl5.play();
                })
            }
        },
    });
});
} 
export default animate5;