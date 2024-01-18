import React, { useRef } from "react";
import { useInView, motion } from "framer-motion";

const LinkRef = ({ fadeIn }) => {
    const linkRef = useRef(null);
    const isLinkInView = useInView(linkRef, { once: true, marginTop: "10px" });

    return (
        <div className="link" ref={linkRef}>
            <motion.a
                initial="hidden"
                animate={isLinkInView ? "visible" : "hidden"}
                variants={fadeIn}
                target="_blank"
                href="https://github.com/jade1087z"
            >
                Go to Git Repository
            </motion.a>
        </div>
    );
};

export default LinkRef;
