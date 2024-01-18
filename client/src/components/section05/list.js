import axios from "axios";

const sortAscPostList = (posts) => {
    return [...posts].sort((a, b) => a.postNum - b.postNum);
};

const sortDescPostList = (posts) => {
    return [...posts].sort((a, b) => b.postNum - a.postNum);
};
const list = (setPostList, setSortPostList) => {
    axios
        .get("/api/post/list")
        .then((res) => {
            console.log(res.data); // 이 부분을 추가

            if (res.data.success) {
                // 내림차순으로 정렬된 목록을 상태에 설정
                setPostList(sortDescPostList(res.data.postList));
                // 오름차순으로 정렬된 목록을 상태에 설정
                setSortPostList(sortAscPostList(res.data.postList));
                console.log("axios list");
            }
        })
        .catch((err) => {
            console.log(err);
        });
};

export default list;
