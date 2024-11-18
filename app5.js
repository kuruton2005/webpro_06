const express = require("express");
const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true })); // これを追加
app.use("/public", express.static(__dirname + "/public"));

app.get("/hello1", (req, res) => {
  const message1 = "Hello world";
  const message2 = "Bon jour";
  res.render('show', { greet1: message1, greet2: message2 });
});

app.get("/hello2", (req, res) => {
  res.render('show', { greet1: "Hello world", greet2: "Bon jour" });
});

app.get("/icon", (req, res) => {
  res.render('icon', { filename: "./public/Apple_logo_black.svg", alt: "Apple Logo" });
});

app.get("/luck", (req, res) => {
  const num = Math.floor(Math.random() * 6 + 1);
  let luck = '';
  if (num == 1) luck = '大吉';
  else if (num == 2) luck = '中吉';
  console.log('あなたの運勢は' + luck + 'です');
  res.render('luck', { number: num, luck: luck });
});

app.get("/janken", (req, res) => {
  let hand = req.query.hand;
  let win = Number(req.query.win);
  let total = Number(req.query.total);
  console.log({ hand, win, total });
  const num = Math.floor(Math.random() * 3 + 1);
  let cpu = '';
  if (num == 1) cpu = 'グー';
  else if (num == 2) cpu = 'チョキ';
  else cpu = 'パー';

  // ここに勝敗の判定を入れる
  let judgement = '';
  if ((hand === 'グー' && cpu === 'チョキ') ||
      (hand === 'チョキ' && cpu === 'パー') ||
      (hand === 'パー' && cpu === 'グー')) {
    judgement = '勝ち';
    win += 1;
  } else if (hand === cpu) {
    judgement = '引き分け';
  } else {
    judgement = '負け';
  }
  
  // 対戦数を増加
  total += 1;

  const display = {
    your: hand,
    cpu: cpu,
    judgement: judgement,
    win: win,
    total: total
  }
  
  res.render('janken', display);
});

app.get("/horoscope", (req, res) => {
  res.render('horoscope');
});

// 星座占いの結果を表示するエンドポイント
app.post("/horoscope/result", (req, res) => {
  const sign = req.body.sign; // ユーザーが選んだ星座
  const fortunes = ["大吉", "中吉", "小吉", "凶"];
  const fortune = fortunes[Math.floor(Math.random() * fortunes.length)];

  res.render('horoscope_result', { sign: sign, fortune: fortune });
});

app.get("/guess", (req, res) => {
  let guess = req.query.guess; // ユーザーの選択 (右 or 左)
  let correct = Math.random() < 0.5 ? "右" : "左"; // 正解をランダムに選ぶ
  let streak = Number(req.query.streak) || 0; // 連続成功回数を取得 (デフォルトは0)
  let judgement = "";

  // 判定処理
  if (guess === correct) {
    judgement = "正解！";
    streak += 1; // 連続成功回数を増加
  } else {
    judgement = "不正解…";
    streak = 0; // 不正解の場合、連続成功回数をリセット
  }

  // 表示データを構築
  const display = {
    guess: guess || "未入力", // ユーザーの選択
    correct: correct,         // ランダムで選ばれた正解
    judgement: judgement,     // 判定結果
    streak: streak            // 現在の連続成功回数
  };

  res.render("guess", display); // 結果をテンプレートに渡してレンダリング
});







app.listen(8080, () => console.log("Example app listening on port 8080!"));
