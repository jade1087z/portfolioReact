import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
gsap.registerPlugin(ScrollTrigger);

export const animate1 = (element) => {
    const timelineBTT1 = gsap.timeline({ paused: true });
    const timelineBTT4 = gsap.timeline({ paused: true });
    
    const targets1 = gsap.utils.toArray(".split1");

    targets1.forEach((target) => {
        let SplitClient = new SplitType(target, { type: "lines, words, chars" });
        let lines = SplitClient.lines;
        let words = SplitClient.words;
        let chars = SplitClient.chars;
    });

    gsap.set(".sec1__text .img", { opacity: 0 });
    gsap.set("#header", { opacity: 0, y: -100 });
    gsap.set(".sec1__intro .line:nth-child(1) .char", { opacity: 0, y: 10, x: 10 });
    gsap.set(".sec1__intro .line:nth-child(2) .char", { opacity: 0, y: 10, x: 10 });
    gsap.set(".sec1__intro .line:nth-child(3) .char", { opacity: 0, y: 10, x: 10 });
    gsap.set(".sec1__intro .line:nth-child(4) .char", { opacity: 0, y: 10, x: 10 });
    
    setTimeout(() => {
        let tl = gsap.timeline();
        tl.to(".sec1__text .img", {
            opacity: 1,
            duration: 0.5,
            ease: "expo.out",
        });
        tl.to("#header", { opacity: 1, y: 0, duration: 0.5, ease: "expo.out" });
        tl.to(".sec1__intro .line:nth-child(1) .char",{opacity: 1,y: 0,x: 0,stagger: 0.01,duration: 0.8,ease: "power2.inOut",},"-=0.5");
        tl.to(".sec1__intro .line:nth-child(2) .char",{opacity: 1, y: 0,  x: 0,stagger: 0.01, duration: 0.8, ease: "power2.inOut",},"-=0.5");    
        tl.to(".sec1__intro .line:nth-child(3) .char",{opacity: 1,y: 0,x: 0,stagger: 0.01, duration: 0.8,ease: "power2.inOut",},"-=0.5");    
        tl.to(".sec1__intro .line:nth-child(4) .char",{ opacity: 1,y: 0, x: 0, stagger: 0.01, duration: 0.8, ease: "power2.inOut",},"-=0.5");
    }, 2000);

    const hide = (item) => {
        gsap.set(item, { autoAlpha: 0 });
    };
    
    // BTT1, BTT2, BTT3 애니메이션을 수행하는 함수
    const animateBTT1_2_3 = (item, y) => {
        const timeline = gsap.timeline({ paused: true });
    
        timeline.fromTo(
            item,
            {
                autoAlpha: 1,
                y: y,
            },
            {
                autoAlpha: 1,
                y: 0,
                duration: 1,
                overwrite: "auto",
                ease: "power2.inOut",
            }
        );
    
        // if (item.classList.contains("BTT1") && window.innerWidth > 600) {
        if (item.classList.contains("BTT1")) {
            timeline.fromTo(
                item,
                {
                    x: 0,
                },
                {
                    x: 13 + "vw",
                    duration: 1,
                    overwrite: "auto",
                    ease: "power2.inOut",
                }
            );
        }
    
        return timeline;
    };
    
    const animateBTT4 = (item) => {
        timelineBTT4.fromTo(
            item,
            {
                x: -250,
                autoAlpha: 1,
            },
            {
                x: 0,
                autoAlpha: 1,
                duration: 1,
                overwrite: "auto",
                ease: "power2.inOut",
            }
        );
    
        return timelineBTT4;
    };
    
    // ScrollTrigger를 사용하여 스크롤 위치에 따라 애니메이션 실행
    gsap.utils.toArray(".reveal1").forEach((item) => {
        hide(item);
    
        let animation;
        if (
            item.classList.contains("BTT1") ||
            item.classList.contains("BTT2") 
        ) {
            animation = animateBTT1_2_3(item, 200);
        } else if (item.classList.contains("BTT4")) {
            animation = animateBTT4(item);
        } else if(item.classList.contains("BTT3")) {
            animation = animateBTT1_2_3(item, 400);
        }
    
        ScrollTrigger.create({
            trigger: item,
            start: "top bottom",
            end: "bottom top",
            markers: true,
            onEnter: () => {
                if (item.classList.contains("BTT1")) {
                    animation.play().then(() => {
                        if (document.querySelector(".BTT4")) {
                            animateBTT4(document.querySelector(".BTT4")).play();
                        }
                    });
                } else {
                    animation.play();
                }
            },
        });
    });
}

// 반응형
window.addEventListener("resize", function () {
    if (window.innerWidth <= 600) {
        const items = document.querySelectorAll(".BTT1");
        items.forEach((item) => {
            gsap.to(item, {
                x: 13 + "vw",
                duration: 0.02,
                overwrite: "auto",
                ease: "power2.inOut",
            });
        });
    } else if (window.innerWidth > 600) {
        const items = document.querySelectorAll(".BTT1");
        items.forEach((item) => {
            gsap.to(item, {
                x: 13 + "vw",
                duration: 0.02,
                overwrite: "auto",
                ease: "power2.inOut",
            });
        });
    }
});

export default animate1;