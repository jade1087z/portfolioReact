import React, { useEffect, useRef } from "react";
import Data04 from "./Data04";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import LinkRef from "./LinkRef";

const AboutWrap = ({ animation }) => {
    const fadeIn = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { duration: 1.2, ease: [0.53, 1, 0.98, 1.2] },
            delay: 1,
        },
    };

    const Item = ({ data }) => {
        const controls = useAnimation();
        const { ref, inView } = useInView({
            threshold: 0.1, // 10%가 보이면 trigger 되도록
        });

        useEffect(() => {
            if (inView) {
                controls.start("visible");
            }
            console.log(inView);
        }, [controls, inView]);

        return (
            <motion.dl
                ref={ref}
                variants={fadeIn}
                initial="hidden"
                animate={controls}
            >
                <motion.dt>{data.title}</motion.dt>
                <motion.dd>{data.desc}</motion.dd>
            </motion.dl>
        );
    };

    return (
        <div className="about-wrap">
            <div className="left"></div>
            <div className="right">
                {Data04.map((data, key) => (
                    <Item
                        key={key}
                        data={data}
                        animation={animation}
                        fadeIn={fadeIn}
                    />
                ))}

                <LinkRef fadeIn={fadeIn} />
            </div>
        </div>
    );
};

export default AboutWrap;
