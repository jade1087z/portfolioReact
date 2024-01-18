import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const animate3 = (element) => {
    const timelineBTT7_9 = gsap.timeline({ paused: true, onComplete: () => timelineBTT8.play() });
    const timelineBTT8 = gsap.timeline({ paused: true });
    
    const tl2 = gsap.timeline({ paused: true });
    gsap.set(".sec3__intro .first ", { opacity: 0, y: 10, x: 0 });
    gsap.set(".split3-1", { opacity: 0, y: 10, x: 0 });
    gsap.set(".split3-2", { opacity: 0, y: 10, x: 0 });
    gsap.set(".split3-3", { opacity: 0, y: 10, x: 0 });
    gsap.set(".split3-4", { opacity: 0, y: 10, x: 0 });
    gsap.set(".split3-5", { opacity: 0, y: 10, x: 0 });
    gsap.set(".split3-6", { opacity: 0, y: 10, x: 0 });
    gsap.set(".sec3__intro .last ", { opacity: 0, y: 10, x: 0 });

    const hide3 = (item) => {
        gsap.set(item, { autoAlpha: 0 });
    };

    const animateBTT7_9 = (item, y) => {
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

        if (item.classList.contains("BTT9")) {
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

    const animateBTT8 = (item) => {
        return timelineBTT8.fromTo(
            item,
            { x: -250, autoAlpha: 1 },
            { x: 0, autoAlpha: 1, duration: 1.3, overwrite: "auto", ease: "power2.inOut" }
        );
    };

    gsap.utils.toArray(".reveal3").forEach((item) => {
        hide3(item);

        if (item.classList.contains("BTT7") || item.classList.contains("BTT9")) {
            // BTT7, BTT9 애니메이션을 timelineBTT7_9에 추가
            timelineBTT7_9.add(animateBTT7_9(item, 200), "start");
        } else if (item.classList.contains("BTT8")) {
            // BTT8 애니메이션을 timelineBTT8에 추가
            animateBTT8(item);
        }

        ScrollTrigger.create({
            trigger: item,
            start: "top +=500",
            end: "bottom top",
            markers: true,
            onEnter: () => {
                if (!timelineBTT7_9.isActive()) {
                    timelineBTT7_9.play().then(()=>{
                        tl2.to(".sec3__intro .first ", {opacity: 1 ,y: 0, x: 0, stagger: 0, duration: 0.8, ease: "power2.inOut",},"-=0.5");
                        tl2.to(".split3-1",{opacity: 1 ,y: 0, x: 0, stagger: 0, duration: 0.8, ease: "power2.inOut", onComplete: console.log("ok")},"-=0.5");
                        tl2.to(".split3-2",{opacity: 1, y: 0, x: 0, stagger: 0, duration: 0.8, ease: "power2.inOut",},"-=0.5");    
                        tl2.to(".split3-3",{opacity: 1, y: 0, x: 0, stagger: 0, duration: 0.8, ease: "power2.inOut",},"-=0.5");    
                        tl2.to(".split3-4",{opacity: 1 ,y: 0, x: 0, stagger: 0, duration: 0.8, ease: "power2.inOut", onComplete: console.log("ok")},"-=0.5");
                        tl2.to(".split3-5",{opacity: 1, y: 0, x: 0, stagger: 0, duration: 0.8, ease: "power2.inOut",},"-=0.5");    
                        tl2.to(".split3-6",{opacity: 1, y: 0, x: 0, stagger: 0, duration: 0.8, ease: "power2.inOut",},"-=0.5");    
                        tl2.to(".sec3__intro .last ", {opacity: 1 ,y: 0, x: 0, stagger: 0, duration: 0.8, ease: "power2.inOut",},"-=0.5");
                        tl2.play();
                    })
                }

            },
        });
    });
}
export default animate3;