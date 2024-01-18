import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);
export const text1 = (element) => {

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
}

export default text1;