import React, { useEffect, useState } from "react";
import logo from "../assets/img/image.png";
import {
    handleMenuClick,
    handleMouseOver,
    handleMouseOut,
    list,
    daySetting,
    CommonLink,
} from "./util/headerData/eventHandle";

const Header = () => {
    const [showMenu, setShowMenu] = useState(true);
    const [activeLink, setActiveLink] = useState(null);
    const [time, setTime] = useState("");
    const [colonOpacity, setColonOpacity] = useState(1);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        const cleanup = daySetting(setTime, setColonOpacity);
        return cleanup;
    }, []);
    // header day

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 700) {
                setShowMenu(true);
            } else {
                setShowMenu(false);
            }
        };

        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <header id="header">
            <div className="left">
                <span className="logoImg">
                    <CommonLink to={"section1"} offset={0}>
                        <img src={logo} alt="" />
                    </CommonLink>
                </span>
                <h1>
                    <CommonLink to={"section1"} offset={0}>
                        developer
                    </CommonLink>
                </h1>
                <p className="time">
                    {time.split(":").map((part, index) => (
                        <React.Fragment key={index}>
                            <span>{part}</span>
                            {index < time.split(":").length - 1 && (
                                <span style={{ opacity: colonOpacity }}>:</span>
                            )}
                        </React.Fragment>
                    ))}
                </p>
            </div>
            <nav className="right">
                <div
                    className="header__nav__mobile"
                    id="headerToggle"
                    aria-controls="primary-menu"
                    aria-expanded={showMenu ? false : true}
                    role="button"
                    onClick={() => handleMenuClick(setShowMenu, showMenu)}
                >
                    Menu
                </div>
                <ul className={`${showMenu ? "show" : "hide"}`}>
                    {list.map((li, key) => (
                        <li key={key}>
                            <CommonLink
                                to={li.link}
                                offset={0}
                                handleMouseOver={handleMouseOver}
                                handleMouseOut={handleMouseOut}
                                setActiveLink={setActiveLink}
                                linkKey={key}
                                style={{
                                    color:
                                        activeLink === key
                                            ? "#22242a"
                                            : activeLink !== null
                                            ? "#22242a57"
                                            : "#22242a",
                                }}
                            >
                                {li.name}
                            </CommonLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
