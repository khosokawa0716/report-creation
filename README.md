## 日報作成ツール

このツールは、日報を簡単に、正確に作成することができます。また、データを書き出すことによって、状態を保存しておくことができます。
https://khosokawa0716.github.io/report-creation/index.html

### はじめに

ツールを使う前に、設定が必要な場合があります。
日報を送信するときに使っているメールソフトが、mailto のリンクをクリックしたときに開かれる必要があります。
Gmail を Chrome で設定する例です。

1. Gmail にアクセスすると、アドレス欄の右側にひし形が 2 つ重なったマークが表示されています。
1. これをクリックして「すべてのメールリンクを mail.google.com で開きますか？」を許可して完了をクリックします。
1. Windows の場合はスタートメニューから「設定（歯車のアイコン）」→「アプリ」→「規定のアプリ」のメールの項目を Google Chrome に設定します。

ページにアクセスすると、パスワードが要求されます。
正しいパスワードでログインすると、ブラウザのローカルストレージに保存され、次回からパスワードの入力が不要になります。

### 使い方

- 画面下の方にある宛先、CC、宛先の人の名前、自分の名前、4 つの項目を入力します。これらの項目は変わらないと思うので、入力したらデータの書き出しをクリックして保存するのが良いです。
- タスクの入力をします。その日行ったタスクの場合、本日の所にチェックを入れてください。この状態では報告の欄が入力必須になります。
- リロードを行うとデータがクリアされます。保存を行うにはデータの書き出しをクリックして、データをダウンロードします。
- 保存したデータを使用する場合には、データの読み込みをクリックしてデータを選択してください。データが読み込まれると、それまで入力していた状態に上書きされます。
- プレビューをクリックすると、メールで送る文章が確認できます。もう一度クリックすると、入力するページに戻ります。
- メール作成をクリックすると宛先、CC が入力された状態でメーラーが起動します。クリップボードには作成した日報の内容がコピーされているので、メールの内容に貼り付けてください。

### 注意

- このツールは日報の内容を保証するものではありません。メールを送信する前に、宛先や内容の確認を行なってください。
- ある程度画面幅のあるパソコンの使用を想定しています。レスポンシブには対応していません。
- バグや機能の要望がありましたら、ご連絡いただけると嬉しいです。
  https://github.com/khosokawa0716/report-creation/issues

### 更新履歴

- 2023 年 2 月 7 日　リリース
- 2023 年 2 月 8 日　モーダルの重なり順を修正
- 2023 年 2 月 9 日　 MKPL プロジェクトの追加
- 2023 年 2 月 11 日　本日のタスクだけ表示する機能を追加、タスクの登録件数の上限を 20 から 100 に変更
- 2023 年 2 月 14 日　ブランチ名作成ツールを移植
- 2023 年 3 月 29 日　ブランチ名作成ツールの URL を修正
- 2023 年 4 月 11 日　稼働時間と追加休憩が保存されないように修正、時間のスタイルを調整
- 2023 年 4 月 16 日　タスクの詳細を展開で表示されるように変更、ボタンアイコンを追加
- 2023 年 5 月 11 日　ブランチ名作成ツール新しいブランチ名を追加
- 2023 年 8 月 21 日　 FB_MKPL プロジェクトの追加、日報作成ツールでコメントを保存しない仕様に変更
- 2023 年 10 月 26 日　日報作成ツールでコメントが undefined になる不具合を修正
- 2023 年 12 月 21 日　日報作成ツールで改行を設定する機能を追加
- 2024 年 1 月 18 日　ブランチ名作成ツール TICKET_RESERVE プロジェクトの追加
- 2024 年 1 月 30 日　日報作成ツール TICKET_RESERVE プロジェクトの追加
- 2024 年 12 月 29 日　日報作成ツール タスク開閉の状態とテキストエリアの高さを保持できるように修正
