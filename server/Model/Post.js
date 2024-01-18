const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
    {
        name: String,
        pass: String,
        content: String,
        postNum: Number,
    },
    { collection: "posts", timestamps: true }
);

const Post = mongoose.model("Post", postSchema);
module.exports = { Post };
