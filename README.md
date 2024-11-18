# webpro_06
2024/10/29

## このプログラムについて

### ファイル一覧

### ジャンケン
| ファイル | 説明 |
| - | - |
| app.js | プログラム本体。ジャンケンのロジックを実装。ユーザーの手（グー・チョキ・パー）を取得し、CPUの手をランダムに決定。勝敗を判定し、勝ち数や対戦数を管理。 |
| public/janken.html | ジャンケンの開始画面。ユーザーがジャンケンの手を入力するためのHTML画面。 |
| views/janken.ejs | ジャンケン結果のテンプレートファイル。ゲームの結果（自分の手、CPUの手、勝敗）を表示する画面。 |

#### 使用方法
1. `app5.js` を起動する。
2. Webブラウザで [http://localhost:8080/public/janken.html](http://localhost:8080/public/janken.html) にアクセスする。
3. 自分の手を入力する。

 フローチャート（ジャンケンのロジック）

```mermaid
flowchart TD
    start["開始"] --> input["ユーザーが手を入力"]
    input --> cpu["CPUがランダムな手を選択"]
    cpu --> judge["勝敗の判定"]
    judge --> win["勝ち"] --> update["勝ち数と対戦数を更新"] --> end["終了"]
    judge --> draw["引き分け"] --> update
    judge --> lose["負け"] --> update

### 星座占い
| ファイル | 説明 |
|-|-|
| app5.js | プログラム本体。ユーザーの入力（星座）を受け取り、ランダムな占い結果を返す。 |
| views/horoscope.ejs | 星座占いのテンプレートファイル。占い画面（入力フォーム）を提供し、ユーザーが12星座の中から選択して送信できる。 |
| views/horoscope_result.ejs | 占い結果のテンプレートファイル。 |


flowchart TD
    start["開始"] --> if{"星座が選択されたか?"}
    if -->|はい| process1["ランダムな運勢を選ぶ"]
    if -->|いいえ| error["エラー: 星座を選んでください"]
    process1 --> end["終了"]

### 右か左か当てるゲーム
| ファイル | 説明 |
|-|-|
| app.get("/guess", (req, res)) | プログラム本体。ユーザーの選択（右または左）を受け取り、正解をランダムに決定。正解と比較して結果を判定し、連続成功回数を更新。判定結果や連続成功回数をテンプレートに渡し、レンダリングして表示。 |
| views/guess.ejs | ゲーム結果のテンプレートファイル。ユーザーの選択、ランダムな正解、判定結果、連続成功回数を表示するHTMLテンプレート。また、次の挑戦のためのフォームを提供（連続成功回数を保持）。 |


flowchart TD
    start["開始"] --> input["ユーザーが右か左を選択"]
    input --> random["ランダムに正解を決定"]
    random --> compare["選択と正解を比較"]
    compare -->|正解| increment["連続成功回数を増加"]
    compare -->|不正解| reset["連続成功回数をリセット"]
    increment --> display["結果を表示"]
    reset --> display
    display --> end["終了"]
