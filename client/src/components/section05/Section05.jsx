import React, { useEffect, useRef, useState } from "react";
import addPost from "./addPost";
import list from "./list";
import { useInView, motion } from "framer-motion";
import CommentWrap from "./CommentWrap";
import desc from "./desc";
import text from "./text";

const Section05 = ({ animation0, animation, animation2 }) => {
    const body5 = useRef(null);
    const isInView = useInView(body5, { once: true, marginTop: "20px" });

    const [firstAnime, setFirstAnime] = useState(false);

    const handleFirstAnimationComplete = () => {
        setFirstAnime(true);
    };

    return (
        <div id="section5">
            <div className="title">
                <div className="sec5__title" ref={body5}>
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
                        <div className={`split t${key + 1} lineMask`} key={key}>
                            <motion.p
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
                {firstAnime &&
                    desc.map((desc, key) => (
                        <div className={`lineMask d${key + 1}`} key={key}>
                            <motion.p
                                variants={animation2}
                                initial="initial"
                                animate={isInView ? "enter" : ""}
                                className="desc2"
                            >
                                {desc}
                            </motion.p>
                        </div>
                    ))}
            </div>
            <CommentWrap />
        </div>
    );
};

export default Section05;
