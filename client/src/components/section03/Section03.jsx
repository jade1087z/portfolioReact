import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Data03 from "./Data03";
import { useInView, motion } from "framer-motion";
import text from "./text";
import desc from "./desc";

//  리액트 훅은 반복, 조건, 중첩 함수 내에서 호출 불가 ->
//  훅의 호출 순서 보장

const Section03 = ({ animation0, animation, animation2 }) => {
    const body3 = useRef(null);
    const stickyRefs = Data03.map(() => React.createRef());
    const isInView = useInView(body3, { once: true, marginTop: "20px" });
    const [isVisible, setIsVisible] = useState(stickyRefs.map(() => false));

    useEffect(() => {
        const observers = stickyRefs.map((ref, index) => {
            const observer = new IntersectionObserver(
                (entries) => {
                    setIsVisible((prev) => {
                        const newState = [...prev];
                        newState[index] = entries[0].isIntersecting;
                        return newState;
                    });
                },
                { rootMargin: "20px" }
            );

            if (ref.current) {
                observer.observe(ref.current);
            }

            return observer;
        });
        return () => {
            observers.forEach((observer) => observer.disconnect());
        };
    }, [stickyRefs]);

    useEffect(() => {
        const handleScroll = () => {
            stickyRefs.forEach((ref, index) => {
                if (ref.current) {
                    const rect = ref.current.getBoundingClientRect();
                    const isVisible =
                        rect.top < window.innerHeight && rect.bottom >= 0;
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    const [firstAnime, setFirstAnime] = useState(false);

    const handleFirstAnimationComplete = () => {
        console.log("complete");
        setFirstAnime(true);
    };
    return (
        <div id="section3">
            <div className="title">
                <div className="sec3__title lineMask" ref={body3}>
                    {firstAnime && (
                        <div className="lineMask ab">
                            <motion.p
                                variants={animation0}
                                initial="initial"
                                animate={isInView ? "enter" : ""}
                                className="img"
                            ></motion.p>
                        </div>
                    )}

                    {text.map((text, key) => (
                        <div className="lineMask" key={key}>
                            <motion.p
                                className={`split t${key + 1}`}
                                variants={animation}
                                initial="initial"
                                animate={isInView ? "enter" : ""}
                                custom={key}
                                onAnimationComplete={() =>
                                    handleFirstAnimationComplete()
                                }
                            >
                                {text}
                            </motion.p>{" "}
                        </div>
                    ))}
                </div>
                {firstAnime &&
                    desc.map((desc, key) => (
                        <div className={`lineMask d${key + 1}`} key={key}>
                            <motion.p
                                className={`desc d${key + 1}`}
                                variants={animation2}
                                initial="initial"
                                animate={isInView ? "enter" : ""}
                            >
                                {desc}
                            </motion.p>
                        </div>
                    ))}
            </div>

            <div className="site__wrap">
                {Data03.map((data, key) => {
                    return (
                        <div
                            className={`site s${key + 1}`}
                            key={key}
                            ref={stickyRefs[key]}
                        >
                            <div className="">
                                <div className="lineMask num">
                                    <motion.p
                                        variants={animation}
                                        initial="initial"
                                        animate={isVisible[key] ? "enter" : ""}
                                        className="num"
                                    >
                                        {key + 1}
                                    </motion.p>
                                </div>
                            </div>
                            <div className="subTitle">({data.subTitle})</div>
                            <div className="tit">
                                {data.h4.map((tit, index) => (
                                    <div className="h4 lineMask" key={index}>
                                        <motion.p
                                            variants={animation}
                                            initial="initial"
                                            animate={
                                                isVisible[key] ? "enter" : ""
                                            }
                                        >
                                            {tit}
                                        </motion.p>
                                    </div>
                                ))}
                                <div className="img-wrap">
                                    <div className="img lineMask">
                                        <img src={data.img} alt="" />
                                    </div>
                                    <div className="desc lineMask">
                                        <h4>
                                            <Link
                                                to={data.siteLink}
                                                target="_blank"
                                            >
                                                {data.descLink}
                                            </Link>
                                        </h4>
                                        <p> {data.mainP}</p>
                                        <div className="link">
                                            <Link
                                                to={data.gitLink}
                                                target="_blank"
                                            >
                                                View on Git
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Section03;
