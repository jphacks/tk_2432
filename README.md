# Drift

[![IMAGE ALT TEXT HERE](https://jphacks.com/wp-content/uploads/2024/07/JPHACKS2024_ogp.jpg)](https://www.youtube.com/watch?v=DZXUkEj-CSI)

## 製品概要
### 背景(製品開発のきっかけ、課題等）
現代のSNSでは、どれだけポジティブな投稿だけを見たいと思っても、ネガティブな内容も強制的に目に入ってしまうのが現状です。そこで私たちは、ポジティブな投稿で溢れ、自分を守りつつ穏やかに交流を楽しめるSNSがあれば多くの人が安心して使えるのではないかと考えました。この発想の背景には、バルーンリリースという文化があります。バルーンリリースとは、願いを込めた手紙を風船に結び、空に飛ばして「願いが天に届きますように」と祈る風習です。この風習のように、誰かの喜びや幸せがふんわりと漂い、どこかの誰かに優しく届く。そんな暖かなつながりがSNSでも実現できればという想いから、このアプリケーションを開発しました。
### 製品説明（具体的な製品の説明）
想定している機能

このアプリケーションはポジティブな投稿のみが流れてくるSNSを目指しています。
- Letter：ユーザーが投稿する文章です。ポジティブな内容を書きます。レターはバルーンに結ばれ、他のユーザーに届きます。
- Sticker：リアクションの役割を果たすアイテムで、「Happy（マゼンタ）」「Healing（シアン）」「Amusing（イエロー）」「Negative（グレー）」の4種類があります。ユーザーはこれらのうち１枚を選んでレターに貼り付けることができます。
- Catch：他のユーザーが飛ばしたバルーンが1つずつ届く機能です。届いたバルーンの色は、貼られたステッカーの色が混ざって変化しており、色によってそのレターの感情をある程度読み取ることができます。また、ユーザーは欲しい色に近いバルーンを指定して受け取ることができ、結ばれたレターを読むかどうかを選択できます。さらに、一定数のネガティブステッカーが貼られたレターは飛ばなくなる仕組みです。レターの枠の色は、バルーンがこれまでのステッカーで変化した色がグラデーションとして表示されさまざまな感情が折り重なった様子を表現しています。
- Release：ユーザーがレターを書き、1枚ステッカーを貼った後バルーンを空へ飛ばす機能です。

現在実装されている機能
１つずつレターが届き、ユーザーは閲覧するかどうかを選択できます。３種類のステッカーが用意されており、貼り付けたステッカーによって背景の色が変化します。
### 特長
#### 1. レターの感情がバルーンの色で表現されています。
#### 2. バルーンの色を見てレターを読むかをユーザーが選択できます。
#### 3. 一定のユーザーがネガティブと判断したレターは飛ばなくなります。

### 解決出来ること
ネガティブな投稿が強制的に目に入ることを防ぎます。  
癒されたい、面白い投稿で笑いたいなど、ポジティブな投稿の中でもピンポイントな希望に応えます。  
一つ一つ表示するため情報過多を防ぎます。
### 今後の展望
想定している機能の実装に加え、時間で空（背景）の色が変えたり、写真、動画の送付を可能にしたりすることを目指します。
### 注力したこと（こだわり等）
* バルーンの色の変化をどのようにするかに注力しました。選択された色の平均値と最頻値の中間色にすることで、一目でどの感情を孕んでいるのかが分かり、かつグレーで色がくすみすぎないようにしました。

## 開発技術
### 活用した技術
* Python
* TypeScript
* Supabase/PostgreSQL
#### フレームワーク・ライブラリ・モジュール
* FastAPI
* Next.js
