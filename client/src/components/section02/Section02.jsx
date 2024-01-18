import React, { useCallback, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useInView, motion } from "framer-motion";
import desc from "./desc";
import text from "./text";

const Section02 = ({ animation }) => {
    // 애니메이션이 살짝 끊기는 현상이 있음
    // 휠을 위로 올렸을 때 이동하는 값이 크지 않음 -> 더 크게 키우고 싶음

    // const wrap1 = useRef(null);
    // const wrap2 = useRef(null);
    // const slider = useRef(null);

    // let xPercent = 0;

    // let direction = -1;

    // useEffect(() => {
    //     gsap.registerPlugin(ScrollTrigger);

    //     gsap.to(slider.current, {
    //         scrollTrigger: {
    //             trigger: document.documentElement,
    //             scrub: 0.5,
    //             start: 0,
    //             end: window.innerHeight,
    //             onUpdate: (e) => (direction = e.direction * -1),
    //         },
    //         x: "-800px",
    //     });

    //     gsap.to([wrap1.current, wrap2.current], {
    //         xPercent: direction * 100,
    //         modifiers: {
    //             xPercent: function (xPercent) {
    //                 return gsap.utils.wrap(-100, 0, parseFloat(xPercent));
    //             },
    //         },
    //         repeat: -1,
    //         ease: "none",
    //         duration: 20, // 이 값을 늘려 애니메이션 속도를 줄임
    //     });

    //     requestAnimationFrame(animate);
    // }, []);

    // const animate = () => {
    //     if (xPercent <= -100 && direction === -1) {
    //         xPercent = 0;
    //     } else if (xPercent >= 0 && direction === 1) {
    //         xPercent = -100;
    //     }
    //     xPercent += (direction * 0.05) / 60;

    //     requestAnimationFrame(animate);
    // };
    const wrap1 = useRef(null);
    const wrap2 = useRef(null);
    const slider = useRef(null);

    let xPercent = 0;
    let direction = useRef(-1).current; // useRef로 direction 변수 선언

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.to(slider.current, {
            scrollTrigger: {
                trigger: document.documentElement,
                scrub: 0.5,
                start: 0,
                end: window.innerHeight,
                onUpdate: (e) => {
                    direction = e.direction * -1; // direction 값을 업데이트
                },
            },
            x: "-550px", // 애니메가 끊기는 부분 고치기 --> 이쪽임
        });


        gsap.to([wrap1.current, wrap2.current], {
            xPercent: direction * 100,
            modifiers: {
                xPercent: function (xPercent) {
                    return gsap.utils.wrap(-100, 0, parseFloat(xPercent));
                },
            },
            repeat: -1,
            ease: "none",
            duration: 25,
        });
       
        
        requestAnimationFrame(animate);
    }, []);

    const animate = () => {
        if (xPercent <= -100 && direction === -1) {
            xPercent = 0;
        } else if (xPercent >= 0 && direction === 1) {
            xPercent = -100;
        }
        xPercent += (direction * 0.05) / 30;

        requestAnimationFrame(animate);
    };

    const body2 = useRef(null);
    const isInView = useInView(body2, { once: true, margin: "10px" });

    return (
        <div id="section2">
            <div className="imgWrap" ref={slider}>
                <div className="wrap" ref={wrap1}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className="wrap" ref={wrap2}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <div className="text-title" ref={body2}>
                <span className="svg">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <polygon points="11.293 4.707 17.586 11 4 11 4 13 17.586 13 11.293 19.293 12.707 20.707 21.414 12 12.707 3.293 11.293 4.707" />
                    </svg>
                </span>

                <div className="textWrap">
                    {text.map((text, key) => (
                        <div className="lineMask" key={key}>
                            <motion.p
                                className="desc1"
                                variants={animation}
                                initial="initial"
                                animate={isInView ? "enter" : ""}
                                custom={key}
                            >
                                {text}
                            </motion.p>
                        </div>
                    ))}
                </div>

                {desc.map((desc, key) => (
                    <div className="lineMask" key={key}>
                        <motion.p
                            className={`desc2 d${key}`}
                            variants={animation}
                            initial="initial"
                            animate={isInView ? "enter" : ""}
                        >
                            {desc}{" "}
                        </motion.p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Section02;
