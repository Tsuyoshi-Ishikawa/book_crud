import { useRouter } from "next/router";
import { Book } from "../../types/book";
import { getAllBookIds, getBookData } from "../../lib/book";
import DetailTemp from "../../components/templates/Detail/main"

type Props = {
  book: Book;
}

const BookDetail = ({ book }: Props) => {
  const router = useRouter();

  // まだSSGしていないページをSSGする時の待ち時間で表示
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <DetailTemp book={book}/>
    </>
  )
}

export default BookDetail

// pathの[id]に設定する値を持つ配列をpathsにセットして返すと
// [id].tsx→1.htmlのようにHTMLが作成される。
export async function getStaticPaths() {
  const paths = await getAllBookIds();

  return {
    paths,
    fallback: true,
    // fallbackがtrueの場合は SSGした時にcannot read property 渡している値 of undefinedになることがある

    // 原因
    // APIにないbookデータを取りに行こうとした時にも、(/books/{存在しないID}で接続)
    // getStaticPropsが走るの、存在しないデータidでgetBookDataが走ってしまう
    // getStaticPropsで返すprops.bookが空になる。
    // ↑
    // 下記を追加すると一SSG(build)は通るようになった。
    // if (router.isFallback || !book) {
    //   return <div>Loading...</div>;
    // }

    // だが/books/{存在しないID}で接続するとサーバーエラーになる。
    // getStaticPropsのgetBookData(params.id)が空になり、SSGができないからと思われる。
    // つまり、もしfallback: trueにするならば、getBookData(params.id)が空データの場合に、
    // 404ページを返すようにする必要がある→notFound: trueで対応

    // fallback: trueにするユースケースは
    // 詳細ページがものすごく多い+ 変更する頻度が高い場合などに使用す場合
    // https://nextjs.org/docs/basic-features/data-fetching#when-is-fallback-true-useful
  }
}

type Params = {
  id: string;
}

// 下記の場合にgetStaticPropsが走る
// ・事前にSSGする時
// ・SSGされていないページへのアクセスがあった時
// ・ISRの時
export async function getStaticProps({ params }: { params: Params }) {
  // paramsにpathに設定されている変数が入っている
  const book = await getBookData(params.id);

  // APiから空のデータが帰る場合は404ページを返す、ちゃんとstatus codeも404なので良い。
  // https://nextjs.org/blog/next-10#notfound-support
  // 開発環境で動かすとUnhandled Runtime Error Error: Failed to load script: /_next/static/chunks/pages/404.jsというエラーが出るが、
  // 本番(yarn build & yarn start)では表示されないので、一旦OKとする
  // https://stackoverflow.com/questions/68939360/next-js-unhandled-runtime-error-failed-to-load-script-next-static-chunks
  if (book.id === "") {
    return {
      notFound: true,
      revalidate: 3, // これを設定しないと、SSGされる前にアクセスされてしまったページは毎回404ページを返すことになってしまう。
    };
  };

  return {
    props: { book },
    revalidate: 3,
  };
}
