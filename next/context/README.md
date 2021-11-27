# context
context(グローバルなstate)を設定するために、専用のディレクトリを作成。<br>
contextを管理しているproviderをpagesで使用することで、providerで囲まれた子コンポーネントは<br>
contextを使用することができるようになる。<br><br>

子コンポーネントでcontextを使用する方法は、useContextを使用することである。

# context/bookListを作成したが結局使わなくなった経緯
本の一覧ページを作成するために、context(グローバルなstate)に本の一覧データを登録しようと思った。<br><br>
context(グローバルなstate)を利用する用途としては下記が当てはまる。
- context(グローバルなstate)を作成して、様々なコンポーネントから参照・更新できるようにしたい

しかし本の一覧データをstateで管理して、コンポーネントから更新されるようにする必要はない。<br>
一番上層のpagesからデータを受け取って、それを子コンポーネントで使用するだけで良い。<br>
最新の本の一覧データを得るために、ISRやuseSWRを使用すればよい。<br>

本の一覧データをcontext(グローバルなstate)で管理するcontext/bookListを作成したが、結局使用しなくなった。
