import React, { useEffect, useState } from "react";
import logo from "../assets/img/image.png";
import { Link } from "react-router-dom";

const Header = () => {
    const [showMenu, setShowMenu] = useState(true);
    const [activeLink, setActiveLink] = useState(null);
    const [time, setTime] = useState("");
    const [colonOpacity, setColonOpacity] = useState(1);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        const days = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
        ];
        const timer = setInterval(() => {
            const now = new Date();
            const day = days[now.getDay()];
            const hour = ("0" + now.getHours()).slice(-2);
            const minute = ("0" + now.getMinutes()).slice(-2);
            const second = now.getSeconds();

            setColonOpacity(second % 2 ? 0 : 1);
            setTime(`korea, ${day} ${hour}:${minute}`);
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);
    // header day
    const list = [
        { link: "#", name: "Abuot" },
        { link: "#", name: "Work" },
        { link: "#", name: "Contact" },
        { link: "#", name: "Comment" },
    ];
    const handleMenuClick = () => {
        setShowMenu(!showMenu);
        console.log("click");
    };
    const handleMouseOver = (key) => {
        setActiveLink(key);
    };
    const handleMouseOut = () => {
        setActiveLink(null);
    };
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
                    <img src={logo} alt="" />
                </span>
                <h1>developer</h1>
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
                    onClick={() => handleMenuClick()}
                >
                    Menu
                </div>
                <ul className={`${showMenu ? "show" : "hide"}`}>
                    {list.map((li, key) => (
                        <li key={key}>
                            <Link
                                to={li.link}
                                style={{
                                    color:
                                        activeLink === key
                                            ? "#22242a"
                                            : activeLink !== null
                                            ? "#eaeaea"
                                            : "#22242a",
                                }}
                                onMouseOver={() => handleMouseOver(key)}
                                onMouseOut={handleMouseOut}
                            >
                                {li.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
