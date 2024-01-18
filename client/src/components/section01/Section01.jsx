import React, { useEffect, useState, useRef } from "react";
import { useInView, motion } from "framer-motion";
import texts from "./text";
import desc from "./desc";

const Section01 = ({ animation0, animation, animation2 }) => {
    const body = useRef(null);
    const isInView = useInView(body, { once: true, margin: "1%" });
    const [firstAnime, setFirstAnime] = useState(false);

    const handleFirstAnimationComplete = () => {
        setFirstAnime(true);
    };

    return (
        <div ref={body}>
            <div id="section1">
                <div className="sec1__text">
                    {firstAnime && (
                        <div className="lineMask ab">
                            <motion.p
                                variants={animation0}
                                initial="initial"
                                animate={isInView ? "enter" : ""}
                                className="split t0"
                            ></motion.p>
                        </div>
                    )}

                    {texts.map((text, key) => (
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
                            </motion.p>
                        </div>
                    ))}
                </div>
                <div>
                    {firstAnime &&
                        desc.map((desc, key) => (
                            <div className="sec1__intro lineMask" key={key}>
                                <motion.p
                                    className="split"
                                    variants={animation2}
                                    initial="initial"
                                    animate={isInView ? "enter" : ""}
                                    custom={key}
                                >
                                    {desc}
                                </motion.p>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default Section01;
