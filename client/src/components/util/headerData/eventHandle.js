import { Link } from "react-scroll";

export const handleMenuClick = (setShowMenu, showMenu) => {
    setShowMenu(!showMenu);
    console.log("click");
};

export const handleMouseOver = (setActiveLink, key) => {
    console.log("act");
    setActiveLink(key);
};

export const handleMouseOut = (setActiveLink) => {
    console.log("nnn");
    setActiveLink(null);
};

export const list = [
    { link: "section2", name: "Abuot" },
    { link: "section3", name: "Work" },
    { link: "section4", name: "Profile" },
    { link: "section5", name: "Comment" },
    { link: "footer", name: "Contact" },
];

export const daySetting = (setTime, setColonOpacity) => {
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
};

export const CommonLink = ({
    to,
    offset,
    children,
    handleMouseOver,
    handleMouseOut,
    setActiveLink,
    linkKey,
    style,
}) => (
    <Link
        to={to}
        activeClass="active"
        spy={true}
        smooth={true}
        offset={offset}
        duration={1500}
        onMouseOver={() => handleMouseOver(setActiveLink, linkKey)}
        onMouseOut={() => handleMouseOut(setActiveLink)}
    >
        <span style={style}>{children}</span>
    </Link>
);
