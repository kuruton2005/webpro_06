"use strict";

const express = require("express");
const app = express();
const path = require("path");

// 静的ファイルの提供
app.use("/public", express.static(path.join(__dirname, "public")));

app.get("/task", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "task.html"));
});

// サーバーの起動
const PORT = 8080;
app.listen(PORT, () => console.log(`Server is running on http://127.0.0.1:${PORT}/task`));
