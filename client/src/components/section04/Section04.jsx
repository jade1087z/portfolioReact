import React, { useEffect, useRef, useState } from "react";
import { useInView, motion } from "framer-motion";
import desc from "./desc";
import AboutWrap from "./AboutWrap";
import text from "./text";

const Section04 = ({ animation0, animation, animation2 }) => {
    const body4 = useRef(null);
    const isInView = useInView(body4, { once: true, marginTop: "20px" });

    const [firstAnime, setFirstAnime] = useState(false);

    const handleFirstAnimationComplete = () => {
        setFirstAnime(true);
    };
    return (
        <div id="section4">
            <div className="title">
                <div className="sec4__title" ref={body4}>
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
                                variants={animation}
                                initial="initial"
                                animate={isInView ? "enter" : ""}
                                className={`split t${key + 1}`}
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

                {firstAnime &&
                    desc.map((desc, key) => (
                        <div className={`lineMask d${key + 1}`} key={key}>
                            <motion.p
                                variants={animation2}
                                initial="initial"
                                animate={isInView ? "enter" : ""}
                                className={`desc d${key + 1}`}
                                custom={key}
                            >
                                {desc}
                            </motion.p>
                        </div>
                    ))}
            </div>

            <AboutWrap animation={animation} />
        </div>
    );
};

export default Section04;
