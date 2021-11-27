import useSWR from "swr"
import { Book } from "../types/book"
import ListTemp from "../components/templates/List/main"
import { getAllBookData } from "../lib/book"

type Props = {
  staticfilterdBooks: Book[];
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());
const apiUrl = `${process.env.NEXT_PUBLIC_RESTAPI_URL}/books`;

// 引数にgetStaticPropsで得られたpropsが入る
const Books = ({ staticfilterdBooks }: Props) => {
  // useSWR参考(https://zenn.dev/uttk/articles/b3bcbedbc1fd00)
  const { data: books, mutate } = useSWR(apiUrl, fetcher, {
    fallbackData: staticfilterdBooks, // 初期データセット
    refreshInterval: 1000 // データの確認をしにいくインターバル、データが新しくなっていれば更新
  });

  return (
    <ListTemp books={books}/>
  )
}

export default Books

export async function getStaticProps() {
  const staticfilterdBooks = await getAllBookData();

  return {
    props: { staticfilterdBooks },
    revalidate: 3,
  };
}
