# sotto MAP

「必要な時に、そっと受け取れる。」をコンセプトにした、生理用品ディスペンサーの設置場所検索・受け取りをサポートするWebアプリのプロトタイプです。

学校や公共施設などで、生理用品が必要になったときに周囲へ声をかけずに受け取れる環境を目指しています。

## 主な機能

### 利用者向け画面
- **ホーム**：受け取りまでの残り時間表示、受け取り方法の案内、QRコード表示
- **マップ**：ディスペンサーの設置場所を地図上に表示
- **設置場所の詳細**：施設名、利用可能時間、住所、在庫状況を表示
- **マイページ**：登録情報、通知設定、お問い合わせなどの各種メニュー
- **アカウント関連**：新規登録、ログイン、登録情報の変更画面
- **お知らせ**：お知らせ一覧・詳細画面

### 施設・企業向け画面
- 管理画面へのログイン導線
- ディスペンサーや施設情報の管理画面
- お知らせ・お問い合わせ関連の画面
- 設定画面

## 使用技術・ライブラリ

- HTML5
- CSS3 / Sass（SCSS）
- JavaScript
- [Leaflet](https://leafletjs.com/)：地図の表示
- [OpenStreetMap](https://www.openstreetmap.org/)：地図タイル
- [QRCode.js](https://github.com/davidshimjs/qrcodejs)：QRコードの生成
- [Font Awesome](https://fontawesome.com/)：アイコン
- [the-new-css-reset](https://github.com/elad2412/the-new-css-reset)：CSSリセット

一部のライブラリはCDNから読み込んでいます。実行時はインターネット接続が必要です。

## 起動方法

1. ZIPファイルを展開します。
2. `SSK` フォルダをVisual Studio Codeなどで開きます。
3. `index.html` をブラウザで開きます。
   - 推奨：Visual Studio Codeの拡張機能 **Live Server** を使用し、`index.html` を起動してください。
4. 地図を確認する場合は、画面下部の「マップ」から `map.html` を表示します。

## ディレクトリ構成

```text
SSK/
├── index.html                 # 利用者ホーム
├── start.html                 # スタート画面
├── signUp.html                # 新規登録
├── logIn.html                 # ログイン
├── map.html                   # 設置場所マップ
├── mypage.html                # マイページ
├── register.html              # 登録情報
├── name-change.html           # 名前変更
├── mail-change.html           # メールアドレス変更
├── password-change.html       # パスワード変更
├── notice.html                # 通知設定
├── news.html                  # お知らせ一覧
├── article.html               # お知らせ詳細
├── contact.html               # お問い合わせ
├── business.html              # 施設・企業向けログイン導線
├── business-home.html         # 管理画面ホーム
├── business-setting.html      # 管理画面設定
├── business-news.html         # 管理画面のお知らせ
├── business-article.html      # 管理画面のお知らせ詳細
├── business-contact.html      # 管理画面お問い合わせ
├── business-password.html    # 管理画面パスワード入力
├── css/
│   ├── style-amano.css        # 利用者向けスタイル
│   └── ...
├── sass/
│   ├── style-amano.scss
│   ├── style-amano.css
│   ├── style-yoshizawa.scss
│   ├── style-yoshizawa.css
│   ├── style-kaida.scss
│   └── style-kaida.css
├── JS/
│   ├── index-amano.js         # ホーム画面のタイマー・案内モーダル
│   ├── qr-code.js             # QRコード表示
│   ├── index-yoshizawa.js     # 地図・設置場所情報
│   └── index-kaida.js
└── images/                    # ロゴ・画面素材・説明画像など
```

## 操作・動作について

- ホーム画面の「取り出す方法」から、受け取り手順をスライド形式で確認できます。
- 「sottoから取り出す」を押すとQRコードがモーダル内に表示されます。端末識別用のIDは `localStorage` に保存されます。
- マップではマーカーを選択すると施設情報が表示されます。現在地の取得にはブラウザの位置情報許可が必要です。
- 地図上の施設情報はJavaScript内のサンプルデータです。実際の設置場所・在庫情報と連動しているわけではありません。

## 注意事項・制限

このプロジェクトは画面や操作イメージを確認するためのフロントエンドプロトタイプです。

- データベースやサーバーとの接続はありません。
- 新規登録・ログイン・登録情報変更などは、画面遷移を中心としたデモです。認証や情報の保存は実装していません。
- QRコードはブラウザ上で生成するデモです。実際のディスペンサーとの通信・解錠・受け取り処理には接続していません。
- タイマーは画面表示用の簡易的な実装です。実際の利用履歴や受け取り制限を管理するものではありません。
- マップの施設名・住所・在庫状況は仮データです。
- 一部の画面やリンク、機能は制作途中の状態を含みます。

実運用する場合は、認証、データ保存、在庫管理、QRコードの検証、ディスペンサーとの連携などを別途実装する必要があります。
