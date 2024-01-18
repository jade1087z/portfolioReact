import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div id="footer">
            <div className="title">
                <div className="t1">contact</div>
                <div className="t2">danziro97@naver.com</div>
                <div className="list">
                    {/*<ul>
                        <li>
                            <strong>site</strong>
                        </li>
                        <li></li>
                        <li>
                            <Link to={"#"}>codepen</Link>
                        </li>
                        <li>
                            <Link to={"#"}>blog</Link>
                        </li>
                     </ul>*/}
                    <ul>
                        <li>
                            <strong>useStack</strong>
                        </li>
                        <li>
                            <Link to={"#"}>Javascript</Link>
                        </li>
                        <li>
                            <Link to={"#"}>node.js</Link>
                        </li>
                        <li>
                            <Link to={"#"}>react.js</Link>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <strong>site</strong>
                        </li>
                        <li>
                            <Link to={"https://github.com/jade1087z"}>
                                github
                            </Link>
                        </li>
                        <li>
                            <Link to={"#"}>react</Link>
                        </li>
                        <li>
                            <Link to={"#"}>node</Link>
                        </li>
                        <li>
                            <Link to={"#"}>php</Link>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <strong>profile</strong>
                        </li>
                        <li>
                            <Link to={"#"}>임종한</Link>
                        </li>
                        <li>
                            <Link to={"#"}>010.7180.2384</Link>
                        </li>
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
