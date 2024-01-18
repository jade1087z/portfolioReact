import React, { useEffect, useState } from "react";
import list from "./list";
import addPost from "./addPost";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

// 필요한 모듈을 사용할 때 SwiperCore에 등록

const CommentWrap = () => {
    const [desc, setDesc] = useState();
    const [name, setName] = useState();
    const [pass, setPass] = useState();
    const [postList, setPostList] = useState([]);
    const [sortPostList, setSortPostList] = useState([]);

    useEffect(() => {
        list(setPostList, setSortPostList);
    }, []);
    //      list(setPostList, setSortPostList); 이 두값이 바뀌는 순간을 훅을 걸어야함
    console.log(sortPostList);
    return (
        <div className="comment__wrap">
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                className="mySwiper"
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 10,
                    },
                    1600: {
                        slidesPerView: 5,
                        spaceBetween: 10,
                    },
                    1900: {
                        slidesPerView: 6,
                        spaceBetween: 10,
                    },
                }}
            >
                <div className="comment__inner">
                    {postList &&
                        postList.map((post, key) => (
                            <SwiperSlide key={key}>
                                <div className="comment">
                                    <div className="author">
                                        <em>{post.name}</em>{" "}
                                        <span>{post.formattedDate}</span>
                                    </div>
                                    <p>{post.content}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                </div>
            </Swiper>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                className="mySwiper"
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 10,
                    },
                    1600: {
                        slidesPerView: 5,
                        spaceBetween: 10,
                    },
                    1900: {
                        slidesPerView: 6,
                        spaceBetween: 10,
                    },
                }}
            >
                <div className="comment__inner">
                    {sortPostList &&
                        sortPostList.map((sortpost, key) => (
                            <SwiperSlide key={key}>
                                <div className="comment">
                                    <div className="author">
                                        <em>{sortpost.name}</em>{" "}
                                        <span>{sortpost.formattedDate}</span>
                                    </div>
                                    <p>{sortpost.content}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                </div>
            </Swiper>
            <div className="comment__input">
                <div className="commentWrap">
                    <input
                        type="text"
                        placeholder="이름"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />
                    <input
                        type="text"
                        placeholder="비밀번호"
                        onChange={(e) => setPass(e.target.value)}
                        value={pass}
                    />
                </div>
                <div className="commentWrap bottom">
                    <input
                        type="text"
                        placeholder="댓글"
                        onChange={(e) => setDesc(e.target.value)}
                        value={desc}
                    />
                    <button
                        onClick={(e) =>
                            addPost(
                                e,
                                desc,
                                pass,
                                name,
                                setPostList,
                                setSortPostList
                            )
                        }
                    >
                        댓글 쓰기
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CommentWrap;
