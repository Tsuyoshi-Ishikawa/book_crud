# 技術構成
- Next(React)
- Tailwind Css
- Typescript

# directory構成
## component
pagesで使用するcomponentを配置。Atomic Designを採用しているため下記のようなdirectory構成になっている。<br>

- atoms
- molecules
- organisms
- templates

atomsが最小単位で、templatesが最大単位で、atoms→molecules→organisms→templatesの順に抽象化されていく。<br>
templatesはpagesから直接使用される。<br>
各パーツごとにdirectoryを作成し、パーツを把握しやすくしている。<br>
CSSはそれらのパーツ内で完結するようにする。

## context
globalなstateであるcontextを定義する場所。<br>
contextを管理しているproviderをpagesで使用することで、providerで囲まれた子コンポーネントは<br>
contextを使用することができるようになる。<br>

詳しい説明は./next/context/READMEに記載

## lib
pagesで使用される関数を定義。<br>
SSGする際に、APIにデータをfetchしにいく関数などがある。

## pages
実際に表示するpageを定義。componentディレクトリのパーツを組み合わせてpageを作成する。<br>
SSGしてpageを作成するので、getStaticPropsなどでAPIから動的データをfetchしてpageに埋め込んでいる。

## types
componentやcontextで共通で使用する型を定義。

# 開発環境のbuildに関して
開発環境では、基本的にはyarn devしているのでSSGにはならない。<br>
SSGした動向を確認したい場合はDockerfileで設定し直す。<br>
詳しい内容はDockerfileに記載
