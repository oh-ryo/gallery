フォトギャラリー　練習
====

Overview
- 趣味のカメラで撮影した写真のギャラリーサイトを作るための練習用コードとなります。
- データベースを使用せずフロントエンドのみで画像ギャラリーを生成可能
- 命名規則に基づいたフォルダ、ファイルを作成することで画像情報を取得可能

## Description
- Ajaxを利用して非同期に画像情報を取得し、スライダーもしくはグローバルナビゲーションをタップすることによりギャラリーを表示

## Demo

## VS.

## Requirement
- jQuery ver3.3.1

## Usage
- 「img」フォルダに作成したいギャラリーのフォルダを作成してギャラリーに表示したい画像を「img1」と名付けて格納する(2個以上格納する場合は「img2」、「img3」と数字部分を増やしていく)
- 画像拡張子が「jpg」以外の場合は「gallery.js」内の8行目「'.jpg'」部分を該当拡張子に変更する
- ギャラリー用フォルダ内に格納する画像の最大格納数が100を超える場合「gallery.js」内のループ用変数「len」に代入する数値を最大格納数よりも大きい値に変更して代入する
- 「common.js」内の配列「menulist」に上記で作成したギャラリー用フォルダの名前を代入する
- 「img」フォルダにスライダーとして表示する画像をギャラリー用フォルダと同名の名前を付ける

## Install
- インストールが必要な作業はありません

## Contribution

## Licence
- スライダーの画像については私自身が撮影したものに簡単な加工を施したものであるため他者の使用はお断りしております。
- ギャラリーに表示している画像については下記フリー素材サイトより画像をお借りしております。  
https://www.photock.jp/
- 当プロジェクトの情報を用いて行う一切の行為について、何らの責任を負うものではありません。

## Author

