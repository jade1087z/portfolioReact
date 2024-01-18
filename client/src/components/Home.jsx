import React, { useEffect, useRef } from "react";
import Section01 from "./section01/Section01";
import Section04 from "./section04/Section04";
import Section03 from "./section03/Section03";
import Section02 from "./section02/Section02";
import Footer from "./Footer";
import Section05 from "./section05/Section05";
import getOS from "./os";
import { useInView } from "framer-motion";
import Header from "./Header";

const Home = () => {
    const osClass = getOS();
    useEffect(() => {
        (async () => {
            const LocomotiveScroll = (await import("locomotive-scroll"))
                .default;

            const locomotiveScroll = new LocomotiveScroll();
        })();
    }, []);
    const animation = {
        initial: { y: "100%" },

        enter: (custom) => ({
            y: "0",
            transition: {
                duration: 0.95,
                ease: [0.33, 1, 0.68, 1],
                delay: custom ? 0.5 + custom * 0.04 : 0.5,
            },
        }),
    };
    const animation2 = {
        initial: { y: "100%" },

        enter: () => ({
            y: "0",
            transition: {
                duration: 0.55,
                ease: [0.33, 1, 0.58, 0.9],
                delay: 0.25,
            },
        }),
    };
    const animation0 = {
        initial: { y: "100%" },

        enter: () => ({
            y: "0",
            transition: {
                duration: 0.85,
                ease: [0.33, 1, 0.58, 0.9],
                delay: 0.1,
            },
        }),
    };
    return (
        <div className={`App ${osClass}`}>
            <Header />
            <Section01
                animation0={animation0}
                animation={animation}
                animation2={animation2}
            />
            <Section02
                animation0={animation0}
                animation={animation}
                animation2={animation2}
            />
            <Section03
                animation0={animation0}
                animation={animation}
                animation2={animation2}
            />
            <Section04
                animation0={animation0}
                animation={animation}
                animation2={animation2}
            />
            <Section05
                animation0={animation0}
                animation={animation}
                animation2={animation2}
            />
            <Footer />
        </div>
    );
};

export default Home;
