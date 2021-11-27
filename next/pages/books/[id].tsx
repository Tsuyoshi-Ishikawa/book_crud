import { Book } from "../../types/book";
import { getAllBookIds, getBookData } from "../../lib/book";
import DetailTemp from "../../components/templates/Detail/main"

type Props = {
  book: Book;
}

const BookDetail = ({ book }: Props) => {

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
    fallback: false,
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
    // getStaticPropsで返すprops.bookが空になり、SSGができないからと思われる。
    // つまり、もしfallback: trueにするならば、props.bookが空データならば、
    // 404ページを返すようにする必要がある。その分岐をcomponent側に実装する。

    // fallback: trueにするのは
    // 詳細ページがものすごく多い+ 変更する頻度が高い場合などに使用するのが良さそう
    // https://nextjs.org/docs/basic-features/data-fetching#when-is-fallback-true-useful
    // 基本的にはfallback: falseにするのが良いと思われる,
  }
}

type Params = {
  id: string;
}

// paramsにpathに設定されている変数が入っている
export async function getStaticProps({ params }: { params: Params }) {
  console.log(params.id)
  const book = await getBookData(params.id);

  return {
    props: { book },
    revalidate: 3,
  };
}
