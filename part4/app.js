const express = require("express");
const app = express(); //建立一個Express伺服器
app.get("/", function (req, res) {
  res.send("Hello MyServer!");
});
//如果要提供影像、CSS 檔案和 JavaScript 檔案等之類的靜態檔案，請使用 Express 中的 express.static 內建中介軟體函數。
//query 查詢?
app.use(express.static("static_file"));

app.get("/getData", (req, res) => {
  let result;
  //part2
  // 新增空字串
  if (req.query.length === 0 || req.query.number === "") {
    // console.log("aaa");
    result = "Lack of Parameter";
  } else {
    if (isNaN(req.query.number)) {
      result = "Wrong Parameter";
    } else {
      result = ((1 + Number(req.query.number)) * Number(req.query.number)) / 2; //轉成數字 再進行計算
    }
  }

  res.send(`"${result}"`); //  "Wrong Parameter" 傳進來只有Wrong Parameter 所以外面要加"""
});
app.listen(3000); //告訴server聽取3000這個Port
