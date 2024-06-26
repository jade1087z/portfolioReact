const express = require("express");
const path = require("path");
// 데이터베이스
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 5050;

// DB, Firebase, navercloud key
const config = require("./server/config/key.js");

app.use(express.static(path.join(__dirname, "./client/build")));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// router
app.use("/api/post", require("./server/router/post.js"));

app.listen(port, () => {
    mongoose
        .connect(config.mongoURI)
        .then(() => {
            console.log("listening  --> " + port);
            console.log("mongoose --> connecting");
        })
        .catch((err) => {
            console.log(err);
        });
});
app.get("/", (req, res) => {
    res.sendFile(path.join("/home/ubuntu/portfolioReact/client/build/index.html"));
});

app.get("*", (req, res) => {
    res.sendFile(path.join("/home/ubuntu/portfolioReact/client/build/index.html"));
});
