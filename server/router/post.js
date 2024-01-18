const express = require("express");
const router = express.Router();
// 스키마

// 스키마
const { Counter } = require("../Model/Counter.js");
const { Post } = require("../Model/Post.js");

router.post("/write", (req, res) => {
    let temp = {
        name: req.body.name,
        pass: req.body.pass,
        content: req.body.content,
    };

    Counter.findOne({ name: "counter" })
        .exec()
        .then((counter) => {
            temp.postNum = counter.postNum;

            const newPost = new Post(temp);
            newPost.save().then((savedPost) => {
                Counter.updateOne(
                    { name: "counter" },
                    { $inc: { postNum: 1 } }
                ).then(() => {
                    res.status(200).json({ success: true, newPost: savedPost });
                });
            });
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json({ success: false });
        });
});

router.get("/list", (req, res) => {
    Post.aggregate([
        // 문서 정렬
        // { $sort: { postNum: -1 } },
        // // 포맷된 날짜 필드 추가
        {
            $project: {
                name: 1,
                pass: 1,
                content: 1,
                postNum: 1,
                formattedDate: {
                    $dateToString: { format: "%Y-%m-%d", date: "$createdAt" },
                },
            },
        },
    ])
        .then((result) => {
            res.status(200).json({ success: true, postList: result });
        })
        .catch((err) => {
            res.status(400).json({ success: false, error: err.message });
        });
});

module.exports = router;
