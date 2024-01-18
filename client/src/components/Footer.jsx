import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
    handleMouseOver,
    handleMouseOut,
    list,
    CommonLink,
} from "./util/headerData/eventHandle";
import { profile, site, useStack } from "./util/footerData/list";

const Footer = () => {
    const [activeLink, setActiveLink] = useState(null);

    return (
        <div id="footer">
            <div className="title">
                <div className="t1">contact</div>
                <div className="t2">danziro97@naver.com</div>
                <div className="list">
                    <ul>
                        <li>
                            <strong>siteMap</strong>
                        </li>
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
                    <ul>
                        <li>
                            <strong>useStack</strong>
                        </li>
                        {useStack.map((stac, key) => (
                            <li key={key}>
                                <Link>{stac}</Link>
                            </li>
                        ))}
                    </ul>
                    <ul>
                        <li>
                            <strong>site</strong>
                        </li>
                        <li></li>
                        {site.map((site, key) => (
                            <li key={key}>
                                <Link to={site.link}>{site.value}</Link>
                            </li>
                        ))}
                    </ul>
                    <ul>
                        <li>
                            <strong>profile</strong>
                        </li>
                        {profile.map((pro, key) => (
                            <li key={key}>
                                <Link>{pro}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="address">
                    Copyright © portfolio 2024
                    <p>이 사이트는 리액트로 제작되었습니다.</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
