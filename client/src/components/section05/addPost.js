import axios from "axios";

const sortAscPostList = (posts) => {
    return [...posts].sort((a, b) => a.postNum - b.postNum);
};

const sortDescPostList = (posts) => {
    return [...posts].sort((a, b) => b.postNum - a.postNum);
};
const updatePostLists = (newPost, setPostList, setSortPostList) => {
    setPostList((prevPosts) => sortDescPostList([newPost, ...prevPosts]));
    setSortPostList((prevPosts) => sortAscPostList([newPost, ...prevPosts]));
};

const addPost = async (e, desc, pass, name, setPostList, setSortPostList) => {
    e.preventDefault();

    if (desc && pass && name) {
        let body = {
            name: name,
            pass: pass,
            content: desc,
        };
        await axios
            .post("/api/post/write", body)
            .then((res) => {
                if (res.data.success) {
                    updatePostLists(
                        res.data.newPost,
                        setPostList,
                        setSortPostList
                    );
                    alert("댓글 작성이 완료되었습니다.");
                } else {
                    console.log("axios실패");
                }
            })
            .catch((err) => {
                console.log(err);
            });
    } else {
        alert("내용을 입력해주세여");
    }
};
export default addPost;
